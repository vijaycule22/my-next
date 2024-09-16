import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET(request: NextRequest) {
 try {
    const players = await prisma.player.findMany();
    return NextResponse.json(players);
  } catch (error) {
    console.error("Error fetching players:", error);
    return NextResponse.json({ error: "Error fetching players" });
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const team = await prisma.team.create({
    data: {
      player_id: body.player_id,
      player_name: body.player_name,
      player_role: body.player_role,
      player_image: body.player_image,
      player_age: body.player_age,
      player_batting_style: body.player_batting_style,
      player_bowling_style: body.player_bowling_style,
      player_team_id: body.player_team_id,
    } as any,
  });
  return NextResponse.json(team);
}