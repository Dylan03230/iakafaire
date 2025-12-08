-- CreateTable
CREATE TABLE `evenement_sous_categorie` (
    `id_evenement` INTEGER NOT NULL,
    `id_sous_categorie` INTEGER NOT NULL,

    PRIMARY KEY (`id_evenement`, `id_sous_categorie`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `evenement_sous_categorie` ADD CONSTRAINT `evenement_sous_categorie_id_evenement_fkey` FOREIGN KEY (`id_evenement`) REFERENCES `evenement`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `evenement_sous_categorie` ADD CONSTRAINT `evenement_sous_categorie_id_sous_categorie_fkey` FOREIGN KEY (`id_sous_categorie`) REFERENCES `sous_categorie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
