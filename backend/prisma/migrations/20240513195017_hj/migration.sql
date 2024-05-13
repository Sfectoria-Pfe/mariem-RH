/*
  Warnings:

  - Added the required column `skills` to the `Offer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `demande` ADD COLUMN `score` DOUBLE NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `offer` ADD COLUMN `skills` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `OfferSkills` (
    `id` VARCHAR(191) NOT NULL,
    `offerId` VARCHAR(191) NULL,
    `skillsId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Skills` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `OfferSkills` ADD CONSTRAINT `OfferSkills_offerId_fkey` FOREIGN KEY (`offerId`) REFERENCES `Offer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OfferSkills` ADD CONSTRAINT `OfferSkills_skillsId_fkey` FOREIGN KEY (`skillsId`) REFERENCES `Skills`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
