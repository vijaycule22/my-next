/*
  Warnings:

  - You are about to drop the column `age` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the column `nationality` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the column `position` on the `Player` table. All the data in the column will be lost.
  - Added the required column `player_age` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `player_batting_style` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `player_bowling_style` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `player_role` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Player` DROP COLUMN `age`,
    DROP COLUMN `nationality`,
    DROP COLUMN `position`,
    ADD COLUMN `player_age` INTEGER NOT NULL,
    ADD COLUMN `player_batting_style` VARCHAR(191) NOT NULL,
    ADD COLUMN `player_bowling_style` VARCHAR(191) NOT NULL,
    ADD COLUMN `player_role` VARCHAR(191) NOT NULL;
