#!/usr/bin/env python3
from __future__ import annotations

import json
import random
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "src" / "lib" / "demo" / "catalog.generated.ts"


def slugify(value: str) -> str:
    value = value.lower()
    value = re.sub(r"[^\w\s-]", "", value)
    value = re.sub(r"\s+", "-", value.strip())
    value = re.sub(r"-{2,}", "-", value)
    return value


def pick(seq, rng, count):
    if count >= len(seq):
        return list(seq)
    return rng.sample(seq, count)


def make_variant(variant_id, name, option, price, rng):
    return {
        "id": variant_id,
        "name": name,
        "option": option,
        "price": price,
        "stock": rng.randint(8, 70),
    }


def unsplash(query):
    safe_query = query.replace(" ", "%20")
    return f"https://images.unsplash.com/?" f"auto=format&fit=crop&w=900&q=60&{safe_query}"


def build_catalog():
    rng = random.Random(42)

    supplement_brands = [
        "Growth",
        "Max Titanium",
        "Integralmedica",
        "Dux",
        "Vitafor",
        "Body Action",
        "Atlhetica",
        "Under Labz",
        "Shark Pro",
    ]
    accessory_brands = ["Shark Pro", "Under Labz", "Body Action", "Atlhetica", "Growth"]
    apparel_brands = ["Body Action", "Atlhetica", "Shark Pro", "Dux", "Max Titanium"]

    flavors = ["Chocolate", "Baunilha", "Morango", "Cookies", "Cappuccino", "Caramelo", "Frutas Vermelhas"]
    colors = ["Preto", "Azul", "Cinza", "Vermelho", "Rosa", "Verde", "Branco"]
    sizes = ["P", "M", "G", "GG"]

    products = []
    used_slugs = set()

    def add_product(product):
        slug = product["slug"]
        if slug in used_slugs:
            suffix = 2
            while f"{slug}-{suffix}" in used_slugs:
                suffix += 1
            product["slug"] = f"{slug}-{suffix}"
        used_slugs.add(product["slug"])
        products.append(product)

    supplement_templates = [
        ("Whey Protein Concentrado", "flavor_weight", ["hipertrofia", "recuperação", "performance"]),
        ("Whey Protein Isolado", "flavor_weight", ["hipertrofia", "performance"]),
        ("Creatina Monohidratada", "weight", ["força", "performance"]),
        ("Pré-Treino Power", "flavor", ["performance", "energia"]),
        ("Intra-Workout Hidratante", "flavor", ["performance", "recuperação"]),
        ("Glutamina Recovery", "weight", ["recuperação", "saúde"]),
        ("Ômega 3 Premium", "caps", ["saúde"]),
        ("Colágeno Hidrolisado", "flavor", ["saúde", "beleza"]),
        ("Cafeína Concentrada", "caps", ["performance", "emagrecimento"]),
        ("Multivitamínico Completo", "caps", ["saúde"]),
        ("Magnésio Quelato", "caps", ["saúde", "recuperação"]),
        ("NAC + CoQ10", "caps", ["saúde"]),
        ("Hydrolite Isotônico", "flavor", ["performance", "hidratação"]),
        ("Pasta de Amendoim Fit", "flavor", ["saúde", "energia"]),
        ("Barra Proteica", "flavor", ["performance", "energia"]),
        ("Wafer Proteico", "flavor", ["performance"]),
        ("BCAA 4:1:1", "caps", ["recuperação"]),
        ("Termogênico Clean", "caps", ["emagrecimento", "performance"]),
        ("Caseína Night", "flavor_weight", ["recuperação"]),
        ("Refeição Líquida", "flavor", ["saúde", "praticidade"]),
    ]

    while len([p for p in products if p["categorySlug"] == "suplementos"]) < 60:
        for base_name, variant_kind, tags in supplement_templates:
            if len([p for p in products if p["categorySlug"] == "suplementos"]) >= 60:
                break
            brand = rng.choice(supplement_brands)
            weight = rng.choice(["300g", "500g", "900g", "1kg", "2kg"])
            name = base_name if variant_kind != "flavor_weight" else f"{base_name} {weight}"
            price = round(rng.uniform(59, 229), 2)
            compare_at = round(price * rng.uniform(1.15, 1.4), 2) if rng.random() < 0.35 else None
            slug = slugify(f"{base_name}-{brand}-{weight}")
            images = [
                f"https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
                f"https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60",
            ]
            variants = []
            if variant_kind == "flavor_weight":
                for flavor in pick(flavors, rng, 3):
                    for weight_option in pick(["900g", "1kg", "2kg"], rng, 2):
                        option = f"{flavor} {weight_option}"
                        variants.append(
                            make_variant(
                                f"{slug}-{slugify(option)}",
                                "Sabor/Peso",
                                option,
                                price + rng.uniform(-5, 10),
                                rng,
                            )
                        )
            elif variant_kind == "weight":
                for weight_option in pick(["150g", "300g", "500g", "1kg"], rng, 3):
                    variants.append(
                        make_variant(
                            f"{slug}-{slugify(weight_option)}",
                            "Peso",
                            weight_option,
                            price + rng.uniform(-8, 6),
                            rng,
                        )
                    )
            elif variant_kind == "caps":
                for qty in ["60 cápsulas", "120 cápsulas", "180 cápsulas"]:
                    variants.append(
                        make_variant(
                            f"{slug}-{slugify(qty)}",
                            "Quantidade",
                            qty,
                            price + rng.uniform(-4, 8),
                            rng,
                        )
                    )
            else:
                for flavor in pick(flavors, rng, 3):
                    variants.append(
                        make_variant(
                            f"{slug}-{slugify(flavor)}",
                            "Sabor",
                            flavor,
                            price + rng.uniform(-4, 6),
                            rng,
                        )
                    )

            add_product(
                {
                    "id": f"sup-{len(products)+1}",
                    "name": f"{base_name} {brand}",
                    "slug": slug,
                    "categorySlug": "suplementos",
                    "brand": brand,
                    "price": round(price, 2),
                    "compareAt": compare_at,
                    "images": images,
                    "description": (
                        "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a "
                        "consistência nos objetivos."
                    ),
                    "tags": tags,
                    "variants": variants,
                }
            )

    accessory_templates = [
        ("Coqueteleira", "color", ["performance"]),
        ("Squeeze Térmico", "color", ["performance"]),
        ("Porta-cápsulas", "color", ["praticidade"]),
        ("Strap de Levantamento", "color", ["força"]),
        ("Munhequeira", "color", ["proteção"]),
        ("Cinturão de Treino", "size", ["força"]),
        ("Corda de Pular", "color", ["performance"]),
        ("Mini Band", "color", ["performance"]),
        ("Faixa Elástica", "color", ["recuperação"]),
        ("Rolo Miofascial", "color", ["recuperação"]),
        ("Toalha Fitness", "color", ["praticidade"]),
        ("Boné Esportivo", "color", ["estilo"]),
    ]

    while len([p for p in products if p["categorySlug"] == "acessorios"]) < 25:
        for base_name, variant_kind, tags in accessory_templates:
            if len([p for p in products if p["categorySlug"] == "acessorios"]) >= 25:
                break
            brand = rng.choice(accessory_brands)
            price = round(rng.uniform(19, 159), 2)
            compare_at = round(price * rng.uniform(1.1, 1.35), 2) if rng.random() < 0.3 else None
            slug = slugify(f"{base_name}-{brand}")
            variants = []
            if variant_kind == "size":
                for size in sizes:
                    variants.append(
                        make_variant(
                            f"{slug}-{size.lower()}",
                            "Tamanho",
                            size,
                            price + rng.uniform(-3, 8),
                            rng,
                        )
                    )
            else:
                for color in pick(colors, rng, 3):
                    variants.append(
                        make_variant(
                            f"{slug}-{slugify(color)}",
                            "Cor",
                            color,
                            price + rng.uniform(-3, 5),
                            rng,
                        )
                    )
            add_product(
                {
                    "id": f"acc-{len(products)+1}",
                    "name": f"{base_name} {brand}",
                    "slug": slug,
                    "categorySlug": "acessorios",
                    "brand": brand,
                    "price": price,
                    "compareAt": compare_at,
                    "images": [
                        "https://images.unsplash.com/photo-1584751837810-19b5c1804b98?auto=format&fit=crop&w=900&q=60",
                        "https://images.unsplash.com/photo-1523475496153-3d6cc4d79e97?auto=format&fit=crop&w=900&q=60",
                    ],
                    "description": "Acessório funcional para treinos mais organizados e eficientes.",
                    "tags": tags,
                    "variants": variants,
                }
            )

    apparel_templates = [
        ("Cropped Fitness", ["fitness feminina", "performance"]),
        ("Top Dry Fit", ["fitness feminina", "performance"]),
        ("Legging Power", ["fitness feminina", "performance"]),
        ("Shorts 2 em 1", ["fitness feminina", "performance"]),
        ("Conjunto Feminino", ["fitness feminina", "performance"]),
        ("Regata Dry Fit", ["performance"]),
        ("Camiseta Dry Fit", ["performance"]),
        ("Corta-vento", ["performance", "conforto"]),
        ("Calça Legging", ["fitness feminina"]),
        ("Jaqueta Training", ["performance", "conforto"]),
    ]

    while len([p for p in products if p["categorySlug"] == "roupas"]) < 45:
        for base_name, tags in apparel_templates:
            if len([p for p in products if p["categorySlug"] == "roupas"]) >= 45:
                break
            brand = rng.choice(apparel_brands)
            price = round(rng.uniform(69, 219), 2)
            compare_at = round(price * rng.uniform(1.12, 1.4), 2) if rng.random() < 0.4 else None
            slug = slugify(f"{base_name}-{brand}")
            variants = []
            for size in sizes:
                color = rng.choice(colors)
                option = f"{size} / {color}"
                variants.append(
                    make_variant(
                        f"{slug}-{slugify(option)}",
                        "Tamanho",
                        option,
                        price + rng.uniform(-6, 12),
                        rng,
                    )
                )
            add_product(
                {
                    "id": f"app-{len(products)+1}",
                    "name": f"{base_name} {brand}",
                    "slug": slug,
                    "categorySlug": "roupas",
                    "brand": brand,
                    "price": price,
                    "compareAt": compare_at,
                    "images": [
                        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
                        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60",
                    ],
                    "description": "Peça confortável e versátil para treinos e rotina ativa.",
                    "tags": tags,
                    "variants": variants,
                }
            )

    def find_by_keywords(keywords):
        matches = []
        for product in products:
            for keyword in keywords:
                if keyword in product["name"].lower() or keyword in product["slug"]:
                    matches.append(product["slug"])
                    break
        return matches

    key_products = find_by_keywords(
        [
            "creatina",
            "whey",
            "colágeno",
            "hydrolite",
            "cafeína",
            "barra",
            "coqueteleira",
            "boné",
            "cropped",
            "corta-vento",
            "shorts",
        ]
    )
    rng.shuffle(key_products)
    mais_vendidos = list(dict.fromkeys(key_products))[:12]
    if len(mais_vendidos) < 12:
        remaining = [p["slug"] for p in products if p["slug"] not in mais_vendidos]
        rng.shuffle(remaining)
        mais_vendidos.extend(remaining[: 12 - len(mais_vendidos)])

    novidades = [p["slug"] for p in products[-12:]]

    ofertas = [p["slug"] for p in products if p.get("compareAt") and p["compareAt"] > p["price"]]
    ofertas = ofertas[:16] if len(ofertas) >= 16 else ofertas + novidades[: 16 - len(ofertas)]

    colecao_feminina = [
        p["slug"]
        for p in products
        if p["categorySlug"] == "roupas" and "fitness feminina" in p["tags"]
    ][:16]

    return {
        "products": products,
        "maisVendidos": mais_vendidos,
        "novidades": novidades,
        "ofertas": ofertas,
        "colecaoFeminina": colecao_feminina,
    }


def write_ts(catalog):
    header = """export type DemoVariant = {
  id: string
  name: string
  option: string
  price: number
  stock: number
}

export type DemoProduct = {
  id: string
  name: string
  slug: string
  categorySlug: 'suplementos' | 'acessorios' | 'roupas'
  brand: string
  price: number
  compareAt?: number
  images: string[]
  description: string
  tags: string[]
  variants: DemoVariant[]
}
"""
    payload = json.dumps(catalog, ensure_ascii=False, indent=2)
    content = f"{header}\nexport const demoCatalog = {payload} as const\n"
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(content, encoding="utf-8")


def main():
    catalog = build_catalog()
    write_ts(catalog)
    print(f"Generated {OUTPUT}")


if __name__ == "__main__":
    main()
