/* eslint-disable react/jsx-no-undef */
import { Dialog, Button, Flex, TextField, Text } from '@radix-ui/themes';
import axios from 'axios';
import { register } from 'module';
import React from 'react'
import { useForm } from 'react-hook-form';



type Player = {
    player_id: number;
    player_name: string;
    player_role: string;
    player_age: number;
    player_batting_style: string;
    player_bowling_style: string;
    team_id: number;
}

type CreatePlayerProps = {
    team_id: any;
    addPlayer: (player: Player) => void;
}

const CreatePlayer = ({ addPlayer, team_id }: CreatePlayerProps) => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmitForm = async (data: any) => {
        try {

            // If successfully posted, call addTeam to update UI
            // addTeam(res.data);
            console.log(data)
            addPlayer(data);
            reset(); // Optionally reset the form after submission
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <Dialog.Root>
                <Dialog.Trigger>
                    <Button>Create Player</Button>
                </Dialog.Trigger>

                <Dialog.Content maxWidth="600px">
                    <Dialog.Title>Create Player</Dialog.Title>
                    <Dialog.Description size="2" mb="4">
                        Make changes to add Player.
                    </Dialog.Description>

                    <form
                        onSubmit={handleSubmit((data) => onSubmitForm(data))}
                        className="grid gap-4 grid-cols-2"
                    >
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Team Name
                            </Text>
                            <TextField.Root
                                {...register("player_name")}
                                id="player_name"
                                placeholder="Enter player name"
                            />
                        </label>

                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Player Role
                            </Text>
                            <TextField.Root
                                {...register("player_role")}
                                id="player_role"
                                placeholder="Enter player role"
                            />
                        </label>




                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Player Age
                            </Text>
                            <TextField.Root
                                {...register("player_age")}
                                id="player_age"
                                placeholder="Enter player age"
                            />
                        </label>

                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Player Batting Style
                            </Text>
                            <TextField.Root
                                {...register("player_batting_style")}
                                id="player_batting_style"
                                placeholder="Enter player batting style"
                            />
                        </label>


                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Player Bowling Style
                            </Text>
                            <TextField.Root
                                {...register("player_bowling_style")}
                                id="player_bowling_style"
                                placeholder="Enter player bowling style"
                            />
                        </label>

                        {/* <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Player Team Id
                            </Text>
                            <TextField.Root
                                {...register("player_team_id")}
                                id="player_team_id"
                                placeholder="Enter player team id"
                            />
                        </label> */}



                        <Flex gap="3" mt="4" justify="end">
                            <Dialog.Close>
                                <Button variant="soft" color="gray">
                                    Cancel
                                </Button>
                            </Dialog.Close>
                            <Dialog.Close>
                                <Button type="submit">Save</Button>
                            </Dialog.Close>
                        </Flex>
                    </form>
                </Dialog.Content>
            </Dialog.Root>
        </>
    )
}

export default CreatePlayer
