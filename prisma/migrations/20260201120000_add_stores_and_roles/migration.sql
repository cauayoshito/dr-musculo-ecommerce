-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'STORE_OWNER';

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'PAID', 'FAILED', 'CANCELED');

-- CreateTable
CREATE TABLE "Store" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "isOnline" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Store_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoreInventory" (
    "id" TEXT NOT NULL,
    "storeId" TEXT NOT NULL,
    "variantId" TEXT NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StoreInventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WebhookEvent" (
    "id" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "processed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WebhookEvent_pkey" PRIMARY KEY ("id")
);

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "storeId" TEXT;

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "storeId" TEXT,
ADD COLUMN     "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "currency" TEXT NOT NULL DEFAULT 'BRL',
ADD COLUMN     "subtotal" DECIMAL(10,2) NOT NULL DEFAULT 0,
ADD COLUMN     "discount" DECIMAL(10,2) NOT NULL DEFAULT 0,
ADD COLUMN     "shipping" DECIMAL(10,2) NOT NULL DEFAULT 0,
ADD COLUMN     "mpPaymentId" TEXT,
ADD COLUMN     "mpPreferenceId" TEXT,
ADD COLUMN     "mpMerchantOrderId" TEXT,
ADD COLUMN     "mpStatusDetail" TEXT,
ADD COLUMN     "paidAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "OrderItem" ADD COLUMN     "priceAtPurchase" DECIMAL(10,2) NOT NULL DEFAULT 0,
ADD COLUMN     "productNameSnapshot" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "variantSnapshot" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Store_slug_key" ON "Store"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "StoreInventory_storeId_variantId_key" ON "StoreInventory"("storeId", "variantId");

-- CreateIndex
CREATE UNIQUE INDEX "WebhookEvent_eventId_key" ON "WebhookEvent"("eventId");

-- CreateIndex
CREATE INDEX "Category_slug_idx" ON "Category"("slug");

-- CreateIndex
CREATE INDEX "Product_slug_idx" ON "Product"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "ProductVariant_productId_name_option_key" ON "ProductVariant"("productId", "name", "option");

-- CreateIndex
CREATE INDEX "Coupon_code_idx" ON "Coupon"("code");

-- CreateIndex
CREATE INDEX "Order_status_createdAt_idx" ON "Order"("status", "createdAt");

-- CreateIndex
CREATE INDEX "Order_storeId_idx" ON "Order"("storeId");

-- CreateIndex
CREATE INDEX "Store_slug_idx" ON "Store"("slug");

-- CreateIndex
CREATE INDEX "Store_isOnline_idx" ON "Store"("isOnline");

-- CreateIndex
CREATE INDEX "StoreInventory_storeId_idx" ON "StoreInventory"("storeId");

-- CreateIndex
CREATE INDEX "StoreInventory_variantId_idx" ON "StoreInventory"("variantId");

-- CreateIndex
CREATE INDEX "User_storeId_idx" ON "User"("storeId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreInventory" ADD CONSTRAINT "StoreInventory_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreInventory" ADD CONSTRAINT "StoreInventory_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "ProductVariant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
