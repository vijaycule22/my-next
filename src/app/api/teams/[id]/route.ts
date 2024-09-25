import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";

export async function GET(request: NextRequest, { params }: any) {
  console.log(params);

  const teams = await prisma.team.findUnique({
    where: {
      team_id: Number(params.id),
    },
  });

  return NextResponse.json(teams);
}

export async function PUT(request: NextRequest, { params }: any) {
  const body = await request.json();
  const team = await prisma.team.update({
    where: {
      team_id: parseInt(params.id),
    },
    data: {
      team_name: body.team_name,
      short_name: body.short_name,
      team_logo: body.team_logo,
      team_city: body.team_city,
      captain: body.captain,
      home_ground: body.home_ground,
      owner: body.owner, 
      coach: body.coach,
      primaryColor: body.primaryColor,
      secondaryColor: body.secondaryColor,
    },
  });
  return NextResponse.json(team);
}

export async function DELETE(request: NextRequest, { params }: any) {
  await prisma.player.deleteMany({
    where: { team_id: parseInt(params.id) },
  });
  const team = await prisma.team.delete({
    where: {
      team_id: parseInt(params.id),
    },
  });
  return NextResponse.json(team);
}
