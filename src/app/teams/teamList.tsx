

import { Flex, Card, Button, Dialog } from "@radix-ui/themes";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";

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
  onShowDialog: (show: boolean) => void;
  onEditTeam: (team_id: number, team: any) => void;
  showDialog: boolean;
};



const teamList = ({ teams, onDeleteTeam, onShowDialog, onEditTeam, showDialog }: TeamListProps) => {



  return (
    <>
      <Flex direction="column" gap="2" maxWidth="350px">
        {teams && teams.map((team) => (
          <Card key={team.team_id} variant="surface">
            <div className="flex justify-between items-center">
              <Link href={`/teams/players/${team.team_id}`}>{team.team_name}</Link>
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

                <Trash2 size={20} onClick={() => onShowDialog(true)} />
                <AlertDialog open={showDialog}>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your Team: {team.team_name}
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => onDeleteTeam(team.team_id)}>Delete</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </Card>
        ))}
      </Flex>
    </>
  );
};

export default teamList;

