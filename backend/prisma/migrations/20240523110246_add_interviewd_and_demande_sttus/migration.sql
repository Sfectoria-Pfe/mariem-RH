-- AlterTable
ALTER TABLE `demande` ADD COLUMN `interviewed` ENUM('pending', 'accepted', 'refused') NOT NULL DEFAULT 'pending',
    ADD COLUMN `status` ENUM('pending', 'accepted', 'refused') NOT NULL DEFAULT 'pending';
