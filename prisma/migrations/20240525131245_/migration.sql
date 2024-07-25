-- CreateTable
CREATE TABLE `Team` (
    `team_id` INTEGER NOT NULL AUTO_INCREMENT,
    `team_name` VARCHAR(191) NOT NULL,
    `short_name` VARCHAR(191) NOT NULL,
    `team_logo` VARCHAR(191) NOT NULL,
    `team_city` VARCHAR(191) NOT NULL,
    `home_ground` VARCHAR(191) NOT NULL,
    `owner` VARCHAR(191) NOT NULL,
    `coach` VARCHAR(191) NOT NULL,
    `captain` VARCHAR(191) NOT NULL,
    `titles` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `Team_team_name_key`(`team_name`),
    PRIMARY KEY (`team_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
