import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";

export async function GET(request: NextRequest, { params }: any) {
  console.log(params);

  const teams = await prisma.team.findUnique({
    where: {
      team_id: parseInt(params.id),
    },
  });

  return NextResponse.json(teams);
}

// export async function PUT(request: NextRequest, { params }: any) {
//   const team = await prisma.team.update({
//     where: {
//       team_id: parseInt(params.id),
//     },
//     data: {
//       ...request.body,
//     },
//   });
//   return NextResponse.json(team);
// }

export async function DELETE(request: NextRequest, { params }: any) {
  const team = await prisma.team.delete({
    where: {
      team_id: parseInt(params.id),
    },
  });
  return NextResponse.json(team);
}
