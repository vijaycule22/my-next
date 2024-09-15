-- CreateTable
CREATE TABLE `Player` (
    `player_id` INTEGER NOT NULL AUTO_INCREMENT,
    `player_name` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `position` VARCHAR(191) NOT NULL,
    `nationality` VARCHAR(191) NOT NULL,
    `team_id` INTEGER NOT NULL,

    PRIMARY KEY (`player_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Player` ADD CONSTRAINT `Player_team_id_fkey` FOREIGN KEY (`team_id`) REFERENCES `Team`(`team_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
