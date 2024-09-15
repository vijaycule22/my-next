

import { Flex, Card } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

type Team = {
  team_id: number;
  team_name: string;
  short_name?: string;
  team_logo?: string;
  team_city?: string;
  home_ground?: string;
  owner?: string;
  coach?: string;
  captain?: string;
  titles?: number;
};

type TeamListProps = {
  teams: Team[];
};

const teamList = ({ teams }: TeamListProps) => {
  return (
    <Flex direction="column" gap="2" maxWidth="350px">
      {teams.map((team) => (
        <Card key={team.team_id} variant="surface">
          <Link href={`/teams/players/${team.team_id}`}>{team.team_name}</Link>
          {/* <Link href={`/teams/players`}>{team.team_name}</Link> */}
        </Card>
      ))}
    </Flex>
  );
};

export default teamList;

