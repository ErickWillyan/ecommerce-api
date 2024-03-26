-- CreateTable
CREATE TABLE `shoppingList` (
    `id` VARCHAR(191) NOT NULL,
    `amount` INTEGER NOT NULL,
    `productId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `shoppingList` ADD CONSTRAINT `shoppingList_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
