/*
  Warnings:

  - Added the required column `purchaseId` to the `shoppingList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `shoppinglist` ADD COLUMN `purchaseId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `purchase` (
    `id` VARCHAR(191) NOT NULL,
    `draft` BOOLEAN NOT NULL DEFAULT false,
    `totalPrice` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `shoppingList` ADD CONSTRAINT `shoppingList_purchaseId_fkey` FOREIGN KEY (`purchaseId`) REFERENCES `purchase`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
