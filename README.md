# Dr. Músculo – Loja de suplementos

Este repositório contém o código‑fonte de um e‑commerce completo para a loja **Dr. Músculo**. Ele foi desenvolvido em **Next.js 14** (App Router) com **TypeScript**, **Tailwind CSS**, **Prisma** (PostgreSQL), **NextAuth** para autenticação de administradores, upload de imagens via **Cloudinary/Supabase** e integração de pagamentos com o **Mercado Pago** usando o Checkout Pro/Redirect. O projeto segue o conceito *mobile‑first*, é responsivo e otimizado para SEO.

## Principais tecnologias

* **Next.js 14 (App Router)** – framework React para SSR/SSG e rotas de servidor.
* **TypeScript** – tipagem estática para maior segurança e produtividade.
* **Tailwind CSS** – framework utilitário de estilos, com design moderno e responsivo.
* **Prisma ORM + PostgreSQL** – modelagem do banco de dados com migrações automáticas.
* **NextAuth** – autenticação de administrador via credenciais (email/senha).
* **Mercado Pago** – pagamentos via PIX, crédito e débito usando Checkout Pro/Redirect e webhooks para atualização de pedidos.
* **Cloudinary/Supabase Storage** – upload e armazenamento de imagens dos produtos.

## Estrutura de pastas

```text
dr-musculo/
├─ prisma/                # schema do Prisma e semente inicial
├─ src/
│  ├─ app/               # rotas do App Router
│  │  ├─ api/
│  │  │  ├─ auth/[...nextauth]/route.ts     # NextAuth configurado
│  │  │  ├─ checkout/route.ts              # criação de preferências de pagamento
│  │  ├─ admin/           # painel administrativo protegido
│  │  │  ├─ login/page.tsx
│  │  │  ├─ products/page.tsx
│  │  │  └─ … (outras rotas do admin)
│  │  ├─ suplementos/page.tsx
│  │  ├─ acessorios/page.tsx
│  │  ├─ roupas/page.tsx
│  │  ├─ produto/[slug]/page.tsx
│  │  ├─ layout.tsx       # layout raiz com cabeçalho e rodapé
│  │  └─ page.tsx         # página inicial (hero, destaques etc.)
│  ├─ components/        # componentes reutilizáveis (Header, Footer, ProductCard…)
│  ├─ context/           # contexto do carrinho
│  └─ lib/               # helpers (prisma client, auth, mercado pago)
├─ tailwind.config.ts
├─ postcss.config.js
├─ tsconfig.json
└─ package.json
```

## Configuração

1. **Clone o repositório e instale as dependências**

   ```bash
   git clone <este repositório>
   cd dr-musculo
   npm install
   # ou pnpm install / yarn install
   ```

2. **Configure as variáveis de ambiente**

   Renomeie `.env.example` para `.env` e preencha com suas credenciais:

   ```dotenv
   # URL de conexão do PostgreSQL (ex.: Supabase ou cluster local)
   DATABASE_URL=postgresql://usuario:senha@host:porta/db

   # NextAuth
   NEXTAUTH_SECRET=uma_string_aleatoria_grande
   NEXTAUTH_URL=https://seu-dominio.vercel.app

   # Mercado Pago (opcional enquanto não ativado)
   MP_ACCESS_TOKEN=seu_token_mercadopago

   # Cloudinary (ou Supabase Storage)
   CLOUDINARY_CLOUD_NAME=nome_da_cloud
   CLOUDINARY_API_KEY=sua_api_key
   CLOUDINARY_API_SECRET=sua_api_secret

   # Mercado Pago
   MP_PUBLIC_KEY=chave_publica_do_mercadopago
   ```

3. **Crie o banco de dados e aplique as migrações**

   Este projeto utiliza o Prisma para modelagem do banco. Após configurar a variável `DATABASE_URL`, execute:

   ```bash
   npx prisma migrate dev --name init
   # Popula o banco com produtos iniciais
   npm run seed
   ```

4. **Execute em ambiente de desenvolvimento**

   ```bash
   npm run dev
   ```

## Rotas de login

- Admin: `/admin/login`
- Loja: `/store/login`
- Cliente: `/conta/login`

5. **Deploy**

   O projeto está pronto para ser implantado na **Vercel**. A Vercel detecta automaticamente aplicações Next.js. Lembre‑se de configurar as variáveis de ambiente no dashboard da Vercel e apontar para o banco de dados (Supabase/PostgreSQL). Para webhooks do Mercado Pago, configure a URL pública gerada pela Vercel (por exemplo, `https://seu-dominio.vercel.app/api/checkout`) no painel do Mercado Pago.

## Credenciais de acesso (seed)

Após executar `npm run seed`, use as credenciais abaixo:

**Administrador geral (ADMIN)**
- Email: `admin@drmusculo.com`
- Senha: `admin123`

**Gestores de loja (STORE_OWNER)**
- Salvador: `store1@drmusculo.com` / `admin123`
- SAJ (Loja A): `store2@drmusculo.com` / `admin123`
- SAJ (Loja B): `store3@drmusculo.com` / `admin123`

**Cliente demo (CUSTOMER)**
- Email: `cliente@drmusculo.com`
- Senha: `cliente123`

## Deploy com Prisma

Em produção, use:

```bash
npx prisma migrate deploy
```

## Próximos passos

* **Cálculo de frete real** – integrar com API de fretes (Correios, Melhor Envio etc.).
* **Automação de WhatsApp** – enviar notificação ao cliente após pedido.
* **E‑mails transacionais** – envio de confirmação de pedido e status.
* **Sistema de avaliações** – permitir que clientes avaliem produtos.
* **Melhorias de performance e acessibilidade** – como lazy loading e testes.

## Licença

Este projeto é fornecido “como está”, sem garantia de funcionamento em produção. Sinta‑se livre para adaptar e evoluir conforme as necessidades da sua loja.
