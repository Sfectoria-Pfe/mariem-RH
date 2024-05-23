-- CreateTable
CREATE TABLE `Intern` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `tel` VARCHAR(191) NOT NULL,
    `adress` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `cin` INTEGER NOT NULL,
    `birth` DATETIME(3) NOT NULL,
    `debutDeStage` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `finDeStage` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `servicesId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Services` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Intern` ADD CONSTRAINT `Intern_servicesId_fkey` FOREIGN KEY (`servicesId`) REFERENCES `Services`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
