-- AlterTable
ALTER TABLE `evenement` ADD COLUMN `departement` VARCHAR(100) NULL,
    ADD COLUMN `id_utilisateur` INTEGER NULL,
    ADD COLUMN `informations_sup` TEXT NULL,
    ADD COLUMN `latitude` VARCHAR(100) NULL,
    ADD COLUMN `longitude` VARCHAR(100) NULL,
    ADD COLUMN `nom_du_lieu` VARCHAR(255) NULL,
    ADD COLUMN `region` VARCHAR(100) NULL;

-- AddForeignKey
ALTER TABLE `evenement` ADD CONSTRAINT `evenement_id_utilisateur_fkey` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateur`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
