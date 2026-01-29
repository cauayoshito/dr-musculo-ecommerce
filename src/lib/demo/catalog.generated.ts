export type DemoVariant = {
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
  compareAt?: number | null
  images: ReadonlyArray<string>
  description: string
  tags: ReadonlyArray<string>
  variants: ReadonlyArray<DemoVariant>
}

export const demoCatalog = {
  "products": [
    {
      "id": "sup-1",
      "name": "Whey Protein Concentrado Max Titanium",
      "slug": "whey-protein-concentrado-max-titanium-300g",
      "categorySlug": "suplementos",
      "brand": "Max Titanium",
      "price": 185.06,
      "compareAt": 219.27,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "hipertrofia",
        "recuperação",
        "performance"
      ],
      "variants": [
        {
          "id": "whey-protein-concentrado-max-titanium-300g-chocolate-900g",
          "name": "Sabor/Peso",
          "option": "Chocolate 900g",
          "price": 180.53674019222674,
          "stock": 13
        },
        {
          "id": "whey-protein-concentrado-max-titanium-300g-chocolate-1kg",
          "name": "Sabor/Peso",
          "option": "Chocolate 1kg",
          "price": 183.33956962205406,
          "stock": 40
        },
        {
          "id": "whey-protein-concentrado-max-titanium-300g-caramelo-2kg",
          "name": "Sabor/Peso",
          "option": "Caramelo 2kg",
          "price": 188.47867594407919,
          "stock": 53
        },
        {
          "id": "whey-protein-concentrado-max-titanium-300g-caramelo-900g",
          "name": "Sabor/Peso",
          "option": "Caramelo 900g",
          "price": 189.80826656669285,
          "stock": 42
        },
        {
          "id": "whey-protein-concentrado-max-titanium-300g-cappuccino-1kg",
          "name": "Sabor/Peso",
          "option": "Cappuccino 1kg",
          "price": 186.7981356942578,
          "stock": 25
        },
        {
          "id": "whey-protein-concentrado-max-titanium-300g-cappuccino-900g",
          "name": "Sabor/Peso",
          "option": "Cappuccino 900g",
          "price": 192.2014568501674,
          "stock": 8
        }
      ]
    },
    {
      "id": "sup-2",
      "name": "Whey Protein Isolado Integralmedica",
      "slug": "whey-protein-isolado-integralmedica-1kg",
      "categorySlug": "suplementos",
      "brand": "Integralmedica",
      "price": 116.84,
      "compareAt": 162.33,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "hipertrofia",
        "performance"
      ],
      "variants": [
        {
          "id": "whey-protein-isolado-integralmedica-1kg-morango-1kg",
          "name": "Sabor/Peso",
          "option": "Morango 1kg",
          "price": 117.22469070726943,
          "stock": 30
        },
        {
          "id": "whey-protein-isolado-integralmedica-1kg-morango-900g",
          "name": "Sabor/Peso",
          "option": "Morango 900g",
          "price": 120.89589047050337,
          "stock": 59
        },
        {
          "id": "whey-protein-isolado-integralmedica-1kg-chocolate-900g",
          "name": "Sabor/Peso",
          "option": "Chocolate 900g",
          "price": 119.88342137182052,
          "stock": 70
        },
        {
          "id": "whey-protein-isolado-integralmedica-1kg-chocolate-1kg",
          "name": "Sabor/Peso",
          "option": "Chocolate 1kg",
          "price": 125.67443058042241,
          "stock": 13
        },
        {
          "id": "whey-protein-isolado-integralmedica-1kg-caramelo-2kg",
          "name": "Sabor/Peso",
          "option": "Caramelo 2kg",
          "price": 124.28106996379492,
          "stock": 47
        },
        {
          "id": "whey-protein-isolado-integralmedica-1kg-caramelo-1kg",
          "name": "Sabor/Peso",
          "option": "Caramelo 1kg",
          "price": 125.12177621905211,
          "stock": 31
        }
      ]
    },
    {
      "id": "sup-3",
      "name": "Creatina Monohidratada Dux",
      "slug": "creatina-monohidratada-dux-300g",
      "categorySlug": "suplementos",
      "brand": "Dux",
      "price": 66.79,
      "compareAt": 81.64,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "força",
        "performance"
      ],
      "variants": [
        {
          "id": "creatina-monohidratada-dux-300g-150g",
          "name": "Peso",
          "option": "150g",
          "price": 64.11176715054833,
          "stock": 37
        },
        {
          "id": "creatina-monohidratada-dux-300g-1kg",
          "name": "Peso",
          "option": "1kg",
          "price": 67.6895822197016,
          "stock": 31
        },
        {
          "id": "creatina-monohidratada-dux-300g-500g",
          "name": "Peso",
          "option": "500g",
          "price": 61.06715736018519,
          "stock": 30
        }
      ]
    },
    {
      "id": "sup-4",
      "name": "Pré-Treino Power Dux",
      "slug": "pré-treino-power-dux-900g",
      "categorySlug": "suplementos",
      "brand": "Dux",
      "price": 178.31,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "performance",
        "energia"
      ],
      "variants": [
        {
          "id": "pré-treino-power-dux-900g-chocolate",
          "name": "Sabor",
          "option": "Chocolate",
          "price": 179.65139877029708,
          "stock": 23
        },
        {
          "id": "pré-treino-power-dux-900g-cappuccino",
          "name": "Sabor",
          "option": "Cappuccino",
          "price": 175.94402493761928,
          "stock": 32
        },
        {
          "id": "pré-treino-power-dux-900g-baunilha",
          "name": "Sabor",
          "option": "Baunilha",
          "price": 177.00947826784278,
          "stock": 67
        }
      ]
    },
    {
      "id": "sup-5",
      "name": "Intra-Workout Hidratante Shark Pro",
      "slug": "intra-workout-hidratante-shark-pro-500g",
      "categorySlug": "suplementos",
      "brand": "Shark Pro",
      "price": 175.38,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "performance",
        "recuperação"
      ],
      "variants": [
        {
          "id": "intra-workout-hidratante-shark-pro-500g-frutas-vermelhas",
          "name": "Sabor",
          "option": "Frutas Vermelhas",
          "price": 179.59802594006808,
          "stock": 59
        },
        {
          "id": "intra-workout-hidratante-shark-pro-500g-chocolate",
          "name": "Sabor",
          "option": "Chocolate",
          "price": 174.5345304805908,
          "stock": 25
        },
        {
          "id": "intra-workout-hidratante-shark-pro-500g-baunilha",
          "name": "Sabor",
          "option": "Baunilha",
          "price": 172.04188605211547,
          "stock": 66
        }
      ]
    },
    {
      "id": "sup-6",
      "name": "Glutamina Recovery Body Action",
      "slug": "glutamina-recovery-body-action-500g",
      "categorySlug": "suplementos",
      "brand": "Body Action",
      "price": 170.42,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "recuperação",
        "saúde"
      ],
      "variants": [
        {
          "id": "glutamina-recovery-body-action-500g-1kg",
          "name": "Peso",
          "option": "1kg",
          "price": 164.37482447335708,
          "stock": 55
        },
        {
          "id": "glutamina-recovery-body-action-500g-150g",
          "name": "Peso",
          "option": "150g",
          "price": 170.2791538782841,
          "stock": 24
        },
        {
          "id": "glutamina-recovery-body-action-500g-300g",
          "name": "Peso",
          "option": "300g",
          "price": 172.8781933631316,
          "stock": 35
        }
      ]
    },
    {
      "id": "sup-7",
      "name": "Ômega 3 Premium Atlhetica",
      "slug": "ômega-3-premium-atlhetica-900g",
      "categorySlug": "suplementos",
      "brand": "Atlhetica",
      "price": 96.28,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "saúde"
      ],
      "variants": [
        {
          "id": "ômega-3-premium-atlhetica-900g-60-cápsulas",
          "name": "Quantidade",
          "option": "60 cápsulas",
          "price": 98.39431552411757,
          "stock": 13
        },
        {
          "id": "ômega-3-premium-atlhetica-900g-120-cápsulas",
          "name": "Quantidade",
          "option": "120 cápsulas",
          "price": 101.34938589040485,
          "stock": 63
        },
        {
          "id": "ômega-3-premium-atlhetica-900g-180-cápsulas",
          "name": "Quantidade",
          "option": "180 cápsulas",
          "price": 93.5957895642079,
          "stock": 48
        }
      ]
    },
    {
      "id": "sup-8",
      "name": "Colágeno Hidrolisado Integralmedica",
      "slug": "colágeno-hidrolisado-integralmedica-1kg",
      "categorySlug": "suplementos",
      "brand": "Integralmedica",
      "price": 160.39,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "saúde",
        "beleza"
      ],
      "variants": [
        {
          "id": "colágeno-hidrolisado-integralmedica-1kg-cappuccino",
          "name": "Sabor",
          "option": "Cappuccino",
          "price": 158.90414119981813,
          "stock": 43
        },
        {
          "id": "colágeno-hidrolisado-integralmedica-1kg-cookies",
          "name": "Sabor",
          "option": "Cookies",
          "price": 164.99779702234497,
          "stock": 8
        },
        {
          "id": "colágeno-hidrolisado-integralmedica-1kg-frutas-vermelhas",
          "name": "Sabor",
          "option": "Frutas Vermelhas",
          "price": 163.19283410256517,
          "stock": 15
        }
      ]
    },
    {
      "id": "sup-9",
      "name": "Cafeína Concentrada Shark Pro",
      "slug": "cafeína-concentrada-shark-pro-900g",
      "categorySlug": "suplementos",
      "brand": "Shark Pro",
      "price": 189.66,
      "compareAt": 232.03,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "performance",
        "emagrecimento"
      ],
      "variants": [
        {
          "id": "cafeína-concentrada-shark-pro-900g-60-cápsulas",
          "name": "Quantidade",
          "option": "60 cápsulas",
          "price": 187.55789305213602,
          "stock": 8
        },
        {
          "id": "cafeína-concentrada-shark-pro-900g-120-cápsulas",
          "name": "Quantidade",
          "option": "120 cápsulas",
          "price": 197.10579113025295,
          "stock": 64
        },
        {
          "id": "cafeína-concentrada-shark-pro-900g-180-cápsulas",
          "name": "Quantidade",
          "option": "180 cápsulas",
          "price": 194.29616802663108,
          "stock": 70
        }
      ]
    },
    {
      "id": "sup-10",
      "name": "Multivitamínico Completo Shark Pro",
      "slug": "multivitamínico-completo-shark-pro-500g",
      "categorySlug": "suplementos",
      "brand": "Shark Pro",
      "price": 145.31,
      "compareAt": 189.82,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "saúde"
      ],
      "variants": [
        {
          "id": "multivitamínico-completo-shark-pro-500g-60-cápsulas",
          "name": "Quantidade",
          "option": "60 cápsulas",
          "price": 151.4100321780696,
          "stock": 40
        },
        {
          "id": "multivitamínico-completo-shark-pro-500g-120-cápsulas",
          "name": "Quantidade",
          "option": "120 cápsulas",
          "price": 148.61764253725806,
          "stock": 17
        },
        {
          "id": "multivitamínico-completo-shark-pro-500g-180-cápsulas",
          "name": "Quantidade",
          "option": "180 cápsulas",
          "price": 145.7969662310938,
          "stock": 18
        }
      ]
    },
    {
      "id": "sup-11",
      "name": "Magnésio Quelato Shark Pro",
      "slug": "magnésio-quelato-shark-pro-2kg",
      "categorySlug": "suplementos",
      "brand": "Shark Pro",
      "price": 215.14,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "saúde",
        "recuperação"
      ],
      "variants": [
        {
          "id": "magnésio-quelato-shark-pro-2kg-60-cápsulas",
          "name": "Quantidade",
          "option": "60 cápsulas",
          "price": 217.00326849634737,
          "stock": 15
        },
        {
          "id": "magnésio-quelato-shark-pro-2kg-120-cápsulas",
          "name": "Quantidade",
          "option": "120 cápsulas",
          "price": 222.2891833951754,
          "stock": 64
        },
        {
          "id": "magnésio-quelato-shark-pro-2kg-180-cápsulas",
          "name": "Quantidade",
          "option": "180 cápsulas",
          "price": 222.96385654732575,
          "stock": 59
        }
      ]
    },
    {
      "id": "sup-12",
      "name": "NAC + CoQ10 Vitafor",
      "slug": "nac-coq10-vitafor-500g",
      "categorySlug": "suplementos",
      "brand": "Vitafor",
      "price": 68.85,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "saúde"
      ],
      "variants": [
        {
          "id": "nac-coq10-vitafor-500g-60-cápsulas",
          "name": "Quantidade",
          "option": "60 cápsulas",
          "price": 76.21339334357592,
          "stock": 13
        },
        {
          "id": "nac-coq10-vitafor-500g-120-cápsulas",
          "name": "Quantidade",
          "option": "120 cápsulas",
          "price": 73.63289113813553,
          "stock": 60
        },
        {
          "id": "nac-coq10-vitafor-500g-180-cápsulas",
          "name": "Quantidade",
          "option": "180 cápsulas",
          "price": 65.68055022162059,
          "stock": 56
        }
      ]
    },
    {
      "id": "sup-13",
      "name": "Hydrolite Isotônico Shark Pro",
      "slug": "hydrolite-isotônico-shark-pro-500g",
      "categorySlug": "suplementos",
      "brand": "Shark Pro",
      "price": 80.83,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "performance",
        "hidratação"
      ],
      "variants": [
        {
          "id": "hydrolite-isotônico-shark-pro-500g-cappuccino",
          "name": "Sabor",
          "option": "Cappuccino",
          "price": 82.10673787418254,
          "stock": 46
        },
        {
          "id": "hydrolite-isotônico-shark-pro-500g-baunilha",
          "name": "Sabor",
          "option": "Baunilha",
          "price": 81.06137940200887,
          "stock": 21
        },
        {
          "id": "hydrolite-isotônico-shark-pro-500g-morango",
          "name": "Sabor",
          "option": "Morango",
          "price": 86.11913493002177,
          "stock": 56
        }
      ]
    },
    {
      "id": "sup-14",
      "name": "Pasta de Amendoim Fit Dux",
      "slug": "pasta-de-amendoim-fit-dux-900g",
      "categorySlug": "suplementos",
      "brand": "Dux",
      "price": 126.83,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "saúde",
        "energia"
      ],
      "variants": [
        {
          "id": "pasta-de-amendoim-fit-dux-900g-morango",
          "name": "Sabor",
          "option": "Morango",
          "price": 127.3448614139113,
          "stock": 23
        },
        {
          "id": "pasta-de-amendoim-fit-dux-900g-cookies",
          "name": "Sabor",
          "option": "Cookies",
          "price": 125.07697337031557,
          "stock": 29
        },
        {
          "id": "pasta-de-amendoim-fit-dux-900g-cappuccino",
          "name": "Sabor",
          "option": "Cappuccino",
          "price": 123.04034260007059,
          "stock": 43
        }
      ]
    },
    {
      "id": "sup-15",
      "name": "Barra Proteica Dux",
      "slug": "barra-proteica-dux-2kg",
      "categorySlug": "suplementos",
      "brand": "Dux",
      "price": 96.44,
      "compareAt": 126.12,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "performance",
        "energia"
      ],
      "variants": [
        {
          "id": "barra-proteica-dux-2kg-baunilha",
          "name": "Sabor",
          "option": "Baunilha",
          "price": 101.03635400253746,
          "stock": 12
        },
        {
          "id": "barra-proteica-dux-2kg-chocolate",
          "name": "Sabor",
          "option": "Chocolate",
          "price": 97.5815611980859,
          "stock": 25
        },
        {
          "id": "barra-proteica-dux-2kg-caramelo",
          "name": "Sabor",
          "option": "Caramelo",
          "price": 99.1297777829628,
          "stock": 21
        }
      ]
    },
    {
      "id": "sup-16",
      "name": "Wafer Proteico Shark Pro",
      "slug": "wafer-proteico-shark-pro-500g",
      "categorySlug": "suplementos",
      "brand": "Shark Pro",
      "price": 181.97,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "performance"
      ],
      "variants": [
        {
          "id": "wafer-proteico-shark-pro-500g-cappuccino",
          "name": "Sabor",
          "option": "Cappuccino",
          "price": 185.81619424290753,
          "stock": 59
        },
        {
          "id": "wafer-proteico-shark-pro-500g-cookies",
          "name": "Sabor",
          "option": "Cookies",
          "price": 182.04059961485936,
          "stock": 14
        },
        {
          "id": "wafer-proteico-shark-pro-500g-baunilha",
          "name": "Sabor",
          "option": "Baunilha",
          "price": 178.93930814228824,
          "stock": 35
        }
      ]
    },
    {
      "id": "sup-17",
      "name": "BCAA 4:1:1 Body Action",
      "slug": "bcaa-411-body-action-1kg",
      "categorySlug": "suplementos",
      "brand": "Body Action",
      "price": 128.89,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "recuperação"
      ],
      "variants": [
        {
          "id": "bcaa-411-body-action-1kg-60-cápsulas",
          "name": "Quantidade",
          "option": "60 cápsulas",
          "price": 125.54005424678603,
          "stock": 49
        },
        {
          "id": "bcaa-411-body-action-1kg-120-cápsulas",
          "name": "Quantidade",
          "option": "120 cápsulas",
          "price": 136.6999825363916,
          "stock": 14
        },
        {
          "id": "bcaa-411-body-action-1kg-180-cápsulas",
          "name": "Quantidade",
          "option": "180 cápsulas",
          "price": 125.61735208892415,
          "stock": 54
        }
      ]
    },
    {
      "id": "sup-18",
      "name": "Termogênico Clean Body Action",
      "slug": "termogênico-clean-body-action-300g",
      "categorySlug": "suplementos",
      "brand": "Body Action",
      "price": 101.27,
      "compareAt": 127.82,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "emagrecimento",
        "performance"
      ],
      "variants": [
        {
          "id": "termogênico-clean-body-action-300g-60-cápsulas",
          "name": "Quantidade",
          "option": "60 cápsulas",
          "price": 102.33257967801285,
          "stock": 25
        },
        {
          "id": "termogênico-clean-body-action-300g-120-cápsulas",
          "name": "Quantidade",
          "option": "120 cápsulas",
          "price": 102.8215368208116,
          "stock": 63
        },
        {
          "id": "termogênico-clean-body-action-300g-180-cápsulas",
          "name": "Quantidade",
          "option": "180 cápsulas",
          "price": 108.34918719131215,
          "stock": 36
        }
      ]
    },
    {
      "id": "sup-19",
      "name": "Caseína Night Shark Pro",
      "slug": "caseína-night-shark-pro-300g",
      "categorySlug": "suplementos",
      "brand": "Shark Pro",
      "price": 67.6,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "recuperação"
      ],
      "variants": [
        {
          "id": "caseína-night-shark-pro-300g-frutas-vermelhas-900g",
          "name": "Sabor/Peso",
          "option": "Frutas Vermelhas 900g",
          "price": 68.69621086928707,
          "stock": 38
        },
        {
          "id": "caseína-night-shark-pro-300g-frutas-vermelhas-2kg",
          "name": "Sabor/Peso",
          "option": "Frutas Vermelhas 2kg",
          "price": 65.80620948798772,
          "stock": 33
        },
        {
          "id": "caseína-night-shark-pro-300g-chocolate-900g",
          "name": "Sabor/Peso",
          "option": "Chocolate 900g",
          "price": 68.28459678465373,
          "stock": 32
        },
        {
          "id": "caseína-night-shark-pro-300g-chocolate-2kg",
          "name": "Sabor/Peso",
          "option": "Chocolate 2kg",
          "price": 66.57804587258228,
          "stock": 58
        },
        {
          "id": "caseína-night-shark-pro-300g-caramelo-1kg",
          "name": "Sabor/Peso",
          "option": "Caramelo 1kg",
          "price": 68.94511228985243,
          "stock": 69
        },
        {
          "id": "caseína-night-shark-pro-300g-caramelo-2kg",
          "name": "Sabor/Peso",
          "option": "Caramelo 2kg",
          "price": 73.55757976123198,
          "stock": 58
        }
      ]
    },
    {
      "id": "sup-20",
      "name": "Refeição Líquida Shark Pro",
      "slug": "refeição-líquida-shark-pro-1kg",
      "categorySlug": "suplementos",
      "brand": "Shark Pro",
      "price": 85.32,
      "compareAt": 118.78,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "saúde",
        "praticidade"
      ],
      "variants": [
        {
          "id": "refeição-líquida-shark-pro-1kg-cappuccino",
          "name": "Sabor",
          "option": "Cappuccino",
          "price": 81.92957571476515,
          "stock": 28
        },
        {
          "id": "refeição-líquida-shark-pro-1kg-caramelo",
          "name": "Sabor",
          "option": "Caramelo",
          "price": 81.89165272907482,
          "stock": 45
        },
        {
          "id": "refeição-líquida-shark-pro-1kg-frutas-vermelhas",
          "name": "Sabor",
          "option": "Frutas Vermelhas",
          "price": 86.08788517108934,
          "stock": 66
        }
      ]
    },
    {
      "id": "sup-21",
      "name": "Whey Protein Concentrado Shark Pro",
      "slug": "whey-protein-concentrado-shark-pro-500g",
      "categorySlug": "suplementos",
      "brand": "Shark Pro",
      "price": 68.67,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "hipertrofia",
        "recuperação",
        "performance"
      ],
      "variants": [
        {
          "id": "whey-protein-concentrado-shark-pro-500g-frutas-vermelhas-2kg",
          "name": "Sabor/Peso",
          "option": "Frutas Vermelhas 2kg",
          "price": 73.79818830406136,
          "stock": 23
        },
        {
          "id": "whey-protein-concentrado-shark-pro-500g-frutas-vermelhas-900g",
          "name": "Sabor/Peso",
          "option": "Frutas Vermelhas 900g",
          "price": 69.72663326977417,
          "stock": 68
        },
        {
          "id": "whey-protein-concentrado-shark-pro-500g-baunilha-2kg",
          "name": "Sabor/Peso",
          "option": "Baunilha 2kg",
          "price": 72.35378586260816,
          "stock": 10
        },
        {
          "id": "whey-protein-concentrado-shark-pro-500g-baunilha-900g",
          "name": "Sabor/Peso",
          "option": "Baunilha 900g",
          "price": 72.96072265498155,
          "stock": 34
        },
        {
          "id": "whey-protein-concentrado-shark-pro-500g-chocolate-2kg",
          "name": "Sabor/Peso",
          "option": "Chocolate 2kg",
          "price": 77.69059386604641,
          "stock": 21
        },
        {
          "id": "whey-protein-concentrado-shark-pro-500g-chocolate-1kg",
          "name": "Sabor/Peso",
          "option": "Chocolate 1kg",
          "price": 73.71588962154743,
          "stock": 28
        }
      ]
    },
    {
      "id": "sup-22",
      "name": "Whey Protein Isolado Dux",
      "slug": "whey-protein-isolado-dux-900g",
      "categorySlug": "suplementos",
      "brand": "Dux",
      "price": 126.28,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "hipertrofia",
        "performance"
      ],
      "variants": [
        {
          "id": "whey-protein-isolado-dux-900g-morango-900g",
          "name": "Sabor/Peso",
          "option": "Morango 900g",
          "price": 128.1542828392788,
          "stock": 44
        },
        {
          "id": "whey-protein-isolado-dux-900g-morango-2kg",
          "name": "Sabor/Peso",
          "option": "Morango 2kg",
          "price": 136.2214467178264,
          "stock": 12
        },
        {
          "id": "whey-protein-isolado-dux-900g-cookies-2kg",
          "name": "Sabor/Peso",
          "option": "Cookies 2kg",
          "price": 128.86827041073147,
          "stock": 16
        },
        {
          "id": "whey-protein-isolado-dux-900g-cookies-900g",
          "name": "Sabor/Peso",
          "option": "Cookies 900g",
          "price": 135.27889066990565,
          "stock": 64
        },
        {
          "id": "whey-protein-isolado-dux-900g-frutas-vermelhas-900g",
          "name": "Sabor/Peso",
          "option": "Frutas Vermelhas 900g",
          "price": 126.82290633108326,
          "stock": 18
        },
        {
          "id": "whey-protein-isolado-dux-900g-frutas-vermelhas-2kg",
          "name": "Sabor/Peso",
          "option": "Frutas Vermelhas 2kg",
          "price": 127.85276859511565,
          "stock": 42
        }
      ]
    },
    {
      "id": "sup-23",
      "name": "Creatina Monohidratada Vitafor",
      "slug": "creatina-monohidratada-vitafor-2kg",
      "categorySlug": "suplementos",
      "brand": "Vitafor",
      "price": 226.26,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "força",
        "performance"
      ],
      "variants": [
        {
          "id": "creatina-monohidratada-vitafor-2kg-150g",
          "name": "Peso",
          "option": "150g",
          "price": 231.30458455210507,
          "stock": 14
        },
        {
          "id": "creatina-monohidratada-vitafor-2kg-500g",
          "name": "Peso",
          "option": "500g",
          "price": 231.40502005497945,
          "stock": 16
        },
        {
          "id": "creatina-monohidratada-vitafor-2kg-300g",
          "name": "Peso",
          "option": "300g",
          "price": 221.96252290081978,
          "stock": 64
        }
      ]
    },
    {
      "id": "sup-24",
      "name": "Pré-Treino Power Max Titanium",
      "slug": "pré-treino-power-max-titanium-2kg",
      "categorySlug": "suplementos",
      "brand": "Max Titanium",
      "price": 85.43,
      "compareAt": 102.74,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "performance",
        "energia"
      ],
      "variants": [
        {
          "id": "pré-treino-power-max-titanium-2kg-morango",
          "name": "Sabor",
          "option": "Morango",
          "price": 86.48409058097988,
          "stock": 24
        },
        {
          "id": "pré-treino-power-max-titanium-2kg-baunilha",
          "name": "Sabor",
          "option": "Baunilha",
          "price": 90.48336491079324,
          "stock": 62
        },
        {
          "id": "pré-treino-power-max-titanium-2kg-frutas-vermelhas",
          "name": "Sabor",
          "option": "Frutas Vermelhas",
          "price": 81.93798893662532,
          "stock": 48
        }
      ]
    },
    {
      "id": "sup-25",
      "name": "Intra-Workout Hidratante Atlhetica",
      "slug": "intra-workout-hidratante-atlhetica-900g",
      "categorySlug": "suplementos",
      "brand": "Atlhetica",
      "price": 66.49,
      "compareAt": 78.64,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "performance",
        "recuperação"
      ],
      "variants": [
        {
          "id": "intra-workout-hidratante-atlhetica-900g-morango",
          "name": "Sabor",
          "option": "Morango",
          "price": 68.00680421126391,
          "stock": 35
        },
        {
          "id": "intra-workout-hidratante-atlhetica-900g-baunilha",
          "name": "Sabor",
          "option": "Baunilha",
          "price": 68.09906864774746,
          "stock": 15
        },
        {
          "id": "intra-workout-hidratante-atlhetica-900g-cookies",
          "name": "Sabor",
          "option": "Cookies",
          "price": 63.242438600737664,
          "stock": 64
        }
      ]
    },
    {
      "id": "sup-26",
      "name": "Glutamina Recovery Integralmedica",
      "slug": "glutamina-recovery-integralmedica-2kg",
      "categorySlug": "suplementos",
      "brand": "Integralmedica",
      "price": 65.12,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "recuperação",
        "saúde"
      ],
      "variants": [
        {
          "id": "glutamina-recovery-integralmedica-2kg-300g",
          "name": "Peso",
          "option": "300g",
          "price": 57.70560401436401,
          "stock": 31
        },
        {
          "id": "glutamina-recovery-integralmedica-2kg-1kg",
          "name": "Peso",
          "option": "1kg",
          "price": 69.70574084239627,
          "stock": 58
        },
        {
          "id": "glutamina-recovery-integralmedica-2kg-150g",
          "name": "Peso",
          "option": "150g",
          "price": 70.73074771024164,
          "stock": 10
        }
      ]
    },
    {
      "id": "sup-27",
      "name": "Ômega 3 Premium Body Action",
      "slug": "ômega-3-premium-body-action-500g",
      "categorySlug": "suplementos",
      "brand": "Body Action",
      "price": 174.95,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "saúde"
      ],
      "variants": [
        {
          "id": "ômega-3-premium-body-action-500g-60-cápsulas",
          "name": "Quantidade",
          "option": "60 cápsulas",
          "price": 175.1941436153754,
          "stock": 43
        },
        {
          "id": "ômega-3-premium-body-action-500g-120-cápsulas",
          "name": "Quantidade",
          "option": "120 cápsulas",
          "price": 181.5596164174121,
          "stock": 34
        },
        {
          "id": "ômega-3-premium-body-action-500g-180-cápsulas",
          "name": "Quantidade",
          "option": "180 cápsulas",
          "price": 182.63604427164745,
          "stock": 55
        }
      ]
    },
    {
      "id": "sup-28",
      "name": "Colágeno Hidrolisado Integralmedica",
      "slug": "colágeno-hidrolisado-integralmedica-500g",
      "categorySlug": "suplementos",
      "brand": "Integralmedica",
      "price": 205.98,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "saúde",
        "beleza"
      ],
      "variants": [
        {
          "id": "colágeno-hidrolisado-integralmedica-500g-frutas-vermelhas",
          "name": "Sabor",
          "option": "Frutas Vermelhas",
          "price": 202.22786361898187,
          "stock": 55
        },
        {
          "id": "colágeno-hidrolisado-integralmedica-500g-baunilha",
          "name": "Sabor",
          "option": "Baunilha",
          "price": 211.22487295241544,
          "stock": 58
        },
        {
          "id": "colágeno-hidrolisado-integralmedica-500g-cookies",
          "name": "Sabor",
          "option": "Cookies",
          "price": 211.28815886048324,
          "stock": 59
        }
      ]
    },
    {
      "id": "sup-29",
      "name": "Cafeína Concentrada Dux",
      "slug": "cafeína-concentrada-dux-900g",
      "categorySlug": "suplementos",
      "brand": "Dux",
      "price": 86.06,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "performance",
        "emagrecimento"
      ],
      "variants": [
        {
          "id": "cafeína-concentrada-dux-900g-60-cápsulas",
          "name": "Quantidade",
          "option": "60 cápsulas",
          "price": 86.65050067116321,
          "stock": 10
        },
        {
          "id": "cafeína-concentrada-dux-900g-120-cápsulas",
          "name": "Quantidade",
          "option": "120 cápsulas",
          "price": 92.36311901605339,
          "stock": 22
        },
        {
          "id": "cafeína-concentrada-dux-900g-180-cápsulas",
          "name": "Quantidade",
          "option": "180 cápsulas",
          "price": 84.45487396030903,
          "stock": 66
        }
      ]
    },
    {
      "id": "sup-30",
      "name": "Multivitamínico Completo Under Labz",
      "slug": "multivitamínico-completo-under-labz-900g",
      "categorySlug": "suplementos",
      "brand": "Under Labz",
      "price": 110.88,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "saúde"
      ],
      "variants": [
        {
          "id": "multivitamínico-completo-under-labz-900g-60-cápsulas",
          "name": "Quantidade",
          "option": "60 cápsulas",
          "price": 109.61114584889324,
          "stock": 9
        },
        {
          "id": "multivitamínico-completo-under-labz-900g-120-cápsulas",
          "name": "Quantidade",
          "option": "120 cápsulas",
          "price": 114.80039819298355,
          "stock": 33
        },
        {
          "id": "multivitamínico-completo-under-labz-900g-180-cápsulas",
          "name": "Quantidade",
          "option": "180 cápsulas",
          "price": 110.81914341437248,
          "stock": 63
        }
      ]
    },
    {
      "id": "sup-31",
      "name": "Magnésio Quelato Max Titanium",
      "slug": "magnésio-quelato-max-titanium-900g",
      "categorySlug": "suplementos",
      "brand": "Max Titanium",
      "price": 118.69,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "saúde",
        "recuperação"
      ],
      "variants": [
        {
          "id": "magnésio-quelato-max-titanium-900g-60-cápsulas",
          "name": "Quantidade",
          "option": "60 cápsulas",
          "price": 122.84421742032316,
          "stock": 61
        },
        {
          "id": "magnésio-quelato-max-titanium-900g-120-cápsulas",
          "name": "Quantidade",
          "option": "120 cápsulas",
          "price": 121.12458878974466,
          "stock": 68
        },
        {
          "id": "magnésio-quelato-max-titanium-900g-180-cápsulas",
          "name": "Quantidade",
          "option": "180 cápsulas",
          "price": 115.02120642143562,
          "stock": 64
        }
      ]
    },
    {
      "id": "sup-32",
      "name": "NAC + CoQ10 Vitafor",
      "slug": "nac-coq10-vitafor-500g-2",
      "categorySlug": "suplementos",
      "brand": "Vitafor",
      "price": 157.7,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "saúde"
      ],
      "variants": [
        {
          "id": "nac-coq10-vitafor-500g-60-cápsulas",
          "name": "Quantidade",
          "option": "60 cápsulas",
          "price": 154.15908636823914,
          "stock": 46
        },
        {
          "id": "nac-coq10-vitafor-500g-120-cápsulas",
          "name": "Quantidade",
          "option": "120 cápsulas",
          "price": 158.91476510277573,
          "stock": 54
        },
        {
          "id": "nac-coq10-vitafor-500g-180-cápsulas",
          "name": "Quantidade",
          "option": "180 cápsulas",
          "price": 163.1371381384442,
          "stock": 35
        }
      ]
    },
    {
      "id": "sup-33",
      "name": "Hydrolite Isotônico Shark Pro",
      "slug": "hydrolite-isotônico-shark-pro-300g",
      "categorySlug": "suplementos",
      "brand": "Shark Pro",
      "price": 124.48,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "performance",
        "hidratação"
      ],
      "variants": [
        {
          "id": "hydrolite-isotônico-shark-pro-300g-morango",
          "name": "Sabor",
          "option": "Morango",
          "price": 120.4969127821863,
          "stock": 67
        },
        {
          "id": "hydrolite-isotônico-shark-pro-300g-chocolate",
          "name": "Sabor",
          "option": "Chocolate",
          "price": 128.54510869700104,
          "stock": 51
        },
        {
          "id": "hydrolite-isotônico-shark-pro-300g-cookies",
          "name": "Sabor",
          "option": "Cookies",
          "price": 127.67429999144846,
          "stock": 55
        }
      ]
    },
    {
      "id": "sup-34",
      "name": "Pasta de Amendoim Fit Dux",
      "slug": "pasta-de-amendoim-fit-dux-900g-2",
      "categorySlug": "suplementos",
      "brand": "Dux",
      "price": 132.32,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "saúde",
        "energia"
      ],
      "variants": [
        {
          "id": "pasta-de-amendoim-fit-dux-900g-morango",
          "name": "Sabor",
          "option": "Morango",
          "price": 134.95387476265543,
          "stock": 15
        },
        {
          "id": "pasta-de-amendoim-fit-dux-900g-cappuccino",
          "name": "Sabor",
          "option": "Cappuccino",
          "price": 135.5175426301395,
          "stock": 27
        },
        {
          "id": "pasta-de-amendoim-fit-dux-900g-frutas-vermelhas",
          "name": "Sabor",
          "option": "Frutas Vermelhas",
          "price": 133.39122504035268,
          "stock": 50
        }
      ]
    },
    {
      "id": "sup-35",
      "name": "Barra Proteica Atlhetica",
      "slug": "barra-proteica-atlhetica-900g",
      "categorySlug": "suplementos",
      "brand": "Atlhetica",
      "price": 127.41,
      "compareAt": 150.58,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "performance",
        "energia"
      ],
      "variants": [
        {
          "id": "barra-proteica-atlhetica-900g-cookies",
          "name": "Sabor",
          "option": "Cookies",
          "price": 130.18317945272733,
          "stock": 65
        },
        {
          "id": "barra-proteica-atlhetica-900g-caramelo",
          "name": "Sabor",
          "option": "Caramelo",
          "price": 125.15027343209944,
          "stock": 44
        },
        {
          "id": "barra-proteica-atlhetica-900g-frutas-vermelhas",
          "name": "Sabor",
          "option": "Frutas Vermelhas",
          "price": 126.41949874565564,
          "stock": 43
        }
      ]
    },
    {
      "id": "sup-36",
      "name": "Wafer Proteico Growth",
      "slug": "wafer-proteico-growth-900g",
      "categorySlug": "suplementos",
      "brand": "Growth",
      "price": 107.78,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "performance"
      ],
      "variants": [
        {
          "id": "wafer-proteico-growth-900g-cappuccino",
          "name": "Sabor",
          "option": "Cappuccino",
          "price": 108.42988190247014,
          "stock": 36
        },
        {
          "id": "wafer-proteico-growth-900g-frutas-vermelhas",
          "name": "Sabor",
          "option": "Frutas Vermelhas",
          "price": 110.536272331901,
          "stock": 40
        },
        {
          "id": "wafer-proteico-growth-900g-morango",
          "name": "Sabor",
          "option": "Morango",
          "price": 108.51186185909326,
          "stock": 65
        }
      ]
    },
    {
      "id": "sup-37",
      "name": "BCAA 4:1:1 Integralmedica",
      "slug": "bcaa-411-integralmedica-300g",
      "categorySlug": "suplementos",
      "brand": "Integralmedica",
      "price": 107.24,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "recuperação"
      ],
      "variants": [
        {
          "id": "bcaa-411-integralmedica-300g-60-cápsulas",
          "name": "Quantidade",
          "option": "60 cápsulas",
          "price": 110.6711296643485,
          "stock": 13
        },
        {
          "id": "bcaa-411-integralmedica-300g-120-cápsulas",
          "name": "Quantidade",
          "option": "120 cápsulas",
          "price": 113.06108157443997,
          "stock": 56
        },
        {
          "id": "bcaa-411-integralmedica-300g-180-cápsulas",
          "name": "Quantidade",
          "option": "180 cápsulas",
          "price": 106.0584231823202,
          "stock": 27
        }
      ]
    },
    {
      "id": "sup-38",
      "name": "Termogênico Clean Dux",
      "slug": "termogênico-clean-dux-500g",
      "categorySlug": "suplementos",
      "brand": "Dux",
      "price": 84.05,
      "compareAt": 117.33,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "emagrecimento",
        "performance"
      ],
      "variants": [
        {
          "id": "termogênico-clean-dux-500g-60-cápsulas",
          "name": "Quantidade",
          "option": "60 cápsulas",
          "price": 87.38528767672815,
          "stock": 57
        },
        {
          "id": "termogênico-clean-dux-500g-120-cápsulas",
          "name": "Quantidade",
          "option": "120 cápsulas",
          "price": 80.92393875021483,
          "stock": 34
        },
        {
          "id": "termogênico-clean-dux-500g-180-cápsulas",
          "name": "Quantidade",
          "option": "180 cápsulas",
          "price": 90.68364290861177,
          "stock": 44
        }
      ]
    },
    {
      "id": "sup-39",
      "name": "Caseína Night Dux",
      "slug": "caseína-night-dux-1kg",
      "categorySlug": "suplementos",
      "brand": "Dux",
      "price": 143.04,
      "compareAt": 187.96,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "recuperação"
      ],
      "variants": [
        {
          "id": "caseína-night-dux-1kg-chocolate-900g",
          "name": "Sabor/Peso",
          "option": "Chocolate 900g",
          "price": 150.10164784259715,
          "stock": 52
        },
        {
          "id": "caseína-night-dux-1kg-chocolate-2kg",
          "name": "Sabor/Peso",
          "option": "Chocolate 2kg",
          "price": 145.8093662566561,
          "stock": 11
        },
        {
          "id": "caseína-night-dux-1kg-frutas-vermelhas-2kg",
          "name": "Sabor/Peso",
          "option": "Frutas Vermelhas 2kg",
          "price": 151.8020502168316,
          "stock": 15
        },
        {
          "id": "caseína-night-dux-1kg-frutas-vermelhas-900g",
          "name": "Sabor/Peso",
          "option": "Frutas Vermelhas 900g",
          "price": 144.8869273820526,
          "stock": 59
        },
        {
          "id": "caseína-night-dux-1kg-cookies-1kg",
          "name": "Sabor/Peso",
          "option": "Cookies 1kg",
          "price": 152.29059412664733,
          "stock": 65
        },
        {
          "id": "caseína-night-dux-1kg-cookies-2kg",
          "name": "Sabor/Peso",
          "option": "Cookies 2kg",
          "price": 144.6786013790204,
          "stock": 60
        }
      ]
    },
    {
      "id": "sup-40",
      "name": "Refeição Líquida Shark Pro",
      "slug": "refeição-líquida-shark-pro-1kg-2",
      "categorySlug": "suplementos",
      "brand": "Shark Pro",
      "price": 200.2,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "saúde",
        "praticidade"
      ],
      "variants": [
        {
          "id": "refeição-líquida-shark-pro-1kg-baunilha",
          "name": "Sabor",
          "option": "Baunilha",
          "price": 200.70069757246907,
          "stock": 56
        },
        {
          "id": "refeição-líquida-shark-pro-1kg-caramelo",
          "name": "Sabor",
          "option": "Caramelo",
          "price": 198.67239737509658,
          "stock": 48
        },
        {
          "id": "refeição-líquida-shark-pro-1kg-cookies",
          "name": "Sabor",
          "option": "Cookies",
          "price": 198.9731135313074,
          "stock": 57
        }
      ]
    },
    {
      "id": "sup-41",
      "name": "Whey Protein Concentrado Shark Pro",
      "slug": "whey-protein-concentrado-shark-pro-1kg",
      "categorySlug": "suplementos",
      "brand": "Shark Pro",
      "price": 165.55,
      "compareAt": 193.59,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "hipertrofia",
        "recuperação",
        "performance"
      ],
      "variants": [
        {
          "id": "whey-protein-concentrado-shark-pro-1kg-morango-1kg",
          "name": "Sabor/Peso",
          "option": "Morango 1kg",
          "price": 173.94540249185476,
          "stock": 13
        },
        {
          "id": "whey-protein-concentrado-shark-pro-1kg-morango-2kg",
          "name": "Sabor/Peso",
          "option": "Morango 2kg",
          "price": 162.62561092274234,
          "stock": 22
        },
        {
          "id": "whey-protein-concentrado-shark-pro-1kg-baunilha-1kg",
          "name": "Sabor/Peso",
          "option": "Baunilha 1kg",
          "price": 171.1462871254183,
          "stock": 12
        },
        {
          "id": "whey-protein-concentrado-shark-pro-1kg-baunilha-900g",
          "name": "Sabor/Peso",
          "option": "Baunilha 900g",
          "price": 166.7730184384733,
          "stock": 29
        },
        {
          "id": "whey-protein-concentrado-shark-pro-1kg-frutas-vermelhas-2kg",
          "name": "Sabor/Peso",
          "option": "Frutas Vermelhas 2kg",
          "price": 166.78661351154736,
          "stock": 21
        },
        {
          "id": "whey-protein-concentrado-shark-pro-1kg-frutas-vermelhas-1kg",
          "name": "Sabor/Peso",
          "option": "Frutas Vermelhas 1kg",
          "price": 173.04336754010734,
          "stock": 32
        }
      ]
    },
    {
      "id": "sup-42",
      "name": "Whey Protein Isolado Growth",
      "slug": "whey-protein-isolado-growth-2kg",
      "categorySlug": "suplementos",
      "brand": "Growth",
      "price": 123.66,
      "compareAt": 153.08,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "hipertrofia",
        "performance"
      ],
      "variants": [
        {
          "id": "whey-protein-isolado-growth-2kg-frutas-vermelhas-2kg",
          "name": "Sabor/Peso",
          "option": "Frutas Vermelhas 2kg",
          "price": 125.98344216325376,
          "stock": 25
        },
        {
          "id": "whey-protein-isolado-growth-2kg-frutas-vermelhas-900g",
          "name": "Sabor/Peso",
          "option": "Frutas Vermelhas 900g",
          "price": 125.19753964069955,
          "stock": 9
        },
        {
          "id": "whey-protein-isolado-growth-2kg-cookies-1kg",
          "name": "Sabor/Peso",
          "option": "Cookies 1kg",
          "price": 128.69310430934377,
          "stock": 59
        },
        {
          "id": "whey-protein-isolado-growth-2kg-cookies-2kg",
          "name": "Sabor/Peso",
          "option": "Cookies 2kg",
          "price": 124.72475003706455,
          "stock": 18
        },
        {
          "id": "whey-protein-isolado-growth-2kg-caramelo-1kg",
          "name": "Sabor/Peso",
          "option": "Caramelo 1kg",
          "price": 133.37082966278385,
          "stock": 42
        },
        {
          "id": "whey-protein-isolado-growth-2kg-caramelo-900g",
          "name": "Sabor/Peso",
          "option": "Caramelo 900g",
          "price": 119.06449677857707,
          "stock": 33
        }
      ]
    },
    {
      "id": "sup-43",
      "name": "Creatina Monohidratada Growth",
      "slug": "creatina-monohidratada-growth-300g",
      "categorySlug": "suplementos",
      "brand": "Growth",
      "price": 168.27,
      "compareAt": 212.93,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "força",
        "performance"
      ],
      "variants": [
        {
          "id": "creatina-monohidratada-growth-300g-150g",
          "name": "Peso",
          "option": "150g",
          "price": 164.8529373371843,
          "stock": 37
        },
        {
          "id": "creatina-monohidratada-growth-300g-300g",
          "name": "Peso",
          "option": "300g",
          "price": 164.84584126833832,
          "stock": 56
        },
        {
          "id": "creatina-monohidratada-growth-300g-500g",
          "name": "Peso",
          "option": "500g",
          "price": 172.58495980402654,
          "stock": 25
        }
      ]
    },
    {
      "id": "sup-44",
      "name": "Pré-Treino Power Atlhetica",
      "slug": "pré-treino-power-atlhetica-900g",
      "categorySlug": "suplementos",
      "brand": "Atlhetica",
      "price": 200.93,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "performance",
        "energia"
      ],
      "variants": [
        {
          "id": "pré-treino-power-atlhetica-900g-caramelo",
          "name": "Sabor",
          "option": "Caramelo",
          "price": 206.9290782850921,
          "stock": 30
        },
        {
          "id": "pré-treino-power-atlhetica-900g-cappuccino",
          "name": "Sabor",
          "option": "Cappuccino",
          "price": 199.1722216571975,
          "stock": 12
        },
        {
          "id": "pré-treino-power-atlhetica-900g-chocolate",
          "name": "Sabor",
          "option": "Chocolate",
          "price": 204.74233049610896,
          "stock": 49
        }
      ]
    },
    {
      "id": "sup-45",
      "name": "Intra-Workout Hidratante Growth",
      "slug": "intra-workout-hidratante-growth-300g",
      "categorySlug": "suplementos",
      "brand": "Growth",
      "price": 220.43,
      "compareAt": 254.62,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "performance",
        "recuperação"
      ],
      "variants": [
        {
          "id": "intra-workout-hidratante-growth-300g-baunilha",
          "name": "Sabor",
          "option": "Baunilha",
          "price": 221.16561060946128,
          "stock": 15
        },
        {
          "id": "intra-workout-hidratante-growth-300g-frutas-vermelhas",
          "name": "Sabor",
          "option": "Frutas Vermelhas",
          "price": 222.0696958193002,
          "stock": 21
        },
        {
          "id": "intra-workout-hidratante-growth-300g-caramelo",
          "name": "Sabor",
          "option": "Caramelo",
          "price": 221.0803398343522,
          "stock": 24
        }
      ]
    },
    {
      "id": "sup-46",
      "name": "Glutamina Recovery Body Action",
      "slug": "glutamina-recovery-body-action-500g-2",
      "categorySlug": "suplementos",
      "brand": "Body Action",
      "price": 162.0,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "recuperação",
        "saúde"
      ],
      "variants": [
        {
          "id": "glutamina-recovery-body-action-500g-150g",
          "name": "Peso",
          "option": "150g",
          "price": 155.51338249520649,
          "stock": 9
        },
        {
          "id": "glutamina-recovery-body-action-500g-1kg",
          "name": "Peso",
          "option": "1kg",
          "price": 167.0044203576997,
          "stock": 44
        },
        {
          "id": "glutamina-recovery-body-action-500g-300g",
          "name": "Peso",
          "option": "300g",
          "price": 163.4828620159057,
          "stock": 69
        }
      ]
    },
    {
      "id": "sup-47",
      "name": "Ômega 3 Premium Atlhetica",
      "slug": "ômega-3-premium-atlhetica-1kg",
      "categorySlug": "suplementos",
      "brand": "Atlhetica",
      "price": 219.05,
      "compareAt": 284.33,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "saúde"
      ],
      "variants": [
        {
          "id": "ômega-3-premium-atlhetica-1kg-60-cápsulas",
          "name": "Quantidade",
          "option": "60 cápsulas",
          "price": 225.01685960536383,
          "stock": 23
        },
        {
          "id": "ômega-3-premium-atlhetica-1kg-120-cápsulas",
          "name": "Quantidade",
          "option": "120 cápsulas",
          "price": 216.27281566535174,
          "stock": 57
        },
        {
          "id": "ômega-3-premium-atlhetica-1kg-180-cápsulas",
          "name": "Quantidade",
          "option": "180 cápsulas",
          "price": 218.668992225852,
          "stock": 51
        }
      ]
    },
    {
      "id": "sup-48",
      "name": "Colágeno Hidrolisado Max Titanium",
      "slug": "colágeno-hidrolisado-max-titanium-2kg",
      "categorySlug": "suplementos",
      "brand": "Max Titanium",
      "price": 192.05,
      "compareAt": 241.42,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "saúde",
        "beleza"
      ],
      "variants": [
        {
          "id": "colágeno-hidrolisado-max-titanium-2kg-morango",
          "name": "Sabor",
          "option": "Morango",
          "price": 194.52543254056806,
          "stock": 8
        },
        {
          "id": "colágeno-hidrolisado-max-titanium-2kg-chocolate",
          "name": "Sabor",
          "option": "Chocolate",
          "price": 196.5457562699958,
          "stock": 60
        },
        {
          "id": "colágeno-hidrolisado-max-titanium-2kg-cappuccino",
          "name": "Sabor",
          "option": "Cappuccino",
          "price": 192.9520170499041,
          "stock": 35
        }
      ]
    },
    {
      "id": "sup-49",
      "name": "Cafeína Concentrada Body Action",
      "slug": "cafeína-concentrada-body-action-1kg",
      "categorySlug": "suplementos",
      "brand": "Body Action",
      "price": 179.24,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "performance",
        "emagrecimento"
      ],
      "variants": [
        {
          "id": "cafeína-concentrada-body-action-1kg-60-cápsulas",
          "name": "Quantidade",
          "option": "60 cápsulas",
          "price": 184.0455436481607,
          "stock": 69
        },
        {
          "id": "cafeína-concentrada-body-action-1kg-120-cápsulas",
          "name": "Quantidade",
          "option": "120 cápsulas",
          "price": 183.0454889682009,
          "stock": 47
        },
        {
          "id": "cafeína-concentrada-body-action-1kg-180-cápsulas",
          "name": "Quantidade",
          "option": "180 cápsulas",
          "price": 184.93839062568108,
          "stock": 42
        }
      ]
    },
    {
      "id": "sup-50",
      "name": "Multivitamínico Completo Under Labz",
      "slug": "multivitamínico-completo-under-labz-1kg",
      "categorySlug": "suplementos",
      "brand": "Under Labz",
      "price": 133.05,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "saúde"
      ],
      "variants": [
        {
          "id": "multivitamínico-completo-under-labz-1kg-60-cápsulas",
          "name": "Quantidade",
          "option": "60 cápsulas",
          "price": 132.27074645659073,
          "stock": 62
        },
        {
          "id": "multivitamínico-completo-under-labz-1kg-120-cápsulas",
          "name": "Quantidade",
          "option": "120 cápsulas",
          "price": 131.9959420291243,
          "stock": 67
        },
        {
          "id": "multivitamínico-completo-under-labz-1kg-180-cápsulas",
          "name": "Quantidade",
          "option": "180 cápsulas",
          "price": 130.0899547766681,
          "stock": 64
        }
      ]
    },
    {
      "id": "sup-51",
      "name": "Magnésio Quelato Under Labz",
      "slug": "magnésio-quelato-under-labz-500g",
      "categorySlug": "suplementos",
      "brand": "Under Labz",
      "price": 186.58,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "saúde",
        "recuperação"
      ],
      "variants": [
        {
          "id": "magnésio-quelato-under-labz-500g-60-cápsulas",
          "name": "Quantidade",
          "option": "60 cápsulas",
          "price": 190.59826164534593,
          "stock": 29
        },
        {
          "id": "magnésio-quelato-under-labz-500g-120-cápsulas",
          "name": "Quantidade",
          "option": "120 cápsulas",
          "price": 182.9243999732411,
          "stock": 62
        },
        {
          "id": "magnésio-quelato-under-labz-500g-180-cápsulas",
          "name": "Quantidade",
          "option": "180 cápsulas",
          "price": 186.48017001466513,
          "stock": 39
        }
      ]
    },
    {
      "id": "sup-52",
      "name": "NAC + CoQ10 Dux",
      "slug": "nac-coq10-dux-900g",
      "categorySlug": "suplementos",
      "brand": "Dux",
      "price": 194.63,
      "compareAt": 266.66,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "saúde"
      ],
      "variants": [
        {
          "id": "nac-coq10-dux-900g-60-cápsulas",
          "name": "Quantidade",
          "option": "60 cápsulas",
          "price": 199.0442050039864,
          "stock": 25
        },
        {
          "id": "nac-coq10-dux-900g-120-cápsulas",
          "name": "Quantidade",
          "option": "120 cápsulas",
          "price": 197.299492335035,
          "stock": 41
        },
        {
          "id": "nac-coq10-dux-900g-180-cápsulas",
          "name": "Quantidade",
          "option": "180 cápsulas",
          "price": 202.00675093332438,
          "stock": 13
        }
      ]
    },
    {
      "id": "sup-53",
      "name": "Hydrolite Isotônico Dux",
      "slug": "hydrolite-isotônico-dux-1kg",
      "categorySlug": "suplementos",
      "brand": "Dux",
      "price": 142.06,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "performance",
        "hidratação"
      ],
      "variants": [
        {
          "id": "hydrolite-isotônico-dux-1kg-caramelo",
          "name": "Sabor",
          "option": "Caramelo",
          "price": 142.5417454958657,
          "stock": 9
        },
        {
          "id": "hydrolite-isotônico-dux-1kg-cookies",
          "name": "Sabor",
          "option": "Cookies",
          "price": 138.99053350554672,
          "stock": 22
        },
        {
          "id": "hydrolite-isotônico-dux-1kg-frutas-vermelhas",
          "name": "Sabor",
          "option": "Frutas Vermelhas",
          "price": 142.10401128677927,
          "stock": 23
        }
      ]
    },
    {
      "id": "sup-54",
      "name": "Pasta de Amendoim Fit Vitafor",
      "slug": "pasta-de-amendoim-fit-vitafor-2kg",
      "categorySlug": "suplementos",
      "brand": "Vitafor",
      "price": 121.73,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "saúde",
        "energia"
      ],
      "variants": [
        {
          "id": "pasta-de-amendoim-fit-vitafor-2kg-morango",
          "name": "Sabor",
          "option": "Morango",
          "price": 121.0379129719593,
          "stock": 52
        },
        {
          "id": "pasta-de-amendoim-fit-vitafor-2kg-cookies",
          "name": "Sabor",
          "option": "Cookies",
          "price": 122.26745262853179,
          "stock": 27
        },
        {
          "id": "pasta-de-amendoim-fit-vitafor-2kg-cappuccino",
          "name": "Sabor",
          "option": "Cappuccino",
          "price": 120.24403676200942,
          "stock": 15
        }
      ]
    },
    {
      "id": "sup-55",
      "name": "Barra Proteica Dux",
      "slug": "barra-proteica-dux-900g",
      "categorySlug": "suplementos",
      "brand": "Dux",
      "price": 79.32,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "performance",
        "energia"
      ],
      "variants": [
        {
          "id": "barra-proteica-dux-900g-frutas-vermelhas",
          "name": "Sabor",
          "option": "Frutas Vermelhas",
          "price": 77.23540973010545,
          "stock": 55
        },
        {
          "id": "barra-proteica-dux-900g-caramelo",
          "name": "Sabor",
          "option": "Caramelo",
          "price": 80.16198587212708,
          "stock": 54
        },
        {
          "id": "barra-proteica-dux-900g-baunilha",
          "name": "Sabor",
          "option": "Baunilha",
          "price": 81.2158690596079,
          "stock": 56
        }
      ]
    },
    {
      "id": "sup-56",
      "name": "Wafer Proteico Shark Pro",
      "slug": "wafer-proteico-shark-pro-2kg",
      "categorySlug": "suplementos",
      "brand": "Shark Pro",
      "price": 107.11,
      "compareAt": 128.37,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "performance"
      ],
      "variants": [
        {
          "id": "wafer-proteico-shark-pro-2kg-baunilha",
          "name": "Sabor",
          "option": "Baunilha",
          "price": 106.13267588780435,
          "stock": 53
        },
        {
          "id": "wafer-proteico-shark-pro-2kg-morango",
          "name": "Sabor",
          "option": "Morango",
          "price": 108.45135089267663,
          "stock": 25
        },
        {
          "id": "wafer-proteico-shark-pro-2kg-frutas-vermelhas",
          "name": "Sabor",
          "option": "Frutas Vermelhas",
          "price": 103.56515700983218,
          "stock": 11
        }
      ]
    },
    {
      "id": "sup-57",
      "name": "BCAA 4:1:1 Shark Pro",
      "slug": "bcaa-411-shark-pro-900g",
      "categorySlug": "suplementos",
      "brand": "Shark Pro",
      "price": 177.56,
      "compareAt": 242.74,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "recuperação"
      ],
      "variants": [
        {
          "id": "bcaa-411-shark-pro-900g-60-cápsulas",
          "name": "Quantidade",
          "option": "60 cápsulas",
          "price": 179.45054433428535,
          "stock": 63
        },
        {
          "id": "bcaa-411-shark-pro-900g-120-cápsulas",
          "name": "Quantidade",
          "option": "120 cápsulas",
          "price": 173.7071848405061,
          "stock": 26
        },
        {
          "id": "bcaa-411-shark-pro-900g-180-cápsulas",
          "name": "Quantidade",
          "option": "180 cápsulas",
          "price": 179.19276333916613,
          "stock": 36
        }
      ]
    },
    {
      "id": "sup-58",
      "name": "Termogênico Clean Body Action",
      "slug": "termogênico-clean-body-action-500g",
      "categorySlug": "suplementos",
      "brand": "Body Action",
      "price": 223.13,
      "compareAt": 304.67,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "emagrecimento",
        "performance"
      ],
      "variants": [
        {
          "id": "termogênico-clean-body-action-500g-60-cápsulas",
          "name": "Quantidade",
          "option": "60 cápsulas",
          "price": 220.49904568869908,
          "stock": 12
        },
        {
          "id": "termogênico-clean-body-action-500g-120-cápsulas",
          "name": "Quantidade",
          "option": "120 cápsulas",
          "price": 223.93848930702327,
          "stock": 12
        },
        {
          "id": "termogênico-clean-body-action-500g-180-cápsulas",
          "name": "Quantidade",
          "option": "180 cápsulas",
          "price": 226.0542538776498,
          "stock": 51
        }
      ]
    },
    {
      "id": "sup-59",
      "name": "Caseína Night Growth",
      "slug": "caseína-night-growth-500g",
      "categorySlug": "suplementos",
      "brand": "Growth",
      "price": 84.36,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "recuperação"
      ],
      "variants": [
        {
          "id": "caseína-night-growth-500g-morango-900g",
          "name": "Sabor/Peso",
          "option": "Morango 900g",
          "price": 88.45476476864444,
          "stock": 58
        },
        {
          "id": "caseína-night-growth-500g-morango-1kg",
          "name": "Sabor/Peso",
          "option": "Morango 1kg",
          "price": 88.6362752874591,
          "stock": 57
        },
        {
          "id": "caseína-night-growth-500g-chocolate-2kg",
          "name": "Sabor/Peso",
          "option": "Chocolate 2kg",
          "price": 86.11771697333131,
          "stock": 36
        },
        {
          "id": "caseína-night-growth-500g-chocolate-1kg",
          "name": "Sabor/Peso",
          "option": "Chocolate 1kg",
          "price": 83.82029698776081,
          "stock": 45
        },
        {
          "id": "caseína-night-growth-500g-baunilha-1kg",
          "name": "Sabor/Peso",
          "option": "Baunilha 1kg",
          "price": 87.8894420593635,
          "stock": 11
        },
        {
          "id": "caseína-night-growth-500g-baunilha-2kg",
          "name": "Sabor/Peso",
          "option": "Baunilha 2kg",
          "price": 88.50446368367696,
          "stock": 55
        }
      ]
    },
    {
      "id": "sup-60",
      "name": "Refeição Líquida Max Titanium",
      "slug": "refeição-líquida-max-titanium-500g",
      "categorySlug": "suplementos",
      "brand": "Max Titanium",
      "price": 165.34,
      "compareAt": 193.5,
      "images": [
        "https://images.unsplash.com/photo-1549049954-92e96cdfa0a5?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1585238342029-4dccf1b9399b?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Suplemento com fórmula equilibrada para apoiar seu treino diário e manter a consistência nos objetivos.",
      "tags": [
        "saúde",
        "praticidade"
      ],
      "variants": [
        {
          "id": "refeição-líquida-max-titanium-500g-baunilha",
          "name": "Sabor",
          "option": "Baunilha",
          "price": 162.0906486890117,
          "stock": 8
        },
        {
          "id": "refeição-líquida-max-titanium-500g-frutas-vermelhas",
          "name": "Sabor",
          "option": "Frutas Vermelhas",
          "price": 165.42517572660026,
          "stock": 52
        },
        {
          "id": "refeição-líquida-max-titanium-500g-cappuccino",
          "name": "Sabor",
          "option": "Cappuccino",
          "price": 167.27811195119563,
          "stock": 26
        }
      ]
    },
    {
      "id": "acc-61",
      "name": "Coqueteleira Shark Pro",
      "slug": "coqueteleira-shark-pro",
      "categorySlug": "acessorios",
      "brand": "Shark Pro",
      "price": 51.41,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1584751837810-19b5c1804b98?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1523475496153-3d6cc4d79e97?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Acessório funcional para treinos mais organizados e eficientes.",
      "tags": [
        "performance"
      ],
      "variants": [
        {
          "id": "coqueteleira-shark-pro-verde",
          "name": "Cor",
          "option": "Verde",
          "price": 53.90907936056994,
          "stock": 67
        },
        {
          "id": "coqueteleira-shark-pro-vermelho",
          "name": "Cor",
          "option": "Vermelho",
          "price": 50.52643700527119,
          "stock": 58
        },
        {
          "id": "coqueteleira-shark-pro-preto",
          "name": "Cor",
          "option": "Preto",
          "price": 53.410464057313774,
          "stock": 50
        }
      ]
    },
    {
      "id": "acc-62",
      "name": "Squeeze Térmico Under Labz",
      "slug": "squeeze-térmico-under-labz",
      "categorySlug": "acessorios",
      "brand": "Under Labz",
      "price": 78.52,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1584751837810-19b5c1804b98?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1523475496153-3d6cc4d79e97?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Acessório funcional para treinos mais organizados e eficientes.",
      "tags": [
        "performance"
      ],
      "variants": [
        {
          "id": "squeeze-térmico-under-labz-verde",
          "name": "Cor",
          "option": "Verde",
          "price": 82.13304927720047,
          "stock": 12
        },
        {
          "id": "squeeze-térmico-under-labz-azul",
          "name": "Cor",
          "option": "Azul",
          "price": 75.99710431611078,
          "stock": 58
        },
        {
          "id": "squeeze-térmico-under-labz-cinza",
          "name": "Cor",
          "option": "Cinza",
          "price": 77.98089450091386,
          "stock": 55
        }
      ]
    },
    {
      "id": "acc-63",
      "name": "Porta-cápsulas Growth",
      "slug": "porta-cápsulas-growth",
      "categorySlug": "acessorios",
      "brand": "Growth",
      "price": 147.97,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1584751837810-19b5c1804b98?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1523475496153-3d6cc4d79e97?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Acessório funcional para treinos mais organizados e eficientes.",
      "tags": [
        "praticidade"
      ],
      "variants": [
        {
          "id": "porta-cápsulas-growth-vermelho",
          "name": "Cor",
          "option": "Vermelho",
          "price": 150.56786947980575,
          "stock": 68
        },
        {
          "id": "porta-cápsulas-growth-verde",
          "name": "Cor",
          "option": "Verde",
          "price": 147.1479695451541,
          "stock": 42
        },
        {
          "id": "porta-cápsulas-growth-cinza",
          "name": "Cor",
          "option": "Cinza",
          "price": 148.92036175476068,
          "stock": 13
        }
      ]
    },
    {
      "id": "acc-64",
      "name": "Strap de Levantamento Growth",
      "slug": "strap-de-levantamento-growth",
      "categorySlug": "acessorios",
      "brand": "Growth",
      "price": 24.58,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1584751837810-19b5c1804b98?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1523475496153-3d6cc4d79e97?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Acessório funcional para treinos mais organizados e eficientes.",
      "tags": [
        "força"
      ],
      "variants": [
        {
          "id": "strap-de-levantamento-growth-cinza",
          "name": "Cor",
          "option": "Cinza",
          "price": 21.786919139106683,
          "stock": 22
        },
        {
          "id": "strap-de-levantamento-growth-rosa",
          "name": "Cor",
          "option": "Rosa",
          "price": 29.27528881754269,
          "stock": 61
        },
        {
          "id": "strap-de-levantamento-growth-branco",
          "name": "Cor",
          "option": "Branco",
          "price": 28.46413498253817,
          "stock": 45
        }
      ]
    },
    {
      "id": "acc-65",
      "name": "Munhequeira Shark Pro",
      "slug": "munhequeira-shark-pro",
      "categorySlug": "acessorios",
      "brand": "Shark Pro",
      "price": 158.94,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1584751837810-19b5c1804b98?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1523475496153-3d6cc4d79e97?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Acessório funcional para treinos mais organizados e eficientes.",
      "tags": [
        "proteção"
      ],
      "variants": [
        {
          "id": "munhequeira-shark-pro-cinza",
          "name": "Cor",
          "option": "Cinza",
          "price": 162.04487203337365,
          "stock": 19
        },
        {
          "id": "munhequeira-shark-pro-rosa",
          "name": "Cor",
          "option": "Rosa",
          "price": 159.70400658601307,
          "stock": 49
        },
        {
          "id": "munhequeira-shark-pro-preto",
          "name": "Cor",
          "option": "Preto",
          "price": 159.47783523536162,
          "stock": 25
        }
      ]
    },
    {
      "id": "acc-66",
      "name": "Cinturão de Treino Under Labz",
      "slug": "cinturão-de-treino-under-labz",
      "categorySlug": "acessorios",
      "brand": "Under Labz",
      "price": 158.57,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1584751837810-19b5c1804b98?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1523475496153-3d6cc4d79e97?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Acessório funcional para treinos mais organizados e eficientes.",
      "tags": [
        "força"
      ],
      "variants": [
        {
          "id": "cinturão-de-treino-under-labz-p",
          "name": "Tamanho",
          "option": "P",
          "price": 164.52669438994664,
          "stock": 70
        },
        {
          "id": "cinturão-de-treino-under-labz-m",
          "name": "Tamanho",
          "option": "M",
          "price": 156.57366646923208,
          "stock": 30
        },
        {
          "id": "cinturão-de-treino-under-labz-g",
          "name": "Tamanho",
          "option": "G",
          "price": 160.06182902773017,
          "stock": 28
        },
        {
          "id": "cinturão-de-treino-under-labz-gg",
          "name": "Tamanho",
          "option": "GG",
          "price": 162.94146860473305,
          "stock": 62
        }
      ]
    },
    {
      "id": "acc-67",
      "name": "Corda de Pular Under Labz",
      "slug": "corda-de-pular-under-labz",
      "categorySlug": "acessorios",
      "brand": "Under Labz",
      "price": 65.17,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1584751837810-19b5c1804b98?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1523475496153-3d6cc4d79e97?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Acessório funcional para treinos mais organizados e eficientes.",
      "tags": [
        "performance"
      ],
      "variants": [
        {
          "id": "corda-de-pular-under-labz-cinza",
          "name": "Cor",
          "option": "Cinza",
          "price": 68.67852827790378,
          "stock": 43
        },
        {
          "id": "corda-de-pular-under-labz-verde",
          "name": "Cor",
          "option": "Verde",
          "price": 62.46357704250967,
          "stock": 13
        },
        {
          "id": "corda-de-pular-under-labz-vermelho",
          "name": "Cor",
          "option": "Vermelho",
          "price": 64.68613725736134,
          "stock": 28
        }
      ]
    },
    {
      "id": "acc-68",
      "name": "Mini Band Shark Pro",
      "slug": "mini-band-shark-pro",
      "categorySlug": "acessorios",
      "brand": "Shark Pro",
      "price": 154.83,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1584751837810-19b5c1804b98?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1523475496153-3d6cc4d79e97?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Acessório funcional para treinos mais organizados e eficientes.",
      "tags": [
        "performance"
      ],
      "variants": [
        {
          "id": "mini-band-shark-pro-rosa",
          "name": "Cor",
          "option": "Rosa",
          "price": 155.52581075985717,
          "stock": 11
        },
        {
          "id": "mini-band-shark-pro-preto",
          "name": "Cor",
          "option": "Preto",
          "price": 153.33066033115622,
          "stock": 31
        },
        {
          "id": "mini-band-shark-pro-branco",
          "name": "Cor",
          "option": "Branco",
          "price": 156.8110709808137,
          "stock": 39
        }
      ]
    },
    {
      "id": "acc-69",
      "name": "Faixa Elástica Atlhetica",
      "slug": "faixa-elástica-atlhetica",
      "categorySlug": "acessorios",
      "brand": "Atlhetica",
      "price": 125.4,
      "compareAt": 155.16,
      "images": [
        "https://images.unsplash.com/photo-1584751837810-19b5c1804b98?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1523475496153-3d6cc4d79e97?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Acessório funcional para treinos mais organizados e eficientes.",
      "tags": [
        "recuperação"
      ],
      "variants": [
        {
          "id": "faixa-elástica-atlhetica-cinza",
          "name": "Cor",
          "option": "Cinza",
          "price": 123.37140866690096,
          "stock": 70
        },
        {
          "id": "faixa-elástica-atlhetica-vermelho",
          "name": "Cor",
          "option": "Vermelho",
          "price": 127.44017821603249,
          "stock": 59
        },
        {
          "id": "faixa-elástica-atlhetica-verde",
          "name": "Cor",
          "option": "Verde",
          "price": 124.31437969862121,
          "stock": 18
        }
      ]
    },
    {
      "id": "acc-70",
      "name": "Rolo Miofascial Body Action",
      "slug": "rolo-miofascial-body-action",
      "categorySlug": "acessorios",
      "brand": "Body Action",
      "price": 96.12,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1584751837810-19b5c1804b98?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1523475496153-3d6cc4d79e97?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Acessório funcional para treinos mais organizados e eficientes.",
      "tags": [
        "recuperação"
      ],
      "variants": [
        {
          "id": "rolo-miofascial-body-action-preto",
          "name": "Cor",
          "option": "Preto",
          "price": 96.81158315343028,
          "stock": 15
        },
        {
          "id": "rolo-miofascial-body-action-azul",
          "name": "Cor",
          "option": "Azul",
          "price": 98.30167751027007,
          "stock": 17
        },
        {
          "id": "rolo-miofascial-body-action-branco",
          "name": "Cor",
          "option": "Branco",
          "price": 97.10700403765756,
          "stock": 53
        }
      ]
    },
    {
      "id": "acc-71",
      "name": "Toalha Fitness Body Action",
      "slug": "toalha-fitness-body-action",
      "categorySlug": "acessorios",
      "brand": "Body Action",
      "price": 90.24,
      "compareAt": 118.1,
      "images": [
        "https://images.unsplash.com/photo-1584751837810-19b5c1804b98?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1523475496153-3d6cc4d79e97?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Acessório funcional para treinos mais organizados e eficientes.",
      "tags": [
        "praticidade"
      ],
      "variants": [
        {
          "id": "toalha-fitness-body-action-vermelho",
          "name": "Cor",
          "option": "Vermelho",
          "price": 91.65012061504375,
          "stock": 32
        },
        {
          "id": "toalha-fitness-body-action-azul",
          "name": "Cor",
          "option": "Azul",
          "price": 88.76488296758342,
          "stock": 46
        },
        {
          "id": "toalha-fitness-body-action-branco",
          "name": "Cor",
          "option": "Branco",
          "price": 91.30592713274315,
          "stock": 64
        }
      ]
    },
    {
      "id": "acc-72",
      "name": "Boné Esportivo Under Labz",
      "slug": "boné-esportivo-under-labz",
      "categorySlug": "acessorios",
      "brand": "Under Labz",
      "price": 139.96,
      "compareAt": 181.6,
      "images": [
        "https://images.unsplash.com/photo-1584751837810-19b5c1804b98?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1523475496153-3d6cc4d79e97?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Acessório funcional para treinos mais organizados e eficientes.",
      "tags": [
        "estilo"
      ],
      "variants": [
        {
          "id": "boné-esportivo-under-labz-vermelho",
          "name": "Cor",
          "option": "Vermelho",
          "price": 139.09738130453525,
          "stock": 8
        },
        {
          "id": "boné-esportivo-under-labz-cinza",
          "name": "Cor",
          "option": "Cinza",
          "price": 139.2227118662626,
          "stock": 27
        },
        {
          "id": "boné-esportivo-under-labz-rosa",
          "name": "Cor",
          "option": "Rosa",
          "price": 143.6598073808514,
          "stock": 45
        }
      ]
    },
    {
      "id": "acc-73",
      "name": "Coqueteleira Atlhetica",
      "slug": "coqueteleira-atlhetica",
      "categorySlug": "acessorios",
      "brand": "Atlhetica",
      "price": 140.14,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1584751837810-19b5c1804b98?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1523475496153-3d6cc4d79e97?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Acessório funcional para treinos mais organizados e eficientes.",
      "tags": [
        "performance"
      ],
      "variants": [
        {
          "id": "coqueteleira-atlhetica-vermelho",
          "name": "Cor",
          "option": "Vermelho",
          "price": 141.55533933656648,
          "stock": 42
        },
        {
          "id": "coqueteleira-atlhetica-cinza",
          "name": "Cor",
          "option": "Cinza",
          "price": 140.15768043371108,
          "stock": 67
        },
        {
          "id": "coqueteleira-atlhetica-verde",
          "name": "Cor",
          "option": "Verde",
          "price": 139.7142188018323,
          "stock": 20
        }
      ]
    },
    {
      "id": "acc-74",
      "name": "Squeeze Térmico Under Labz",
      "slug": "squeeze-térmico-under-labz-2",
      "categorySlug": "acessorios",
      "brand": "Under Labz",
      "price": 99.05,
      "compareAt": 128.16,
      "images": [
        "https://images.unsplash.com/photo-1584751837810-19b5c1804b98?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1523475496153-3d6cc4d79e97?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Acessório funcional para treinos mais organizados e eficientes.",
      "tags": [
        "performance"
      ],
      "variants": [
        {
          "id": "squeeze-térmico-under-labz-preto",
          "name": "Cor",
          "option": "Preto",
          "price": 101.69182304820002,
          "stock": 59
        },
        {
          "id": "squeeze-térmico-under-labz-cinza",
          "name": "Cor",
          "option": "Cinza",
          "price": 99.09984917557709,
          "stock": 50
        },
        {
          "id": "squeeze-térmico-under-labz-vermelho",
          "name": "Cor",
          "option": "Vermelho",
          "price": 102.38914928559944,
          "stock": 49
        }
      ]
    },
    {
      "id": "acc-75",
      "name": "Porta-cápsulas Under Labz",
      "slug": "porta-cápsulas-under-labz",
      "categorySlug": "acessorios",
      "brand": "Under Labz",
      "price": 88.35,
      "compareAt": 108.28,
      "images": [
        "https://images.unsplash.com/photo-1584751837810-19b5c1804b98?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1523475496153-3d6cc4d79e97?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Acessório funcional para treinos mais organizados e eficientes.",
      "tags": [
        "praticidade"
      ],
      "variants": [
        {
          "id": "porta-cápsulas-under-labz-rosa",
          "name": "Cor",
          "option": "Rosa",
          "price": 92.34352299243446,
          "stock": 36
        },
        {
          "id": "porta-cápsulas-under-labz-cinza",
          "name": "Cor",
          "option": "Cinza",
          "price": 86.14769358193583,
          "stock": 66
        },
        {
          "id": "porta-cápsulas-under-labz-preto",
          "name": "Cor",
          "option": "Preto",
          "price": 89.00542459579393,
          "stock": 54
        }
      ]
    },
    {
      "id": "acc-76",
      "name": "Strap de Levantamento Under Labz",
      "slug": "strap-de-levantamento-under-labz",
      "categorySlug": "acessorios",
      "brand": "Under Labz",
      "price": 76.4,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1584751837810-19b5c1804b98?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1523475496153-3d6cc4d79e97?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Acessório funcional para treinos mais organizados e eficientes.",
      "tags": [
        "força"
      ],
      "variants": [
        {
          "id": "strap-de-levantamento-under-labz-azul",
          "name": "Cor",
          "option": "Azul",
          "price": 79.65220233018421,
          "stock": 24
        },
        {
          "id": "strap-de-levantamento-under-labz-preto",
          "name": "Cor",
          "option": "Preto",
          "price": 76.10848987241145,
          "stock": 52
        },
        {
          "id": "strap-de-levantamento-under-labz-vermelho",
          "name": "Cor",
          "option": "Vermelho",
          "price": 76.57986659108619,
          "stock": 13
        }
      ]
    },
    {
      "id": "acc-77",
      "name": "Munhequeira Body Action",
      "slug": "munhequeira-body-action",
      "categorySlug": "acessorios",
      "brand": "Body Action",
      "price": 138.33,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1584751837810-19b5c1804b98?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1523475496153-3d6cc4d79e97?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Acessório funcional para treinos mais organizados e eficientes.",
      "tags": [
        "proteção"
      ],
      "variants": [
        {
          "id": "munhequeira-body-action-vermelho",
          "name": "Cor",
          "option": "Vermelho",
          "price": 142.3090641391883,
          "stock": 10
        },
        {
          "id": "munhequeira-body-action-cinza",
          "name": "Cor",
          "option": "Cinza",
          "price": 140.2696756928218,
          "stock": 23
        },
        {
          "id": "munhequeira-body-action-branco",
          "name": "Cor",
          "option": "Branco",
          "price": 140.37928813483714,
          "stock": 66
        }
      ]
    },
    {
      "id": "acc-78",
      "name": "Cinturão de Treino Body Action",
      "slug": "cinturão-de-treino-body-action",
      "categorySlug": "acessorios",
      "brand": "Body Action",
      "price": 158.64,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1584751837810-19b5c1804b98?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1523475496153-3d6cc4d79e97?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Acessório funcional para treinos mais organizados e eficientes.",
      "tags": [
        "força"
      ],
      "variants": [
        {
          "id": "cinturão-de-treino-body-action-p",
          "name": "Tamanho",
          "option": "P",
          "price": 160.41368619115437,
          "stock": 14
        },
        {
          "id": "cinturão-de-treino-body-action-m",
          "name": "Tamanho",
          "option": "M",
          "price": 164.0040666229369,
          "stock": 53
        },
        {
          "id": "cinturão-de-treino-body-action-g",
          "name": "Tamanho",
          "option": "G",
          "price": 165.23837155867798,
          "stock": 36
        },
        {
          "id": "cinturão-de-treino-body-action-gg",
          "name": "Tamanho",
          "option": "GG",
          "price": 157.47001265402147,
          "stock": 27
        }
      ]
    },
    {
      "id": "acc-79",
      "name": "Corda de Pular Shark Pro",
      "slug": "corda-de-pular-shark-pro",
      "categorySlug": "acessorios",
      "brand": "Shark Pro",
      "price": 25.44,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1584751837810-19b5c1804b98?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1523475496153-3d6cc4d79e97?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Acessório funcional para treinos mais organizados e eficientes.",
      "tags": [
        "performance"
      ],
      "variants": [
        {
          "id": "corda-de-pular-shark-pro-cinza",
          "name": "Cor",
          "option": "Cinza",
          "price": 25.885494302843203,
          "stock": 23
        },
        {
          "id": "corda-de-pular-shark-pro-branco",
          "name": "Cor",
          "option": "Branco",
          "price": 26.68933054519008,
          "stock": 44
        },
        {
          "id": "corda-de-pular-shark-pro-verde",
          "name": "Cor",
          "option": "Verde",
          "price": 27.894402970821826,
          "stock": 19
        }
      ]
    },
    {
      "id": "acc-80",
      "name": "Mini Band Under Labz",
      "slug": "mini-band-under-labz",
      "categorySlug": "acessorios",
      "brand": "Under Labz",
      "price": 43.51,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1584751837810-19b5c1804b98?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1523475496153-3d6cc4d79e97?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Acessório funcional para treinos mais organizados e eficientes.",
      "tags": [
        "performance"
      ],
      "variants": [
        {
          "id": "mini-band-under-labz-vermelho",
          "name": "Cor",
          "option": "Vermelho",
          "price": 44.49133801894361,
          "stock": 45
        },
        {
          "id": "mini-band-under-labz-rosa",
          "name": "Cor",
          "option": "Rosa",
          "price": 41.65494176102808,
          "stock": 37
        },
        {
          "id": "mini-band-under-labz-azul",
          "name": "Cor",
          "option": "Azul",
          "price": 45.613237048028545,
          "stock": 37
        }
      ]
    },
    {
      "id": "acc-81",
      "name": "Faixa Elástica Body Action",
      "slug": "faixa-elástica-body-action",
      "categorySlug": "acessorios",
      "brand": "Body Action",
      "price": 112.36,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1584751837810-19b5c1804b98?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1523475496153-3d6cc4d79e97?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Acessório funcional para treinos mais organizados e eficientes.",
      "tags": [
        "recuperação"
      ],
      "variants": [
        {
          "id": "faixa-elástica-body-action-vermelho",
          "name": "Cor",
          "option": "Vermelho",
          "price": 110.62380497657429,
          "stock": 36
        },
        {
          "id": "faixa-elástica-body-action-cinza",
          "name": "Cor",
          "option": "Cinza",
          "price": 116.92188507947716,
          "stock": 45
        },
        {
          "id": "faixa-elástica-body-action-rosa",
          "name": "Cor",
          "option": "Rosa",
          "price": 111.75323399299018,
          "stock": 69
        }
      ]
    },
    {
      "id": "acc-82",
      "name": "Rolo Miofascial Atlhetica",
      "slug": "rolo-miofascial-atlhetica",
      "categorySlug": "acessorios",
      "brand": "Atlhetica",
      "price": 115.64,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1584751837810-19b5c1804b98?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1523475496153-3d6cc4d79e97?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Acessório funcional para treinos mais organizados e eficientes.",
      "tags": [
        "recuperação"
      ],
      "variants": [
        {
          "id": "rolo-miofascial-atlhetica-cinza",
          "name": "Cor",
          "option": "Cinza",
          "price": 119.46668366928148,
          "stock": 14
        },
        {
          "id": "rolo-miofascial-atlhetica-azul",
          "name": "Cor",
          "option": "Azul",
          "price": 114.5376456154206,
          "stock": 44
        },
        {
          "id": "rolo-miofascial-atlhetica-vermelho",
          "name": "Cor",
          "option": "Vermelho",
          "price": 115.51167326061797,
          "stock": 26
        }
      ]
    },
    {
      "id": "acc-83",
      "name": "Toalha Fitness Body Action",
      "slug": "toalha-fitness-body-action-2",
      "categorySlug": "acessorios",
      "brand": "Body Action",
      "price": 22.07,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1584751837810-19b5c1804b98?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1523475496153-3d6cc4d79e97?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Acessório funcional para treinos mais organizados e eficientes.",
      "tags": [
        "praticidade"
      ],
      "variants": [
        {
          "id": "toalha-fitness-body-action-vermelho",
          "name": "Cor",
          "option": "Vermelho",
          "price": 23.59743213564559,
          "stock": 51
        },
        {
          "id": "toalha-fitness-body-action-cinza",
          "name": "Cor",
          "option": "Cinza",
          "price": 25.296492926160624,
          "stock": 70
        },
        {
          "id": "toalha-fitness-body-action-preto",
          "name": "Cor",
          "option": "Preto",
          "price": 19.462354006208,
          "stock": 46
        }
      ]
    },
    {
      "id": "acc-84",
      "name": "Boné Esportivo Atlhetica",
      "slug": "boné-esportivo-atlhetica",
      "categorySlug": "acessorios",
      "brand": "Atlhetica",
      "price": 135.6,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1584751837810-19b5c1804b98?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1523475496153-3d6cc4d79e97?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Acessório funcional para treinos mais organizados e eficientes.",
      "tags": [
        "estilo"
      ],
      "variants": [
        {
          "id": "boné-esportivo-atlhetica-branco",
          "name": "Cor",
          "option": "Branco",
          "price": 139.0154556603623,
          "stock": 22
        },
        {
          "id": "boné-esportivo-atlhetica-azul",
          "name": "Cor",
          "option": "Azul",
          "price": 137.69294302404714,
          "stock": 47
        },
        {
          "id": "boné-esportivo-atlhetica-rosa",
          "name": "Cor",
          "option": "Rosa",
          "price": 134.60501440034892,
          "stock": 56
        }
      ]
    },
    {
      "id": "acc-85",
      "name": "Coqueteleira Under Labz",
      "slug": "coqueteleira-under-labz",
      "categorySlug": "acessorios",
      "brand": "Under Labz",
      "price": 106.95,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1584751837810-19b5c1804b98?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1523475496153-3d6cc4d79e97?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Acessório funcional para treinos mais organizados e eficientes.",
      "tags": [
        "performance"
      ],
      "variants": [
        {
          "id": "coqueteleira-under-labz-verde",
          "name": "Cor",
          "option": "Verde",
          "price": 110.25888387208123,
          "stock": 10
        },
        {
          "id": "coqueteleira-under-labz-preto",
          "name": "Cor",
          "option": "Preto",
          "price": 108.58659044294723,
          "stock": 54
        },
        {
          "id": "coqueteleira-under-labz-cinza",
          "name": "Cor",
          "option": "Cinza",
          "price": 105.00129445136389,
          "stock": 66
        }
      ]
    },
    {
      "id": "app-86",
      "name": "Cropped Fitness Shark Pro",
      "slug": "cropped-fitness-shark-pro",
      "categorySlug": "roupas",
      "brand": "Shark Pro",
      "price": 118.01,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "fitness feminina",
        "performance"
      ],
      "variants": [
        {
          "id": "cropped-fitness-shark-pro-p-azul",
          "name": "Tamanho",
          "option": "P / Azul",
          "price": 114.38887635944211,
          "stock": 42
        },
        {
          "id": "cropped-fitness-shark-pro-m-cinza",
          "name": "Tamanho",
          "option": "M / Cinza",
          "price": 121.56534272665013,
          "stock": 66
        },
        {
          "id": "cropped-fitness-shark-pro-g-cinza",
          "name": "Tamanho",
          "option": "G / Cinza",
          "price": 126.95850715221316,
          "stock": 24
        },
        {
          "id": "cropped-fitness-shark-pro-gg-branco",
          "name": "Tamanho",
          "option": "GG / Branco",
          "price": 129.0053806897496,
          "stock": 69
        }
      ]
    },
    {
      "id": "app-87",
      "name": "Top Dry Fit Shark Pro",
      "slug": "top-dry-fit-shark-pro",
      "categorySlug": "roupas",
      "brand": "Shark Pro",
      "price": 180.98,
      "compareAt": 208.53,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "fitness feminina",
        "performance"
      ],
      "variants": [
        {
          "id": "top-dry-fit-shark-pro-p-preto",
          "name": "Tamanho",
          "option": "P / Preto",
          "price": 177.51362627010587,
          "stock": 69
        },
        {
          "id": "top-dry-fit-shark-pro-m-azul",
          "name": "Tamanho",
          "option": "M / Azul",
          "price": 190.4625307441788,
          "stock": 54
        },
        {
          "id": "top-dry-fit-shark-pro-g-verde",
          "name": "Tamanho",
          "option": "G / Verde",
          "price": 192.61896037007426,
          "stock": 69
        },
        {
          "id": "top-dry-fit-shark-pro-gg-branco",
          "name": "Tamanho",
          "option": "GG / Branco",
          "price": 189.4625775923701,
          "stock": 31
        }
      ]
    },
    {
      "id": "app-88",
      "name": "Legging Power Body Action",
      "slug": "legging-power-body-action",
      "categorySlug": "roupas",
      "brand": "Body Action",
      "price": 187.6,
      "compareAt": 238.3,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "fitness feminina",
        "performance"
      ],
      "variants": [
        {
          "id": "legging-power-body-action-p-vermelho",
          "name": "Tamanho",
          "option": "P / Vermelho",
          "price": 188.2345418550887,
          "stock": 55
        },
        {
          "id": "legging-power-body-action-m-verde",
          "name": "Tamanho",
          "option": "M / Verde",
          "price": 186.31890534849526,
          "stock": 32
        },
        {
          "id": "legging-power-body-action-g-branco",
          "name": "Tamanho",
          "option": "G / Branco",
          "price": 193.09388682041507,
          "stock": 31
        },
        {
          "id": "legging-power-body-action-gg-preto",
          "name": "Tamanho",
          "option": "GG / Preto",
          "price": 193.74705799675579,
          "stock": 38
        }
      ]
    },
    {
      "id": "app-89",
      "name": "Shorts 2 em 1 Body Action",
      "slug": "shorts-2-em-1-body-action",
      "categorySlug": "roupas",
      "brand": "Body Action",
      "price": 161.93,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "fitness feminina",
        "performance"
      ],
      "variants": [
        {
          "id": "shorts-2-em-1-body-action-p-cinza",
          "name": "Tamanho",
          "option": "P / Cinza",
          "price": 172.40460635737688,
          "stock": 22
        },
        {
          "id": "shorts-2-em-1-body-action-m-verde",
          "name": "Tamanho",
          "option": "M / Verde",
          "price": 157.06790674088353,
          "stock": 60
        },
        {
          "id": "shorts-2-em-1-body-action-g-vermelho",
          "name": "Tamanho",
          "option": "G / Vermelho",
          "price": 172.29897749170206,
          "stock": 27
        },
        {
          "id": "shorts-2-em-1-body-action-gg-verde",
          "name": "Tamanho",
          "option": "GG / Verde",
          "price": 163.27932540431743,
          "stock": 16
        }
      ]
    },
    {
      "id": "app-90",
      "name": "Conjunto Feminino Body Action",
      "slug": "conjunto-feminino-body-action",
      "categorySlug": "roupas",
      "brand": "Body Action",
      "price": 210.94,
      "compareAt": 265.35,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "fitness feminina",
        "performance"
      ],
      "variants": [
        {
          "id": "conjunto-feminino-body-action-p-preto",
          "name": "Tamanho",
          "option": "P / Preto",
          "price": 209.16640058376393,
          "stock": 42
        },
        {
          "id": "conjunto-feminino-body-action-m-azul",
          "name": "Tamanho",
          "option": "M / Azul",
          "price": 211.93562496070257,
          "stock": 31
        },
        {
          "id": "conjunto-feminino-body-action-g-verde",
          "name": "Tamanho",
          "option": "G / Verde",
          "price": 222.0288538314143,
          "stock": 52
        },
        {
          "id": "conjunto-feminino-body-action-gg-rosa",
          "name": "Tamanho",
          "option": "GG / Rosa",
          "price": 212.484281561465,
          "stock": 55
        }
      ]
    },
    {
      "id": "app-91",
      "name": "Regata Dry Fit Atlhetica",
      "slug": "regata-dry-fit-atlhetica",
      "categorySlug": "roupas",
      "brand": "Atlhetica",
      "price": 201.81,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "performance"
      ],
      "variants": [
        {
          "id": "regata-dry-fit-atlhetica-p-branco",
          "name": "Tamanho",
          "option": "P / Branco",
          "price": 204.61824668021308,
          "stock": 34
        },
        {
          "id": "regata-dry-fit-atlhetica-m-cinza",
          "name": "Tamanho",
          "option": "M / Cinza",
          "price": 196.39889316339085,
          "stock": 31
        },
        {
          "id": "regata-dry-fit-atlhetica-g-azul",
          "name": "Tamanho",
          "option": "G / Azul",
          "price": 203.79089554909262,
          "stock": 68
        },
        {
          "id": "regata-dry-fit-atlhetica-gg-azul",
          "name": "Tamanho",
          "option": "GG / Azul",
          "price": 211.20810347950717,
          "stock": 14
        }
      ]
    },
    {
      "id": "app-92",
      "name": "Camiseta Dry Fit Shark Pro",
      "slug": "camiseta-dry-fit-shark-pro",
      "categorySlug": "roupas",
      "brand": "Shark Pro",
      "price": 150.67,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "performance"
      ],
      "variants": [
        {
          "id": "camiseta-dry-fit-shark-pro-p-cinza",
          "name": "Tamanho",
          "option": "P / Cinza",
          "price": 145.75990160499896,
          "stock": 25
        },
        {
          "id": "camiseta-dry-fit-shark-pro-m-azul",
          "name": "Tamanho",
          "option": "M / Azul",
          "price": 162.09772376685495,
          "stock": 68
        },
        {
          "id": "camiseta-dry-fit-shark-pro-g-branco",
          "name": "Tamanho",
          "option": "G / Branco",
          "price": 159.50543947476828,
          "stock": 13
        },
        {
          "id": "camiseta-dry-fit-shark-pro-gg-verde",
          "name": "Tamanho",
          "option": "GG / Verde",
          "price": 148.4879046776196,
          "stock": 48
        }
      ]
    },
    {
      "id": "app-93",
      "name": "Corta-vento Max Titanium",
      "slug": "corta-vento-max-titanium",
      "categorySlug": "roupas",
      "brand": "Max Titanium",
      "price": 214.66,
      "compareAt": 260.46,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "performance",
        "conforto"
      ],
      "variants": [
        {
          "id": "corta-vento-max-titanium-p-azul",
          "name": "Tamanho",
          "option": "P / Azul",
          "price": 222.82560579957368,
          "stock": 21
        },
        {
          "id": "corta-vento-max-titanium-m-preto",
          "name": "Tamanho",
          "option": "M / Preto",
          "price": 223.59672106990837,
          "stock": 43
        },
        {
          "id": "corta-vento-max-titanium-g-azul",
          "name": "Tamanho",
          "option": "G / Azul",
          "price": 219.2148955044681,
          "stock": 60
        },
        {
          "id": "corta-vento-max-titanium-gg-branco",
          "name": "Tamanho",
          "option": "GG / Branco",
          "price": 212.85397622282855,
          "stock": 57
        }
      ]
    },
    {
      "id": "app-94",
      "name": "Calça Legging Atlhetica",
      "slug": "calça-legging-atlhetica",
      "categorySlug": "roupas",
      "brand": "Atlhetica",
      "price": 187.3,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "fitness feminina"
      ],
      "variants": [
        {
          "id": "calça-legging-atlhetica-p-cinza",
          "name": "Tamanho",
          "option": "P / Cinza",
          "price": 196.75131027484318,
          "stock": 17
        },
        {
          "id": "calça-legging-atlhetica-m-azul",
          "name": "Tamanho",
          "option": "M / Azul",
          "price": 191.02387822353674,
          "stock": 59
        },
        {
          "id": "calça-legging-atlhetica-g-azul",
          "name": "Tamanho",
          "option": "G / Azul",
          "price": 183.27867426200984,
          "stock": 63
        },
        {
          "id": "calça-legging-atlhetica-gg-preto",
          "name": "Tamanho",
          "option": "GG / Preto",
          "price": 183.67245813211417,
          "stock": 30
        }
      ]
    },
    {
      "id": "app-95",
      "name": "Jaqueta Training Atlhetica",
      "slug": "jaqueta-training-atlhetica",
      "categorySlug": "roupas",
      "brand": "Atlhetica",
      "price": 157.33,
      "compareAt": 187.9,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "performance",
        "conforto"
      ],
      "variants": [
        {
          "id": "jaqueta-training-atlhetica-p-azul",
          "name": "Tamanho",
          "option": "P / Azul",
          "price": 164.6809250251747,
          "stock": 41
        },
        {
          "id": "jaqueta-training-atlhetica-m-preto",
          "name": "Tamanho",
          "option": "M / Preto",
          "price": 164.75197495061192,
          "stock": 38
        },
        {
          "id": "jaqueta-training-atlhetica-g-vermelho",
          "name": "Tamanho",
          "option": "G / Vermelho",
          "price": 165.33430670765566,
          "stock": 40
        },
        {
          "id": "jaqueta-training-atlhetica-gg-rosa",
          "name": "Tamanho",
          "option": "GG / Rosa",
          "price": 153.29297218006923,
          "stock": 40
        }
      ]
    },
    {
      "id": "app-96",
      "name": "Cropped Fitness Atlhetica",
      "slug": "cropped-fitness-atlhetica",
      "categorySlug": "roupas",
      "brand": "Atlhetica",
      "price": 210.81,
      "compareAt": 282.34,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "fitness feminina",
        "performance"
      ],
      "variants": [
        {
          "id": "cropped-fitness-atlhetica-p-branco",
          "name": "Tamanho",
          "option": "P / Branco",
          "price": 216.67025532622728,
          "stock": 27
        },
        {
          "id": "cropped-fitness-atlhetica-m-vermelho",
          "name": "Tamanho",
          "option": "M / Vermelho",
          "price": 216.3901323156988,
          "stock": 9
        },
        {
          "id": "cropped-fitness-atlhetica-g-preto",
          "name": "Tamanho",
          "option": "G / Preto",
          "price": 222.78456159160788,
          "stock": 62
        },
        {
          "id": "cropped-fitness-atlhetica-gg-vermelho",
          "name": "Tamanho",
          "option": "GG / Vermelho",
          "price": 212.48292514703985,
          "stock": 14
        }
      ]
    },
    {
      "id": "app-97",
      "name": "Top Dry Fit Dux",
      "slug": "top-dry-fit-dux",
      "categorySlug": "roupas",
      "brand": "Dux",
      "price": 175.86,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "fitness feminina",
        "performance"
      ],
      "variants": [
        {
          "id": "top-dry-fit-dux-p-preto",
          "name": "Tamanho",
          "option": "P / Preto",
          "price": 175.65801275543387,
          "stock": 17
        },
        {
          "id": "top-dry-fit-dux-m-preto",
          "name": "Tamanho",
          "option": "M / Preto",
          "price": 172.13144858949101,
          "stock": 47
        },
        {
          "id": "top-dry-fit-dux-g-verde",
          "name": "Tamanho",
          "option": "G / Verde",
          "price": 180.39656439386619,
          "stock": 53
        },
        {
          "id": "top-dry-fit-dux-gg-cinza",
          "name": "Tamanho",
          "option": "GG / Cinza",
          "price": 176.71627917873337,
          "stock": 46
        }
      ]
    },
    {
      "id": "app-98",
      "name": "Legging Power Max Titanium",
      "slug": "legging-power-max-titanium",
      "categorySlug": "roupas",
      "brand": "Max Titanium",
      "price": 113.23,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "fitness feminina",
        "performance"
      ],
      "variants": [
        {
          "id": "legging-power-max-titanium-p-vermelho",
          "name": "Tamanho",
          "option": "P / Vermelho",
          "price": 109.01521231022276,
          "stock": 52
        },
        {
          "id": "legging-power-max-titanium-m-preto",
          "name": "Tamanho",
          "option": "M / Preto",
          "price": 122.58026927132036,
          "stock": 49
        },
        {
          "id": "legging-power-max-titanium-g-branco",
          "name": "Tamanho",
          "option": "G / Branco",
          "price": 117.15403411101639,
          "stock": 63
        },
        {
          "id": "legging-power-max-titanium-gg-azul",
          "name": "Tamanho",
          "option": "GG / Azul",
          "price": 114.97125894999496,
          "stock": 64
        }
      ]
    },
    {
      "id": "app-99",
      "name": "Shorts 2 em 1 Atlhetica",
      "slug": "shorts-2-em-1-atlhetica",
      "categorySlug": "roupas",
      "brand": "Atlhetica",
      "price": 131.07,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "fitness feminina",
        "performance"
      ],
      "variants": [
        {
          "id": "shorts-2-em-1-atlhetica-p-vermelho",
          "name": "Tamanho",
          "option": "P / Vermelho",
          "price": 132.55781370470692,
          "stock": 14
        },
        {
          "id": "shorts-2-em-1-atlhetica-m-cinza",
          "name": "Tamanho",
          "option": "M / Cinza",
          "price": 132.75175211269723,
          "stock": 50
        },
        {
          "id": "shorts-2-em-1-atlhetica-g-cinza",
          "name": "Tamanho",
          "option": "G / Cinza",
          "price": 131.80741842183966,
          "stock": 17
        },
        {
          "id": "shorts-2-em-1-atlhetica-gg-verde",
          "name": "Tamanho",
          "option": "GG / Verde",
          "price": 141.68373064321892,
          "stock": 12
        }
      ]
    },
    {
      "id": "app-100",
      "name": "Conjunto Feminino Body Action",
      "slug": "conjunto-feminino-body-action-2",
      "categorySlug": "roupas",
      "brand": "Body Action",
      "price": 193.77,
      "compareAt": 222.26,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "fitness feminina",
        "performance"
      ],
      "variants": [
        {
          "id": "conjunto-feminino-body-action-p-verde",
          "name": "Tamanho",
          "option": "P / Verde",
          "price": 194.47764346876627,
          "stock": 16
        },
        {
          "id": "conjunto-feminino-body-action-m-rosa",
          "name": "Tamanho",
          "option": "M / Rosa",
          "price": 188.84965760347524,
          "stock": 69
        },
        {
          "id": "conjunto-feminino-body-action-g-rosa",
          "name": "Tamanho",
          "option": "G / Rosa",
          "price": 197.88030086825512,
          "stock": 50
        },
        {
          "id": "conjunto-feminino-body-action-gg-preto",
          "name": "Tamanho",
          "option": "GG / Preto",
          "price": 195.16455539259886,
          "stock": 63
        }
      ]
    },
    {
      "id": "app-101",
      "name": "Regata Dry Fit Dux",
      "slug": "regata-dry-fit-dux",
      "categorySlug": "roupas",
      "brand": "Dux",
      "price": 199.21,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "performance"
      ],
      "variants": [
        {
          "id": "regata-dry-fit-dux-p-cinza",
          "name": "Tamanho",
          "option": "P / Cinza",
          "price": 204.0173816420442,
          "stock": 30
        },
        {
          "id": "regata-dry-fit-dux-m-preto",
          "name": "Tamanho",
          "option": "M / Preto",
          "price": 203.6125333310174,
          "stock": 21
        },
        {
          "id": "regata-dry-fit-dux-g-azul",
          "name": "Tamanho",
          "option": "G / Azul",
          "price": 205.03125345378675,
          "stock": 22
        },
        {
          "id": "regata-dry-fit-dux-gg-branco",
          "name": "Tamanho",
          "option": "GG / Branco",
          "price": 195.1579308746908,
          "stock": 62
        }
      ]
    },
    {
      "id": "app-102",
      "name": "Camiseta Dry Fit Max Titanium",
      "slug": "camiseta-dry-fit-max-titanium",
      "categorySlug": "roupas",
      "brand": "Max Titanium",
      "price": 124.13,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "performance"
      ],
      "variants": [
        {
          "id": "camiseta-dry-fit-max-titanium-p-rosa",
          "name": "Tamanho",
          "option": "P / Rosa",
          "price": 122.20086369790126,
          "stock": 35
        },
        {
          "id": "camiseta-dry-fit-max-titanium-m-branco",
          "name": "Tamanho",
          "option": "M / Branco",
          "price": 128.2273826314646,
          "stock": 57
        },
        {
          "id": "camiseta-dry-fit-max-titanium-g-branco",
          "name": "Tamanho",
          "option": "G / Branco",
          "price": 129.32102849844335,
          "stock": 51
        },
        {
          "id": "camiseta-dry-fit-max-titanium-gg-verde",
          "name": "Tamanho",
          "option": "GG / Verde",
          "price": 128.15131559306806,
          "stock": 46
        }
      ]
    },
    {
      "id": "app-103",
      "name": "Corta-vento Shark Pro",
      "slug": "corta-vento-shark-pro",
      "categorySlug": "roupas",
      "brand": "Shark Pro",
      "price": 73.34,
      "compareAt": 97.8,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "performance",
        "conforto"
      ],
      "variants": [
        {
          "id": "corta-vento-shark-pro-p-cinza",
          "name": "Tamanho",
          "option": "P / Cinza",
          "price": 73.65842157326567,
          "stock": 19
        },
        {
          "id": "corta-vento-shark-pro-m-branco",
          "name": "Tamanho",
          "option": "M / Branco",
          "price": 69.91852682615652,
          "stock": 50
        },
        {
          "id": "corta-vento-shark-pro-g-vermelho",
          "name": "Tamanho",
          "option": "G / Vermelho",
          "price": 68.59253758247006,
          "stock": 55
        },
        {
          "id": "corta-vento-shark-pro-gg-verde",
          "name": "Tamanho",
          "option": "GG / Verde",
          "price": 84.83258573764435,
          "stock": 13
        }
      ]
    },
    {
      "id": "app-104",
      "name": "Calça Legging Max Titanium",
      "slug": "calça-legging-max-titanium",
      "categorySlug": "roupas",
      "brand": "Max Titanium",
      "price": 101.27,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "fitness feminina"
      ],
      "variants": [
        {
          "id": "calça-legging-max-titanium-p-cinza",
          "name": "Tamanho",
          "option": "P / Cinza",
          "price": 98.10336696521159,
          "stock": 27
        },
        {
          "id": "calça-legging-max-titanium-m-verde",
          "name": "Tamanho",
          "option": "M / Verde",
          "price": 101.10889205741168,
          "stock": 68
        },
        {
          "id": "calça-legging-max-titanium-g-rosa",
          "name": "Tamanho",
          "option": "G / Rosa",
          "price": 106.00202789969165,
          "stock": 64
        },
        {
          "id": "calça-legging-max-titanium-gg-preto",
          "name": "Tamanho",
          "option": "GG / Preto",
          "price": 98.07043826128078,
          "stock": 56
        }
      ]
    },
    {
      "id": "app-105",
      "name": "Jaqueta Training Max Titanium",
      "slug": "jaqueta-training-max-titanium",
      "categorySlug": "roupas",
      "brand": "Max Titanium",
      "price": 76.46,
      "compareAt": 95.12,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "performance",
        "conforto"
      ],
      "variants": [
        {
          "id": "jaqueta-training-max-titanium-p-vermelho",
          "name": "Tamanho",
          "option": "P / Vermelho",
          "price": 79.20191068803793,
          "stock": 36
        },
        {
          "id": "jaqueta-training-max-titanium-m-vermelho",
          "name": "Tamanho",
          "option": "M / Vermelho",
          "price": 75.37700319856584,
          "stock": 56
        },
        {
          "id": "jaqueta-training-max-titanium-g-rosa",
          "name": "Tamanho",
          "option": "G / Rosa",
          "price": 72.50871514598363,
          "stock": 35
        },
        {
          "id": "jaqueta-training-max-titanium-gg-preto",
          "name": "Tamanho",
          "option": "GG / Preto",
          "price": 75.55843646144808,
          "stock": 51
        }
      ]
    },
    {
      "id": "app-106",
      "name": "Cropped Fitness Max Titanium",
      "slug": "cropped-fitness-max-titanium",
      "categorySlug": "roupas",
      "brand": "Max Titanium",
      "price": 141.99,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "fitness feminina",
        "performance"
      ],
      "variants": [
        {
          "id": "cropped-fitness-max-titanium-p-preto",
          "name": "Tamanho",
          "option": "P / Preto",
          "price": 139.95933183904546,
          "stock": 46
        },
        {
          "id": "cropped-fitness-max-titanium-m-preto",
          "name": "Tamanho",
          "option": "M / Preto",
          "price": 136.1283675461979,
          "stock": 27
        },
        {
          "id": "cropped-fitness-max-titanium-g-azul",
          "name": "Tamanho",
          "option": "G / Azul",
          "price": 149.80229149155488,
          "stock": 56
        },
        {
          "id": "cropped-fitness-max-titanium-gg-cinza",
          "name": "Tamanho",
          "option": "GG / Cinza",
          "price": 141.2000483619139,
          "stock": 15
        }
      ]
    },
    {
      "id": "app-107",
      "name": "Top Dry Fit Body Action",
      "slug": "top-dry-fit-body-action",
      "categorySlug": "roupas",
      "brand": "Body Action",
      "price": 143.61,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "fitness feminina",
        "performance"
      ],
      "variants": [
        {
          "id": "top-dry-fit-body-action-p-azul",
          "name": "Tamanho",
          "option": "P / Azul",
          "price": 144.45373402287427,
          "stock": 53
        },
        {
          "id": "top-dry-fit-body-action-m-azul",
          "name": "Tamanho",
          "option": "M / Azul",
          "price": 146.61472223801184,
          "stock": 61
        },
        {
          "id": "top-dry-fit-body-action-g-verde",
          "name": "Tamanho",
          "option": "G / Verde",
          "price": 152.12160335820175,
          "stock": 12
        },
        {
          "id": "top-dry-fit-body-action-gg-vermelho",
          "name": "Tamanho",
          "option": "GG / Vermelho",
          "price": 153.1217585164066,
          "stock": 10
        }
      ]
    },
    {
      "id": "app-108",
      "name": "Legging Power Dux",
      "slug": "legging-power-dux",
      "categorySlug": "roupas",
      "brand": "Dux",
      "price": 71.81,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "fitness feminina",
        "performance"
      ],
      "variants": [
        {
          "id": "legging-power-dux-p-branco",
          "name": "Tamanho",
          "option": "P / Branco",
          "price": 71.44509135219205,
          "stock": 35
        },
        {
          "id": "legging-power-dux-m-rosa",
          "name": "Tamanho",
          "option": "M / Rosa",
          "price": 73.08961192109422,
          "stock": 48
        },
        {
          "id": "legging-power-dux-g-vermelho",
          "name": "Tamanho",
          "option": "G / Vermelho",
          "price": 71.02127370054365,
          "stock": 33
        },
        {
          "id": "legging-power-dux-gg-preto",
          "name": "Tamanho",
          "option": "GG / Preto",
          "price": 83.20159443859627,
          "stock": 18
        }
      ]
    },
    {
      "id": "app-109",
      "name": "Shorts 2 em 1 Max Titanium",
      "slug": "shorts-2-em-1-max-titanium",
      "categorySlug": "roupas",
      "brand": "Max Titanium",
      "price": 138.01,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "fitness feminina",
        "performance"
      ],
      "variants": [
        {
          "id": "shorts-2-em-1-max-titanium-p-cinza",
          "name": "Tamanho",
          "option": "P / Cinza",
          "price": 133.59633786336192,
          "stock": 62
        },
        {
          "id": "shorts-2-em-1-max-titanium-m-preto",
          "name": "Tamanho",
          "option": "M / Preto",
          "price": 136.3896965468092,
          "stock": 45
        },
        {
          "id": "shorts-2-em-1-max-titanium-g-vermelho",
          "name": "Tamanho",
          "option": "G / Vermelho",
          "price": 141.44132577401137,
          "stock": 33
        },
        {
          "id": "shorts-2-em-1-max-titanium-gg-branco",
          "name": "Tamanho",
          "option": "GG / Branco",
          "price": 137.5949421130455,
          "stock": 29
        }
      ]
    },
    {
      "id": "app-110",
      "name": "Conjunto Feminino Atlhetica",
      "slug": "conjunto-feminino-atlhetica",
      "categorySlug": "roupas",
      "brand": "Atlhetica",
      "price": 118.96,
      "compareAt": 150.24,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "fitness feminina",
        "performance"
      ],
      "variants": [
        {
          "id": "conjunto-feminino-atlhetica-p-preto",
          "name": "Tamanho",
          "option": "P / Preto",
          "price": 122.51088677390766,
          "stock": 20
        },
        {
          "id": "conjunto-feminino-atlhetica-m-branco",
          "name": "Tamanho",
          "option": "M / Branco",
          "price": 119.24875477850284,
          "stock": 54
        },
        {
          "id": "conjunto-feminino-atlhetica-g-branco",
          "name": "Tamanho",
          "option": "G / Branco",
          "price": 124.57797357105214,
          "stock": 17
        },
        {
          "id": "conjunto-feminino-atlhetica-gg-azul",
          "name": "Tamanho",
          "option": "GG / Azul",
          "price": 114.81048149999972,
          "stock": 24
        }
      ]
    },
    {
      "id": "app-111",
      "name": "Regata Dry Fit Atlhetica",
      "slug": "regata-dry-fit-atlhetica-2",
      "categorySlug": "roupas",
      "brand": "Atlhetica",
      "price": 95.02,
      "compareAt": 126.62,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "performance"
      ],
      "variants": [
        {
          "id": "regata-dry-fit-atlhetica-p-preto",
          "name": "Tamanho",
          "option": "P / Preto",
          "price": 92.20863032105012,
          "stock": 57
        },
        {
          "id": "regata-dry-fit-atlhetica-m-verde",
          "name": "Tamanho",
          "option": "M / Verde",
          "price": 97.91410645031299,
          "stock": 56
        },
        {
          "id": "regata-dry-fit-atlhetica-g-rosa",
          "name": "Tamanho",
          "option": "G / Rosa",
          "price": 102.69778869293947,
          "stock": 36
        },
        {
          "id": "regata-dry-fit-atlhetica-gg-verde",
          "name": "Tamanho",
          "option": "GG / Verde",
          "price": 105.65477665094187,
          "stock": 44
        }
      ]
    },
    {
      "id": "app-112",
      "name": "Camiseta Dry Fit Max Titanium",
      "slug": "camiseta-dry-fit-max-titanium-2",
      "categorySlug": "roupas",
      "brand": "Max Titanium",
      "price": 117.48,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "performance"
      ],
      "variants": [
        {
          "id": "camiseta-dry-fit-max-titanium-p-cinza",
          "name": "Tamanho",
          "option": "P / Cinza",
          "price": 114.1972332250754,
          "stock": 12
        },
        {
          "id": "camiseta-dry-fit-max-titanium-m-vermelho",
          "name": "Tamanho",
          "option": "M / Vermelho",
          "price": 119.43974514905312,
          "stock": 27
        },
        {
          "id": "camiseta-dry-fit-max-titanium-g-branco",
          "name": "Tamanho",
          "option": "G / Branco",
          "price": 116.42412601475087,
          "stock": 11
        },
        {
          "id": "camiseta-dry-fit-max-titanium-gg-cinza",
          "name": "Tamanho",
          "option": "GG / Cinza",
          "price": 120.61206393521601,
          "stock": 27
        }
      ]
    },
    {
      "id": "app-113",
      "name": "Corta-vento Dux",
      "slug": "corta-vento-dux",
      "categorySlug": "roupas",
      "brand": "Dux",
      "price": 136.79,
      "compareAt": 185.06,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "performance",
        "conforto"
      ],
      "variants": [
        {
          "id": "corta-vento-dux-p-preto",
          "name": "Tamanho",
          "option": "P / Preto",
          "price": 142.39399645236506,
          "stock": 70
        },
        {
          "id": "corta-vento-dux-m-branco",
          "name": "Tamanho",
          "option": "M / Branco",
          "price": 132.41533707223945,
          "stock": 46
        },
        {
          "id": "corta-vento-dux-g-rosa",
          "name": "Tamanho",
          "option": "G / Rosa",
          "price": 137.71068457848435,
          "stock": 45
        },
        {
          "id": "corta-vento-dux-gg-rosa",
          "name": "Tamanho",
          "option": "GG / Rosa",
          "price": 147.9661665810102,
          "stock": 55
        }
      ]
    },
    {
      "id": "app-114",
      "name": "Calça Legging Body Action",
      "slug": "calça-legging-body-action",
      "categorySlug": "roupas",
      "brand": "Body Action",
      "price": 136.46,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "fitness feminina"
      ],
      "variants": [
        {
          "id": "calça-legging-body-action-p-verde",
          "name": "Tamanho",
          "option": "P / Verde",
          "price": 133.84831037124607,
          "stock": 46
        },
        {
          "id": "calça-legging-body-action-m-vermelho",
          "name": "Tamanho",
          "option": "M / Vermelho",
          "price": 139.4846114337109,
          "stock": 69
        },
        {
          "id": "calça-legging-body-action-g-preto",
          "name": "Tamanho",
          "option": "G / Preto",
          "price": 138.56941596227165,
          "stock": 59
        },
        {
          "id": "calça-legging-body-action-gg-branco",
          "name": "Tamanho",
          "option": "GG / Branco",
          "price": 136.64187996508883,
          "stock": 53
        }
      ]
    },
    {
      "id": "app-115",
      "name": "Jaqueta Training Body Action",
      "slug": "jaqueta-training-body-action",
      "categorySlug": "roupas",
      "brand": "Body Action",
      "price": 144.68,
      "compareAt": 172.08,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "performance",
        "conforto"
      ],
      "variants": [
        {
          "id": "jaqueta-training-body-action-p-vermelho",
          "name": "Tamanho",
          "option": "P / Vermelho",
          "price": 156.51774840764398,
          "stock": 41
        },
        {
          "id": "jaqueta-training-body-action-m-rosa",
          "name": "Tamanho",
          "option": "M / Rosa",
          "price": 149.65649731380816,
          "stock": 31
        },
        {
          "id": "jaqueta-training-body-action-g-cinza",
          "name": "Tamanho",
          "option": "G / Cinza",
          "price": 155.2028622041053,
          "stock": 32
        },
        {
          "id": "jaqueta-training-body-action-gg-vermelho",
          "name": "Tamanho",
          "option": "GG / Vermelho",
          "price": 152.62036619432723,
          "stock": 51
        }
      ]
    },
    {
      "id": "app-116",
      "name": "Cropped Fitness Max Titanium",
      "slug": "cropped-fitness-max-titanium-2",
      "categorySlug": "roupas",
      "brand": "Max Titanium",
      "price": 76.85,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "fitness feminina",
        "performance"
      ],
      "variants": [
        {
          "id": "cropped-fitness-max-titanium-p-cinza",
          "name": "Tamanho",
          "option": "P / Cinza",
          "price": 72.0364133770349,
          "stock": 14
        },
        {
          "id": "cropped-fitness-max-titanium-m-rosa",
          "name": "Tamanho",
          "option": "M / Rosa",
          "price": 83.06082820712146,
          "stock": 26
        },
        {
          "id": "cropped-fitness-max-titanium-g-cinza",
          "name": "Tamanho",
          "option": "G / Cinza",
          "price": 83.87720579004431,
          "stock": 50
        },
        {
          "id": "cropped-fitness-max-titanium-gg-rosa",
          "name": "Tamanho",
          "option": "GG / Rosa",
          "price": 86.5690339170897,
          "stock": 29
        }
      ]
    },
    {
      "id": "app-117",
      "name": "Top Dry Fit Body Action",
      "slug": "top-dry-fit-body-action-2",
      "categorySlug": "roupas",
      "brand": "Body Action",
      "price": 156.41,
      "compareAt": 190.5,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "fitness feminina",
        "performance"
      ],
      "variants": [
        {
          "id": "top-dry-fit-body-action-p-verde",
          "name": "Tamanho",
          "option": "P / Verde",
          "price": 162.98263933061386,
          "stock": 33
        },
        {
          "id": "top-dry-fit-body-action-m-azul",
          "name": "Tamanho",
          "option": "M / Azul",
          "price": 161.12074210672836,
          "stock": 68
        },
        {
          "id": "top-dry-fit-body-action-g-preto",
          "name": "Tamanho",
          "option": "G / Preto",
          "price": 155.9824739734873,
          "stock": 32
        },
        {
          "id": "top-dry-fit-body-action-gg-verde",
          "name": "Tamanho",
          "option": "GG / Verde",
          "price": 164.65991524154379,
          "stock": 60
        }
      ]
    },
    {
      "id": "app-118",
      "name": "Legging Power Atlhetica",
      "slug": "legging-power-atlhetica",
      "categorySlug": "roupas",
      "brand": "Atlhetica",
      "price": 169.52,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "fitness feminina",
        "performance"
      ],
      "variants": [
        {
          "id": "legging-power-atlhetica-p-verde",
          "name": "Tamanho",
          "option": "P / Verde",
          "price": 181.46895403338567,
          "stock": 66
        },
        {
          "id": "legging-power-atlhetica-m-rosa",
          "name": "Tamanho",
          "option": "M / Rosa",
          "price": 165.2021533711884,
          "stock": 50
        },
        {
          "id": "legging-power-atlhetica-g-vermelho",
          "name": "Tamanho",
          "option": "G / Vermelho",
          "price": 172.67279275561054,
          "stock": 9
        },
        {
          "id": "legging-power-atlhetica-gg-cinza",
          "name": "Tamanho",
          "option": "GG / Cinza",
          "price": 169.07958926114986,
          "stock": 68
        }
      ]
    },
    {
      "id": "app-119",
      "name": "Shorts 2 em 1 Atlhetica",
      "slug": "shorts-2-em-1-atlhetica-2",
      "categorySlug": "roupas",
      "brand": "Atlhetica",
      "price": 120.26,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "fitness feminina",
        "performance"
      ],
      "variants": [
        {
          "id": "shorts-2-em-1-atlhetica-p-azul",
          "name": "Tamanho",
          "option": "P / Azul",
          "price": 118.33777483760997,
          "stock": 16
        },
        {
          "id": "shorts-2-em-1-atlhetica-m-azul",
          "name": "Tamanho",
          "option": "M / Azul",
          "price": 115.64897151741577,
          "stock": 62
        },
        {
          "id": "shorts-2-em-1-atlhetica-g-branco",
          "name": "Tamanho",
          "option": "G / Branco",
          "price": 116.0805337460221,
          "stock": 57
        },
        {
          "id": "shorts-2-em-1-atlhetica-gg-rosa",
          "name": "Tamanho",
          "option": "GG / Rosa",
          "price": 129.292156879422,
          "stock": 64
        }
      ]
    },
    {
      "id": "app-120",
      "name": "Conjunto Feminino Max Titanium",
      "slug": "conjunto-feminino-max-titanium",
      "categorySlug": "roupas",
      "brand": "Max Titanium",
      "price": 74.66,
      "compareAt": 99.64,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "fitness feminina",
        "performance"
      ],
      "variants": [
        {
          "id": "conjunto-feminino-max-titanium-p-azul",
          "name": "Tamanho",
          "option": "P / Azul",
          "price": 79.41043593928931,
          "stock": 17
        },
        {
          "id": "conjunto-feminino-max-titanium-m-azul",
          "name": "Tamanho",
          "option": "M / Azul",
          "price": 71.91522740903653,
          "stock": 52
        },
        {
          "id": "conjunto-feminino-max-titanium-g-branco",
          "name": "Tamanho",
          "option": "G / Branco",
          "price": 79.90532863917042,
          "stock": 65
        },
        {
          "id": "conjunto-feminino-max-titanium-gg-azul",
          "name": "Tamanho",
          "option": "GG / Azul",
          "price": 81.64129396049768,
          "stock": 10
        }
      ]
    },
    {
      "id": "app-121",
      "name": "Regata Dry Fit Dux",
      "slug": "regata-dry-fit-dux-2",
      "categorySlug": "roupas",
      "brand": "Dux",
      "price": 123.64,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "performance"
      ],
      "variants": [
        {
          "id": "regata-dry-fit-dux-p-vermelho",
          "name": "Tamanho",
          "option": "P / Vermelho",
          "price": 128.63071759826468,
          "stock": 56
        },
        {
          "id": "regata-dry-fit-dux-m-verde",
          "name": "Tamanho",
          "option": "M / Verde",
          "price": 131.74840646982716,
          "stock": 22
        },
        {
          "id": "regata-dry-fit-dux-g-rosa",
          "name": "Tamanho",
          "option": "G / Rosa",
          "price": 121.94503295041935,
          "stock": 69
        },
        {
          "id": "regata-dry-fit-dux-gg-branco",
          "name": "Tamanho",
          "option": "GG / Branco",
          "price": 131.7586643126777,
          "stock": 65
        }
      ]
    },
    {
      "id": "app-122",
      "name": "Camiseta Dry Fit Atlhetica",
      "slug": "camiseta-dry-fit-atlhetica",
      "categorySlug": "roupas",
      "brand": "Atlhetica",
      "price": 124.18,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "performance"
      ],
      "variants": [
        {
          "id": "camiseta-dry-fit-atlhetica-p-vermelho",
          "name": "Tamanho",
          "option": "P / Vermelho",
          "price": 126.49023961193781,
          "stock": 26
        },
        {
          "id": "camiseta-dry-fit-atlhetica-m-branco",
          "name": "Tamanho",
          "option": "M / Branco",
          "price": 125.0537038154328,
          "stock": 41
        },
        {
          "id": "camiseta-dry-fit-atlhetica-g-vermelho",
          "name": "Tamanho",
          "option": "G / Vermelho",
          "price": 135.57282675770705,
          "stock": 60
        },
        {
          "id": "camiseta-dry-fit-atlhetica-gg-azul",
          "name": "Tamanho",
          "option": "GG / Azul",
          "price": 132.60266603472786,
          "stock": 16
        }
      ]
    },
    {
      "id": "app-123",
      "name": "Corta-vento Shark Pro",
      "slug": "corta-vento-shark-pro-2",
      "categorySlug": "roupas",
      "brand": "Shark Pro",
      "price": 76.83,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "performance",
        "conforto"
      ],
      "variants": [
        {
          "id": "corta-vento-shark-pro-p-cinza",
          "name": "Tamanho",
          "option": "P / Cinza",
          "price": 80.81173341763976,
          "stock": 14
        },
        {
          "id": "corta-vento-shark-pro-m-verde",
          "name": "Tamanho",
          "option": "M / Verde",
          "price": 86.0560609812019,
          "stock": 62
        },
        {
          "id": "corta-vento-shark-pro-g-preto",
          "name": "Tamanho",
          "option": "G / Preto",
          "price": 75.96113425306791,
          "stock": 56
        },
        {
          "id": "corta-vento-shark-pro-gg-azul",
          "name": "Tamanho",
          "option": "GG / Azul",
          "price": 75.74024339264442,
          "stock": 65
        }
      ]
    },
    {
      "id": "app-124",
      "name": "Calça Legging Max Titanium",
      "slug": "calça-legging-max-titanium-2",
      "categorySlug": "roupas",
      "brand": "Max Titanium",
      "price": 91.1,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "fitness feminina"
      ],
      "variants": [
        {
          "id": "calça-legging-max-titanium-p-azul",
          "name": "Tamanho",
          "option": "P / Azul",
          "price": 99.80065860539901,
          "stock": 64
        },
        {
          "id": "calça-legging-max-titanium-m-cinza",
          "name": "Tamanho",
          "option": "M / Cinza",
          "price": 101.84849468827295,
          "stock": 34
        },
        {
          "id": "calça-legging-max-titanium-g-preto",
          "name": "Tamanho",
          "option": "G / Preto",
          "price": 92.23617137846446,
          "stock": 31
        },
        {
          "id": "calça-legging-max-titanium-gg-azul",
          "name": "Tamanho",
          "option": "GG / Azul",
          "price": 92.05099012480271,
          "stock": 13
        }
      ]
    },
    {
      "id": "app-125",
      "name": "Jaqueta Training Shark Pro",
      "slug": "jaqueta-training-shark-pro",
      "categorySlug": "roupas",
      "brand": "Shark Pro",
      "price": 102.68,
      "compareAt": 117.85,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "performance",
        "conforto"
      ],
      "variants": [
        {
          "id": "jaqueta-training-shark-pro-p-verde",
          "name": "Tamanho",
          "option": "P / Verde",
          "price": 108.37929231729528,
          "stock": 58
        },
        {
          "id": "jaqueta-training-shark-pro-m-azul",
          "name": "Tamanho",
          "option": "M / Azul",
          "price": 99.1567925790657,
          "stock": 26
        },
        {
          "id": "jaqueta-training-shark-pro-g-branco",
          "name": "Tamanho",
          "option": "G / Branco",
          "price": 105.18418879486096,
          "stock": 61
        },
        {
          "id": "jaqueta-training-shark-pro-gg-azul",
          "name": "Tamanho",
          "option": "GG / Azul",
          "price": 110.33914078578094,
          "stock": 38
        }
      ]
    },
    {
      "id": "app-126",
      "name": "Cropped Fitness Dux",
      "slug": "cropped-fitness-dux",
      "categorySlug": "roupas",
      "brand": "Dux",
      "price": 161.3,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "fitness feminina",
        "performance"
      ],
      "variants": [
        {
          "id": "cropped-fitness-dux-p-preto",
          "name": "Tamanho",
          "option": "P / Preto",
          "price": 159.90663071186682,
          "stock": 61
        },
        {
          "id": "cropped-fitness-dux-m-azul",
          "name": "Tamanho",
          "option": "M / Azul",
          "price": 165.17847641798906,
          "stock": 54
        },
        {
          "id": "cropped-fitness-dux-g-rosa",
          "name": "Tamanho",
          "option": "G / Rosa",
          "price": 164.79988710596103,
          "stock": 15
        },
        {
          "id": "cropped-fitness-dux-gg-branco",
          "name": "Tamanho",
          "option": "GG / Branco",
          "price": 160.48582840470615,
          "stock": 27
        }
      ]
    },
    {
      "id": "app-127",
      "name": "Top Dry Fit Body Action",
      "slug": "top-dry-fit-body-action-3",
      "categorySlug": "roupas",
      "brand": "Body Action",
      "price": 76.16,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "fitness feminina",
        "performance"
      ],
      "variants": [
        {
          "id": "top-dry-fit-body-action-p-branco",
          "name": "Tamanho",
          "option": "P / Branco",
          "price": 81.37059023013744,
          "stock": 12
        },
        {
          "id": "top-dry-fit-body-action-m-preto",
          "name": "Tamanho",
          "option": "M / Preto",
          "price": 85.22037897089604,
          "stock": 39
        },
        {
          "id": "top-dry-fit-body-action-g-rosa",
          "name": "Tamanho",
          "option": "G / Rosa",
          "price": 79.8089681176531,
          "stock": 48
        },
        {
          "id": "top-dry-fit-body-action-gg-rosa",
          "name": "Tamanho",
          "option": "GG / Rosa",
          "price": 80.5108542355514,
          "stock": 53
        }
      ]
    },
    {
      "id": "app-128",
      "name": "Legging Power Atlhetica",
      "slug": "legging-power-atlhetica-2",
      "categorySlug": "roupas",
      "brand": "Atlhetica",
      "price": 112.69,
      "compareAt": 137.35,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "fitness feminina",
        "performance"
      ],
      "variants": [
        {
          "id": "legging-power-atlhetica-p-rosa",
          "name": "Tamanho",
          "option": "P / Rosa",
          "price": 114.18821671375372,
          "stock": 50
        },
        {
          "id": "legging-power-atlhetica-m-verde",
          "name": "Tamanho",
          "option": "M / Verde",
          "price": 108.23105118977071,
          "stock": 70
        },
        {
          "id": "legging-power-atlhetica-g-cinza",
          "name": "Tamanho",
          "option": "G / Cinza",
          "price": 107.90822781235923,
          "stock": 41
        },
        {
          "id": "legging-power-atlhetica-gg-rosa",
          "name": "Tamanho",
          "option": "GG / Rosa",
          "price": 115.82189853843616,
          "stock": 40
        }
      ]
    },
    {
      "id": "app-129",
      "name": "Shorts 2 em 1 Max Titanium",
      "slug": "shorts-2-em-1-max-titanium-2",
      "categorySlug": "roupas",
      "brand": "Max Titanium",
      "price": 72.05,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "fitness feminina",
        "performance"
      ],
      "variants": [
        {
          "id": "shorts-2-em-1-max-titanium-p-preto",
          "name": "Tamanho",
          "option": "P / Preto",
          "price": 77.49207424643534,
          "stock": 70
        },
        {
          "id": "shorts-2-em-1-max-titanium-m-cinza",
          "name": "Tamanho",
          "option": "M / Cinza",
          "price": 70.61570469924582,
          "stock": 9
        },
        {
          "id": "shorts-2-em-1-max-titanium-g-cinza",
          "name": "Tamanho",
          "option": "G / Cinza",
          "price": 80.24336029303127,
          "stock": 30
        },
        {
          "id": "shorts-2-em-1-max-titanium-gg-azul",
          "name": "Tamanho",
          "option": "GG / Azul",
          "price": 79.24293838611155,
          "stock": 48
        }
      ]
    },
    {
      "id": "app-130",
      "name": "Conjunto Feminino Body Action",
      "slug": "conjunto-feminino-body-action-3",
      "categorySlug": "roupas",
      "brand": "Body Action",
      "price": 184.73,
      "compareAt": null,
      "images": [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60"
      ],
      "description": "Peça confortável e versátil para treinos e rotina ativa.",
      "tags": [
        "fitness feminina",
        "performance"
      ],
      "variants": [
        {
          "id": "conjunto-feminino-body-action-p-cinza",
          "name": "Tamanho",
          "option": "P / Cinza",
          "price": 181.13137261746854,
          "stock": 30
        },
        {
          "id": "conjunto-feminino-body-action-m-rosa",
          "name": "Tamanho",
          "option": "M / Rosa",
          "price": 184.8238506472346,
          "stock": 49
        },
        {
          "id": "conjunto-feminino-body-action-g-azul",
          "name": "Tamanho",
          "option": "G / Azul",
          "price": 193.67690582174484,
          "stock": 51
        },
        {
          "id": "conjunto-feminino-body-action-gg-vermelho",
          "name": "Tamanho",
          "option": "GG / Vermelho",
          "price": 196.38474534419927,
          "stock": 38
        }
      ]
    }
  ],
  "maisVendidos": [
    "whey-protein-concentrado-max-titanium-300g",
    "boné-esportivo-under-labz",
    "boné-esportivo-atlhetica",
    "whey-protein-concentrado-shark-pro-1kg",
    "colágeno-hidrolisado-integralmedica-1kg",
    "barra-proteica-atlhetica-900g",
    "cropped-fitness-max-titanium",
    "corta-vento-dux",
    "whey-protein-concentrado-shark-pro-500g",
    "coqueteleira-atlhetica",
    "hydrolite-isotônico-dux-1kg",
    "hydrolite-isotônico-shark-pro-500g"
  ],
  "novidades": [
    "shorts-2-em-1-atlhetica-2",
    "conjunto-feminino-max-titanium",
    "regata-dry-fit-dux-2",
    "camiseta-dry-fit-atlhetica",
    "corta-vento-shark-pro-2",
    "calça-legging-max-titanium-2",
    "jaqueta-training-shark-pro",
    "cropped-fitness-dux",
    "top-dry-fit-body-action-3",
    "legging-power-atlhetica-2",
    "shorts-2-em-1-max-titanium-2",
    "conjunto-feminino-body-action-3"
  ],
  "ofertas": [
    "whey-protein-concentrado-max-titanium-300g",
    "whey-protein-isolado-integralmedica-1kg",
    "creatina-monohidratada-dux-300g",
    "cafeína-concentrada-shark-pro-900g",
    "multivitamínico-completo-shark-pro-500g",
    "barra-proteica-dux-2kg",
    "termogênico-clean-body-action-300g",
    "refeição-líquida-shark-pro-1kg",
    "pré-treino-power-max-titanium-2kg",
    "intra-workout-hidratante-atlhetica-900g",
    "barra-proteica-atlhetica-900g",
    "termogênico-clean-dux-500g",
    "caseína-night-dux-1kg",
    "whey-protein-concentrado-shark-pro-1kg",
    "whey-protein-isolado-growth-2kg",
    "creatina-monohidratada-growth-300g"
  ],
  "colecaoFeminina": [
    "cropped-fitness-shark-pro",
    "top-dry-fit-shark-pro",
    "legging-power-body-action",
    "shorts-2-em-1-body-action",
    "conjunto-feminino-body-action",
    "calça-legging-atlhetica",
    "cropped-fitness-atlhetica",
    "top-dry-fit-dux",
    "legging-power-max-titanium",
    "shorts-2-em-1-atlhetica",
    "conjunto-feminino-body-action-2",
    "calça-legging-max-titanium",
    "cropped-fitness-max-titanium",
    "top-dry-fit-body-action",
    "legging-power-dux",
    "shorts-2-em-1-max-titanium"
  ]
} as const
