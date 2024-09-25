-- CreateTable
CREATE TABLE "Team" (
    "team_id" SERIAL NOT NULL,
    "team_name" TEXT NOT NULL,
    "short_name" TEXT NOT NULL,
    "team_logo" TEXT NOT NULL,
    "team_city" TEXT NOT NULL,
    "home_ground" TEXT NOT NULL DEFAULT '',
    "owner" TEXT NOT NULL DEFAULT '',
    "coach" TEXT NOT NULL DEFAULT '',
    "captain" TEXT NOT NULL DEFAULT '',
    "titles" INTEGER NOT NULL DEFAULT 0,
    "primaryColor" TEXT NOT NULL DEFAULT '',
    "secondaryColor" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Team_pkey" PRIMARY KEY ("team_id")
);

-- CreateTable
CREATE TABLE "Player" (
    "player_id" SERIAL NOT NULL,
    "player_name" TEXT NOT NULL,
    "player_role" TEXT NOT NULL,
    "player_age" INTEGER NOT NULL,
    "player_batting_style" TEXT NOT NULL,
    "player_bowling_style" TEXT NOT NULL,
    "team_id" INTEGER NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("player_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Team_team_name_key" ON "Team"("team_name");

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "Team"("team_id") ON DELETE RESTRICT ON UPDATE CASCADE;
