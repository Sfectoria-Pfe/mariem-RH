/*
  Warnings:

  - You are about to drop the column `condidateName` on the `demande` table. All the data in the column will be lost.
  - You are about to drop the `product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userproduct` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `adress` to the `Demande` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `Demande` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Demande` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Demande` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `Demande` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Demande` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `userproduct` DROP FOREIGN KEY `UserProduct_productId_fkey`;

-- DropForeignKey
ALTER TABLE `userproduct` DROP FOREIGN KEY `UserProduct_userId_fkey`;

-- AlterTable
ALTER TABLE `demande` DROP COLUMN `condidateName`,
    ADD COLUMN `adress` VARCHAR(191) NOT NULL,
    ADD COLUMN `age` INTEGER NOT NULL,
    ADD COLUMN `lastName` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `phoneNumber` INTEGER NOT NULL,
    ADD COLUMN `type` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `product`;

-- DropTable
DROP TABLE `userproduct`;
