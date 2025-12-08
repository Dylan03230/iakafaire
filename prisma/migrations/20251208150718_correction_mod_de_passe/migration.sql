/*
  Warnings:

  - You are about to drop the column `mod_de_passe` on the `utilisateur` table. All the data in the column will be lost.
  - Added the required column `mot_de_passe` to the `utilisateur` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `utilisateur` DROP COLUMN `mod_de_passe`,
    ADD COLUMN `mot_de_passe` VARCHAR(255) NOT NULL;
