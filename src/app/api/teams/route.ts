import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET(request: NextRequest) {
  const teams = await prisma.team.findMany();
  return NextResponse.json(teams);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const team = await prisma.team.create({
    data: {
      team_name: body.team_name,
      short_name: body.short_name,
      team_logo: body.team_logo,
      team_city: body.team_city,
      captain: body.captain,
      home_ground: body.home_ground,
      owner: body.owner, 
      coach: body.coach,
      titles: 0,
      primaryColor: body.primaryColor,
      secondaryColor: body.secondaryColor,
    },
  });
  return NextResponse.json(team);
}

