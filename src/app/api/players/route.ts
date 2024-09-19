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
  const team = await prisma.player.create({
    data: {
      player_name: body.player_name,
      player_role: body.player_role,
      player_age: parseInt(body.player_age),
      player_batting_style: body.player_batting_style,
      player_bowling_style: body.player_bowling_style,
      team_id: parseInt(body.team_id),
    } as any,
  });
  return NextResponse.json(team);
}