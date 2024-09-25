
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Pencil, Trash2 } from "lucide-react";
import Image from "next/image"
import Link from "next/link";
import EditTeam from "./EditTeam";
import { useState } from "react";
import { Dialog } from "@radix-ui/themes";

// Mock data for IPL teams
// const iplTeams = [
//     { id: 1, name: "Chennai Super Kings", shortName: "CSK", primaryColor: "#FFFF3C", secondaryColor: "#0081E9" },
//     { id: 2, name: "Mumbai Indians", shortName: "MI", primaryColor: "#004BA0", secondaryColor: "#D1AB3E" },
//     { id: 3, name: "Royal Challengers Bangalore", shortName: "RCB", primaryColor: "#EC1C24", secondaryColor: "#000000" },
//     { id: 4, name: "Kolkata Knight Riders", shortName: "KKR", primaryColor: "#3A225D", secondaryColor: "#B3A123" },
//     { id: 5, name: "Delhi Capitals", shortName: "DC", primaryColor: "#0078BC", secondaryColor: "#EF1B23" },
//     { id: 6, name: "Punjab Kings", shortName: "PBKS", primaryColor: "#ED1B24", secondaryColor: "#DCDDDF" },
//     { id: 7, name: "Rajasthan Royals", shortName: "RR", primaryColor: "#EA1A85", secondaryColor: "#254AA5" },
//     { id: 8, name: "Sunrisers Hyderabad", shortName: "SRH", primaryColor: "#F26522", secondaryColor: "#000000" },
// ]

type CreateTeam = {
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
    primaryColor?: string;
    secondaryColor?: string;
};

type iplTeamPageProps = {
    teamList: CreateTeam[];
    onDeleteTeam: (team_id: number) => void;
    onEditTeam: (team_id: number, team: any) => void;
}

export default function IPLTeamsPage({ teamList, onDeleteTeam, onEditTeam }: iplTeamPageProps) {

    const [showDialog, setShowDialog] = useState(false);
    const [teamIdToDelete, setTeamIdToDelete] = useState<number | null>(null);

    const handleDeleteClick = (team_id: number) => {
        setTeamIdToDelete(team_id);
        setShowDialog(true);
    };

    return (
        <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamList.map((team) => (
                    <Card key={team.team_id} className="overflow-hidden">
                        <CardHeader className="p-0">
                            <div
                                className="h-24 flex items-center justify-center"
                                style={{
                                    background: `linear-gradient(135deg, ${team.primaryColor} 0%, ${team.primaryColor} 50%, ${team.secondaryColor} 50%, ${team.secondaryColor} 100%)`
                                }}
                            >
                                <CardTitle className="text-4xl font-bold text-white drop-shadow-lg">
                                    {team.short_name}
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4">
                            <div className="flex justify-between">
                                <Link className="text-xl font-semibold mb-2" href={`/teams/players/${team.team_id}`}>{team.team_name}</Link>

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
                                                    This action cannot be undone. This will permanently delete your Team: <span className="font-bold"> {team.team_name} </span>
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
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Captain</span>
                                <div className="text-sm">
                                    {team.captain}
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-sm text-gray-600">Coach</span>
                                <div className="text-sm" >
                                    {team.coach}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}