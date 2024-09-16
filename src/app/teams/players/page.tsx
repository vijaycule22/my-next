'use client';
import { Box, Card, Flex, Avatar, Text, Button } from "@radix-ui/themes";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Players = () => {
  const [playerList, setPlayers] = useState([]);


  useEffect(() => {
    getPlayersList();
  }, []);

  const getPlayersList = async () => {
    try {
      console.log('onfetch')
      const res = await axios.get("/api/players");
      setPlayers(res.data);
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };


  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl bold">Team Name</h1>
        <Button size={"2"} variant="outline">
          Add Player
        </Button>
      </div>
      <div className="grid gap-4">
       

        {playerList.map((player: any) => (
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
                                        {player.position}
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
