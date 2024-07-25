/* eslint-disable react/jsx-key */
//teams/TeamList.tsx
"use client";
import { Flex, Card } from "@radix-ui/themes";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Team = {
  team_id: number;
  team_name: string;
  short_name: string;
  team_logo: string;
  team_city: string;
  home_ground: string;
  owner: string;
  coach: string;
  captain: string;
  titles: number;
};

const TeamList = () => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const res = await axios.get("/api/teams");
        setTeams(res.data);
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };

    fetchTeams();
  }, []);

  return (
    <>
      <Flex direction="column" gap="2" maxWidth="350px">
        {teams.map((team) => (
          <Card key={team.team_id} variant="surface">
            <Link href="/teams/players">{team.team_name}</Link>
          </Card>
        ))}
      </Flex>
    </>
  );
};

export default TeamList;
