-- CreateTable
CREATE TABLE `ServiceDemande` (
    `id` VARCHAR(191) NOT NULL,
    `demandeId` VARCHAR(191) NULL,
    `servicesId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ServiceDemande` ADD CONSTRAINT `ServiceDemande_demandeId_fkey` FOREIGN KEY (`demandeId`) REFERENCES `Demande`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServiceDemande` ADD CONSTRAINT `ServiceDemande_servicesId_fkey` FOREIGN KEY (`servicesId`) REFERENCES `Services`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
