import { z } from "zod";

export const playerSchema = z.object({
    player_id: z.number(),
    player_name: z.string().min(1, "Player name is required"),
    player_role: z.string().min(1, "Player role is required"),
    player_age: z.string().min(1, "Player age is required"),
    player_batting_style: z.string().min(1, "Player batting style is required"),
    player_bowling_style: z.string().min(1, "Player bowling style is required"),
    team_id: z.number(),
});