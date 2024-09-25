import { Flex, Card, Button, Dialog, Avatar } from "@radix-ui/themes";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { useToast } from "@/hooks/use-toast"
import EditTeam from "./EditTeam";
import IPLTeamsPage from "./TeamListDesign";

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
  onDeleteTeam: (team_id: number) => void;
  onEditTeam: (team_id: number, team: any) => void;
};

const TeamList = ({ teams, onDeleteTeam, onEditTeam }: TeamListProps) => {
  const [showDialog, setShowDialog] = useState(false);
  const [teamIdToDelete, setTeamIdToDelete] = useState<number | null>(null);

  const handleDeleteClick = (team_id: number) => {
    setTeamIdToDelete(team_id);
    setShowDialog(true);
  };

  return (
    <>
      <Flex direction="column" gap="2" maxWidth="350px">
        {teams && teams.map((team) => (
          <Card key={team.team_id} variant="surface">
            <div className="flex justify-between items-center">



              <Flex gap="3" align="center">
                <Avatar
                  size="4"
                  src={team.team_logo}
                  radius="full"
                  fallback={team.short_name || "T"}
                />
                <Link href={`/teams/players/${team.team_id}`}>{team.team_name}</Link>
              </Flex>
              <div className="flex gap-3">
                <Dialog.Root>
                  <Dialog.Trigger>
                    <Pencil size={20} />
                  </Dialog.Trigger>

                  <Dialog.Content maxWidth="600px">
                    <Dialog.Title>{"Edit Team"}</Dialog.Title>
                    <Dialog.Description size="2" mb="4">
                      {"Make changes to update the team."}
                    </Dialog.Description>
                    <EditTeam currentTeam={team} updateTeam={(data) => onEditTeam(team.team_id, data)} />
                  </Dialog.Content>
                </Dialog.Root>

                <Trash2 size={20} onClick={() => handleDeleteClick(team.team_id)} />
                <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your Team: <span className="font-bold"> {teamIdToDelete ? teams.find(t => t.team_id === teamIdToDelete)?.team_name : ''} </span>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel onClick={() => setShowDialog(false)}>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => {
                        if (teamIdToDelete) {
                          onDeleteTeam(teamIdToDelete);
                          setShowDialog(false);
                          setTeamIdToDelete(null); // Reset the team ID
                        }
                      }}>Delete</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </Card>
        ))}
      </Flex>
      <IPLTeamsPage />
    </>
  );
};

export default TeamList;
