const { PrismaClient } = require("@prisma/client");
const { hashSync } = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  // 1) Admin
  const adminEmail = "admin@drmusculo.com";
  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      name: "Administrador",
      hashedPassword: hashSync("admin123", 10),
      role: "ADMIN",
    },
  });

  // 2) Categorias
  const [suplementos, acessorios, roupas] = await Promise.all([
    prisma.category.upsert({
      where: { slug: "suplementos" },
      update: {},
      create: { name: "Suplementos", slug: "suplementos" },
    }),
    prisma.category.upsert({
      where: { slug: "acessorios" },
      update: {},
      create: { name: "Acessórios", slug: "acessorios" },
    }),
    prisma.category.upsert({
      where: { slug: "roupas" },
      update: {},
      create: { name: "Roupas", slug: "roupas" },
    }),
  ]);

  // 3) Limpeza (ordem segura por FK)
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.image.deleteMany();
  await prisma.productVariant.deleteMany();
  await prisma.product.deleteMany();
  // cupons opcional:
  // await prisma.coupon.deleteMany()

  // Helper: criar produto + imagens + variantes
  async function createProduct(data) {
    const { imageUrls, variants, flags, ...productData } = data;

    const product = await prisma.product.create({
      data: {
        ...productData,
        featured: flags?.featured ?? false,
        bestSeller: flags?.bestSeller ?? false,
        newArrival: flags?.newArrival ?? false,
      },
    });

    // Imagens
    for (const url of imageUrls) {
      await prisma.image.create({
        data: { url, productId: product.id },
      });
    }

    // Variantes
    if (variants?.length) {
      for (const v of variants) {
        await prisma.productVariant.create({
          data: {
            productId: product.id,
            name: v.name,
            option: v.option,
            price: v.price,
            stock: v.stock,
          },
        });
      }
    }

    return product;
  }

  // 4) Produtos – Suplementos (8)
  await Promise.all([
    createProduct({
      categoryId: suplementos.id,
      name: "Whey Protein Concentrado 1kg",
      slug: "whey-protein-concentrado-1kg",
      description:
        "Suplemento de proteína concentrada para ganho de massa muscular.",
      price: 149.9,
      imageUrls: [
        "https://images.unsplash.com/photo-1605296867424-35b037312a43?auto=format&fit=crop&w=600&q=60",
      ],
      variants: [
        { name: "Sabor", option: "Baunilha", price: 149.9, stock: 20 },
        { name: "Sabor", option: "Chocolate", price: 149.9, stock: 15 },
      ],
      flags: { bestSeller: true },
    }),
    createProduct({
      categoryId: suplementos.id,
      name: "Creatina Monohidratada 300g",
      slug: "creatina-monohidratada-300g",
      description: "Aumenta força e desempenho durante os treinos.",
      price: 79.9,
      imageUrls: [
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=600&q=60",
      ],
      variants: [{ name: "Peso", option: "300g", price: 79.9, stock: 30 }],
      flags: { featured: true },
    }),
    createProduct({
      categoryId: suplementos.id,
      name: "Pré-Treino Explosivo 250g",
      slug: "pre-treino-explosivo-250g",
      description: "Energia extra para treinos intensos.",
      price: 99.9,
      imageUrls: [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=600&q=60",
      ],
      variants: [
        { name: "Sabor", option: "Frutas Vermelhas", price: 99.9, stock: 25 },
      ],
      flags: { newArrival: true },
    }),
    createProduct({
      categoryId: suplementos.id,
      name: "Omega-3 120 cápsulas",
      slug: "omega-3-120-capsulas",
      description: "Suporte à saúde cardiovascular e cerebral.",
      price: 59.9,
      imageUrls: [
        "https://images.unsplash.com/photo-1584367365689-9549133a3b1c?auto=format&fit=crop&w=600&q=60",
      ],
      variants: [
        { name: "Quantidade", option: "120 cápsulas", price: 59.9, stock: 40 },
      ],
    }),
    createProduct({
      categoryId: suplementos.id,
      name: "BCAA 4:1:1 200 cápsulas",
      slug: "bcaa-4-1-1-200-capsulas",
      description: "Recuperação muscular e redução de fadiga.",
      price: 69.9,
      imageUrls: [
        "https://images.unsplash.com/photo-1599058917212-ec5b35007a40?auto=format&fit=crop&w=600&q=60",
      ],
      variants: [
        { name: "Quantidade", option: "200 cápsulas", price: 69.9, stock: 30 },
      ],
    }),
    createProduct({
      categoryId: suplementos.id,
      name: "Glutamina 300g",
      slug: "glutamina-300g",
      description: "Aminoácido para recuperação e imunidade.",
      price: 89.9,
      imageUrls: [
        "https://images.unsplash.com/photo-1525373612132-b3e820b87cee?auto=format&fit=crop&w=600&q=60",
      ],
      variants: [{ name: "Peso", option: "300g", price: 89.9, stock: 20 }],
    }),
    createProduct({
      categoryId: suplementos.id,
      name: "Hipercalórico 3kg",
      slug: "hipercalorico-3kg",
      description: "Suplemento energético para ganho de peso.",
      price: 199.9,
      imageUrls: [
        "https://images.unsplash.com/photo-1589939705384-c6b5f5421efb?auto=format&fit=crop&w=600&q=60",
      ],
      variants: [
        { name: "Sabor", option: "Chocolate", price: 199.9, stock: 10 },
        { name: "Sabor", option: "Morango", price: 199.9, stock: 10 },
      ],
    }),
    createProduct({
      categoryId: suplementos.id,
      name: "Termogênico em cápsulas",
      slug: "termogenico-capsulas",
      description: "Auxilia na queima de gordura e definição.",
      price: 89.9,
      imageUrls: [
        "https://images.unsplash.com/photo-1576045055713-98309c7f79b2?auto=format&fit=crop&w=600&q=60",
      ],
      variants: [
        { name: "Quantidade", option: "60 cápsulas", price: 89.9, stock: 20 },
      ],
    }),
  ]);

  // 5) Produtos – Acessórios (6)
  await Promise.all([
    createProduct({
      categoryId: acessorios.id,
      name: "Cinturão de levantamento",
      slug: "cinturao-levantamento",
      description: "Suporte lombar para exercícios pesados.",
      price: 129.9,
      imageUrls: [
        "https://images.unsplash.com/photo-1523475496153-3d6cc4d79e97?auto=format&fit=crop&w=600&q=60",
      ],
      variants: [
        { name: "Tamanho", option: "M", price: 129.9, stock: 20 },
        { name: "Tamanho", option: "G", price: 129.9, stock: 15 },
      ],
      flags: { bestSeller: true },
    }),
    createProduct({
      categoryId: acessorios.id,
      name: "Coqueteleira 600ml",
      slug: "coqueteleira-600ml",
      description: "Ideal para misturar suplementos em pó.",
      price: 29.9,
      imageUrls: [
        "https://images.unsplash.com/photo-1584751837810-19b5c1804b98?auto=format&fit=crop&w=600&q=60",
      ],
      variants: [
        { name: "Cor", option: "Preta", price: 29.9, stock: 50 },
        { name: "Cor", option: "Azul", price: 29.9, stock: 40 },
      ],
      flags: { featured: true },
    }),
    createProduct({
      categoryId: acessorios.id,
      name: "Luva de treino",
      slug: "luva-treino",
      description: "Protege as mãos e melhora a pegada.",
      price: 59.9,
      imageUrls: [
        "https://images.unsplash.com/photo-1526401485004-712b6374d9de?auto=format&fit=crop&w=600&q=60",
      ],
      variants: [
        { name: "Tamanho", option: "P", price: 59.9, stock: 20 },
        { name: "Tamanho", option: "M", price: 59.9, stock: 20 },
        { name: "Tamanho", option: "G", price: 59.9, stock: 20 },
      ],
    }),
    createProduct({
      categoryId: acessorios.id,
      name: "Strap de levantamento",
      slug: "strap-levantamento",
      description: "Auxilia na pegada para levantamento de peso.",
      price: 39.9,
      imageUrls: [
        "https://images.unsplash.com/photo-1600180758890-e063743f08e3?auto=format&fit=crop&w=600&q=60",
      ],
      variants: [{ name: "Tamanho", option: "Único", price: 39.9, stock: 30 }],
    }),
    createProduct({
      categoryId: acessorios.id,
      name: "Toalha de Microfibra",
      slug: "toalha-microfibra",
      description: "Absorção rápida e compacta para treinos.",
      price: 24.9,
      imageUrls: [
        "https://images.unsplash.com/photo-1558611848-73f7eb4001e4?auto=format&fit=crop&w=600&q=60",
      ],
      variants: [
        { name: "Cor", option: "Cinza", price: 24.9, stock: 40 },
        { name: "Cor", option: "Verde", price: 24.9, stock: 40 },
      ],
    }),
    createProduct({
      categoryId: acessorios.id,
      name: "Corda de Pular Ajustável",
      slug: "corda-pular-ajustavel",
      description: "Cardio eficiente com comprimento ajustável.",
      price: 49.9,
      imageUrls: [
        "https://images.unsplash.com/photo-1558611848-f119a8de9d53?auto=format&fit=crop&w=600&q=60",
      ],
      variants: [
        { name: "Cor", option: "Preta", price: 49.9, stock: 30 },
        { name: "Cor", option: "Vermelha", price: 49.9, stock: 30 },
      ],
    }),
  ]);

  // 6) Produtos – Roupas (10)
  await Promise.all([
    createProduct({
      categoryId: roupas.id,
      name: "Legging Preta Básica",
      slug: "legging-preta-basica",
      description: "Conforto e flexibilidade para treinos.",
      price: 99.9,
      imageUrls: [
        "https://images.unsplash.com/photo-1602810318892-bde4ab4c523f?auto=format&fit=crop&w=600&q=60",
      ],
      variants: [
        { name: "Tamanho", option: "P", price: 99.9, stock: 15 },
        { name: "Tamanho", option: "M", price: 99.9, stock: 15 },
        { name: "Tamanho", option: "G", price: 99.9, stock: 15 },
        { name: "Tamanho", option: "GG", price: 99.9, stock: 15 },
      ],
      flags: { bestSeller: true },
    }),
    createProduct({
      categoryId: roupas.id,
      name: "Top Esportivo Rosa",
      slug: "top-esportivo-rosa",
      description: "Suporte e estilo para treino.",
      price: 59.9,
      imageUrls: [
        "https://images.unsplash.com/photo-1598970434795-0c54fe7c0641?auto=format&fit=crop&w=600&q=60",
      ],
      variants: [
        { name: "Tamanho", option: "P", price: 59.9, stock: 20 },
        { name: "Tamanho", option: "M", price: 59.9, stock: 20 },
        { name: "Tamanho", option: "G", price: 59.9, stock: 20 },
        { name: "Tamanho", option: "GG", price: 59.9, stock: 20 },
      ],
      flags: { featured: true },
    }),
    createProduct({
      categoryId: roupas.id,
      name: "Conjunto Fitness Azul",
      slug: "conjunto-fitness-azul",
      description: "Conjunto legging + top com compressão.",
      price: 149.9,
      imageUrls: [
        "https://images.unsplash.com/photo-1622508499906-61970bd10b98?auto=format&fit=crop&w=600&q=60",
      ],
      variants: [
        { name: "Tamanho", option: "P", price: 149.9, stock: 10 },
        { name: "Tamanho", option: "M", price: 149.9, stock: 10 },
        { name: "Tamanho", option: "G", price: 149.9, stock: 10 },
        { name: "Tamanho", option: "GG", price: 149.9, stock: 10 },
      ],
      flags: { newArrival: true },
    }),
    createProduct({
      categoryId: roupas.id,
      name: "Shorts Masculino Dry Fit",
      slug: "shorts-masculino-dry-fit",
      description: "Leve e respirável para atividades intensas.",
      price: 69.9,
      imageUrls: [
        "https://images.unsplash.com/photo-1595433562696-b9bd73f2842e?auto=format&fit=crop&w=600&q=60",
      ],
      variants: [
        { name: "Tamanho", option: "P", price: 69.9, stock: 15 },
        { name: "Tamanho", option: "M", price: 69.9, stock: 15 },
        { name: "Tamanho", option: "G", price: 69.9, stock: 15 },
        { name: "Tamanho", option: "GG", price: 69.9, stock: 15 },
      ],
    }),
    createProduct({
      categoryId: roupas.id,
      name: "Camiseta Regata Preta",
      slug: "camiseta-regata-preta",
      description: "Liberdade de movimentos e estilo.",
      price: 49.9,
      imageUrls: [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=60",
      ],
      variants: [
        { name: "Tamanho", option: "P", price: 49.9, stock: 20 },
        { name: "Tamanho", option: "M", price: 49.9, stock: 20 },
        { name: "Tamanho", option: "G", price: 49.9, stock: 20 },
        { name: "Tamanho", option: "GG", price: 49.9, stock: 20 },
      ],
    }),
    createProduct({
      categoryId: roupas.id,
      name: "Jaqueta Corta-Vento",
      slug: "jaqueta-corta-vento",
      description: "Proteção contra vento e frio leve.",
      price: 119.9,
      imageUrls: [
        "https://images.unsplash.com/photo-1610878180933-f0ebe4a267eb?auto=format&fit=crop&w=600&q=60",
      ],
      variants: [
        { name: "Tamanho", option: "P", price: 119.9, stock: 10 },
        { name: "Tamanho", option: "M", price: 119.9, stock: 10 },
        { name: "Tamanho", option: "G", price: 119.9, stock: 10 },
        { name: "Tamanho", option: "GG", price: 119.9, stock: 10 },
      ],
    }),
    createProduct({
      categoryId: roupas.id,
      name: "Regata Feminina Racerback",
      slug: "regata-feminina-racerback",
      description: "Design moderno e tecido respirável.",
      price: 54.9,
      imageUrls: [
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=60",
      ],
      variants: [
        { name: "Tamanho", option: "P", price: 54.9, stock: 20 },
        { name: "Tamanho", option: "M", price: 54.9, stock: 20 },
        { name: "Tamanho", option: "G", price: 54.9, stock: 20 },
        { name: "Tamanho", option: "GG", price: 54.9, stock: 20 },
      ],
    }),
    createProduct({
      categoryId: roupas.id,
      name: "Macacão Fitness Preto",
      slug: "macacao-fitness-preto",
      description: "Peça única com compressão para máximo conforto.",
      price: 179.9,
      imageUrls: [
        "https://images.unsplash.com/photo-1604014238331-2f934fde5b03?auto=format&fit=crop&w=600&q=60",
      ],
      variants: [
        { name: "Tamanho", option: "P", price: 179.9, stock: 5 },
        { name: "Tamanho", option: "M", price: 179.9, stock: 5 },
        { name: "Tamanho", option: "G", price: 179.9, stock: 5 },
        { name: "Tamanho", option: "GG", price: 179.9, stock: 5 },
      ],
    }),
    createProduct({
      categoryId: roupas.id,
      name: "Moletom Capuz Oversized",
      slug: "moletom-capuz-oversized",
      description: "Estilo urbano e aconchegante para pós-treino.",
      price: 149.9,
      imageUrls: [
        "https://images.unsplash.com/photo-1602810318892-bde4ab4c523f?auto=format&fit=crop&w=600&q=60",
      ],
      variants: [
        { name: "Tamanho", option: "P", price: 149.9, stock: 10 },
        { name: "Tamanho", option: "M", price: 149.9, stock: 10 },
        { name: "Tamanho", option: "G", price: 149.9, stock: 10 },
        { name: "Tamanho", option: "GG", price: 149.9, stock: 10 },
      ],
    }),
    createProduct({
      categoryId: roupas.id,
      name: "Shorts Ciclista Compressão",
      slug: "shorts-ciclista-compressao",
      description: "Conforto e suporte para corridas e spinning.",
      price: 79.9,
      imageUrls: [
        "https://images.unsplash.com/photo-1552346141-508f3a25264a?auto=format&fit=crop&w=600&q=60",
      ],
      variants: [
        { name: "Tamanho", option: "P", price: 79.9, stock: 15 },
        { name: "Tamanho", option: "M", price: 79.9, stock: 15 },
        { name: "Tamanho", option: "G", price: 79.9, stock: 15 },
        { name: "Tamanho", option: "GG", price: 79.9, stock: 15 },
      ],
    }),
  ]);

  console.log("✅ Seed executado com sucesso!");
}

main()
  .catch((e) => {
    console.error("❌ Seed falhou:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
