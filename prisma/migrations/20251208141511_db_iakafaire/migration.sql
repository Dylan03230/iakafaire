-- CreateTable
CREATE TABLE `utilisateur` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `login` VARCHAR(100) NOT NULL,
    `mod_de_passe` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `utilisateur_login_key`(`login`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categorie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titre` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sous_categorie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titre` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `evenement` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titre` VARCHAR(100) NOT NULL,
    `description` TEXT NULL,
    `date_debut` DATE NULL,
    `date_fin` DATE NULL,
    `adresse` VARCHAR(255) NULL,
    `code_postal` VARCHAR(10) NULL,
    `ville` VARCHAR(100) NULL,
    `site_web` VARCHAR(255) NULL,
    `id_categorie` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categorie_sous_categorie` (
    `id_categorie` INTEGER NOT NULL,
    `id_sous_categorie` INTEGER NOT NULL,

    PRIMARY KEY (`id_categorie`, `id_sous_categorie`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `evenement` ADD CONSTRAINT `evenement_id_categorie_fkey` FOREIGN KEY (`id_categorie`) REFERENCES `categorie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `categorie_sous_categorie` ADD CONSTRAINT `categorie_sous_categorie_id_categorie_fkey` FOREIGN KEY (`id_categorie`) REFERENCES `categorie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `categorie_sous_categorie` ADD CONSTRAINT `categorie_sous_categorie_id_sous_categorie_fkey` FOREIGN KEY (`id_sous_categorie`) REFERENCES `sous_categorie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
