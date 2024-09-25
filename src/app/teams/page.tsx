
'use client'
import React, { useEffect, useState } from "react";
import TeamList from "./teamList";
import CreateTeam from "./CreateTeam";
import axios from "axios";

import { useToast } from "@/hooks/use-toast"

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



const Teams = () => {
  const [teams, setTeams] = useState<Team[]>([
    {
      team_id: 12,
      team_name: "Example Team",
    },
  ]);
  const [showDialog, setShowDialog] = useState(false);
  const { toast } = useToast()

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const res = await axios.get("/api/teams");
      setTeams(res.data);
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };

  const deleteTeam = async (team_id: number) => {
    try {
      await axios.delete(`/api/teams/${team_id}`);
      toast({
        title: "Deleted",
        description: `your team has been deleted`,
        className: "bg-red-500",
      })
      setShowDialog(false);
      fetchTeams();
    } catch (error) {
      console.error("Error deleting team:", error);
    }
  }
  const editTeam = async (team_id: number, data: any) => {
    try {
      await axios.put(`/api/teams/${team_id}`, data);
      toast({
        title: "Updated",
        description: `your team has been Updated`,
        className: "bg-green-500",
      })
      setShowDialog(false);
      fetchTeams();
    } catch (error) {
      console.error("Error Updating team:", error);
    }
  }


  const addTeam = (newTeam: Team) => {
    setTeams((prevTeams) => [...prevTeams, newTeam]);
  };

  return (
    <>
      <div className="flex w-full justify-end">
        <CreateTeam addTeam={addTeam} />
      </div>
      <h1>Team List</h1>
      <TeamList teams={teams} onDeleteTeam={deleteTeam} onEditTeam={editTeam} />
    </>
  );
};

export default Teams;

