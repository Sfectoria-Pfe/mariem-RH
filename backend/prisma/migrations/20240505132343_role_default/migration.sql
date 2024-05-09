/*
  Warnings:

  - Made the column `role` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `role` ENUM('Stagiaire', 'Employe', 'Admin', 'Recruteur', 'ResponsableRH') NOT NULL DEFAULT 'Employe';
