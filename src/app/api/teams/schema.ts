import { z } from "zod";

export const teamSchema = z.object({
  team_id: z.number(),
  team_name: z.string().min(1, "Team name is required"),
  short_name: z
    .string()
    .min(1, "Short name is required")
    .max(5, "Short name should be less than 3 characters"),
  team_logo: z.string().min(1, "Team logo is required"),
  team_city: z.string().min(1, "Team city is required"),
  captain: z.string().nullable(),
  home_ground: z.string().nullable(),
  owner: z.string().nullable(),
  coach: z.string().nullable(),
  primaryColor: z.string().nullable(),
  secondaryColor: z.string().nullable(),
});
