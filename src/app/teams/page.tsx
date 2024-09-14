import Link from "next/link";
import React from "react";
import TeamList from "./teamList";
import CreateTeam from "./CreateTeam";
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

const teams = () => {
  const teamList: Team[] = [
    {
      team_id: 12,
      team_name: "string",
    }
  ]



  return (
    <>
      <div className="flex w-full justify-end">
        <CreateTeam />
      </div>
      Team List
      <TeamList />
    </>
  );
};

export default teams;
