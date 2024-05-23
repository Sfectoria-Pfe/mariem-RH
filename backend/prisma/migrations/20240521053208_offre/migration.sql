-- AlterTable
ALTER TABLE `offer` ADD COLUMN `servicesId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Offer` ADD CONSTRAINT `Offer_servicesId_fkey` FOREIGN KEY (`servicesId`) REFERENCES `Services`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
