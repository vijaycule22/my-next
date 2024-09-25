
'use client';
import { Box, Card, Flex, Avatar, Text, Button } from "@radix-ui/themes";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CreateTeam from "../../CreateTeam";
import CreatePlayer from "../CreatePlayer";
import PlayerCard from "../PlayerCard";

interface Props {
    params: { id: number }
}

type Player = {
    player_id: number;
    player_name: string;
    player_role: string;
    player_age: string;
    player_batting_style: string;
    player_bowling_style: string;
    team_id: number;
}


const Players = ({ params: { id } }: Props) => {
    const [playerList, setPlayerList] = useState([]);

    useEffect(() => {
        getPlayersList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getPlayersList = async () => {
        try {
            const res = await axios.get("/api/players");

            const data = res.data.filter((player: any) => player.team_id == id);

            setPlayerList(data);
        } catch (error) {
            console.error("Error fetching teams:", error);
        }
    };

    const onAddPlayer = async (player: any) => {
        try {
            player.team_id = id;
            console.log(player)
            const res = await axios.post("/api/players", player);
            await getPlayersList();
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div>
            <div className="flex w-full justify-end">
                <CreatePlayer team_id={id} addPlayer={onAddPlayer} /> {/* Pass the addTeam function */}
            </div>
            <div className="grid gap-4">
                <PlayerCard />
                {playerList && playerList.map((player: any) => (
                    // eslint-disable-next-line react/jsx-key
                    <Box minWidth={"400px"} maxWidth={"400px"} key={player.player_id}>
                        <Card>
                            <Flex gap="3" align="center">
                                <Avatar
                                    size="3"
                                    src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                                    radius="full"
                                    fallback="T"
                                />
                                <Box>
                                    <Text as="div" size="2" weight="bold">
                                        {player.player_name}
                                    </Text>
                                    <Text as="div" size="2" color="gray">
                                        {player.role}
                                    </Text>
                                </Box>
                            </Flex>
                        </Card>
                    </Box>
                ))}


            </div>
        </div>
    );
};

export default Players;
