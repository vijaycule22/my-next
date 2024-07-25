import Link from "next/link";
import React from "react";
import TeamList from "./teamList";
import CreateTeam from "./CreateTeam";

const teams = () => {
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
