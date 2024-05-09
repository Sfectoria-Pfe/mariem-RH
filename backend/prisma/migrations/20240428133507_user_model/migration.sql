/*
  Warnings:

  - You are about to drop the `product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userproduct` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `userproduct` DROP FOREIGN KEY `UserProduct_productId_fkey`;

-- DropForeignKey
ALTER TABLE `userproduct` DROP FOREIGN KEY `UserProduct_userId_fkey`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `role` ENUM('Stagiaire', 'Employe', 'Manager', 'Recruteur') NOT NULL;

-- DropTable
DROP TABLE `product`;

-- DropTable
DROP TABLE `userproduct`;
