
'use client'
import React, { useEffect, useState } from "react";
import TeamList from "./teamList";
import CreateTeam from "./CreateTeam";
import axios from "axios";

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
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [teams, setTeams] = useState<Team[]>([
    {
      team_id: 12,
      team_name: "Example Team",
    },
  ]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      console.log('onfetch')
      const res = await axios.get("/api/teams");
      setTeams(res.data);
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };

  // Function to add a new team to the list
  const addTeam = (newTeam: Team) => {
    setTeams((prevTeams) => [...prevTeams, newTeam]);
  };

  return (
    <>
      <div className="flex w-full justify-end">
        <CreateTeam addTeam={addTeam} /> {/* Pass the addTeam function */}
      </div>
      <h1>Team List</h1>
      <TeamList teams={teams} /> {/* Pass the teams state */}
    </>
  );
};

export default teams;

