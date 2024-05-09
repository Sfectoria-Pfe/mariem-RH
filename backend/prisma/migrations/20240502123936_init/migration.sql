/*
  Warnings:

  - You are about to drop the column `demandeId` on the `offer` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `offer` DROP FOREIGN KEY `Offer_demandeId_fkey`;

-- AlterTable
ALTER TABLE `demande` ADD COLUMN `offerId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `offer` DROP COLUMN `demandeId`;

-- AddForeignKey
ALTER TABLE `Demande` ADD CONSTRAINT `Demande_offerId_fkey` FOREIGN KEY (`offerId`) REFERENCES `Offer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
