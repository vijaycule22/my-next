
import { Dialog, Button, Flex, TextField, Text } from "@radix-ui/themes";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

type CreateTeamProps = {
  addTeam: (newTeam: CreateTeam) => void;
};

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
};

const CreateTeam = ({ addTeam }: CreateTeamProps) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmitForm = async (data: any) => {
    try {
      const res = await axios.post("/api/teams", data);
      console.log(res);
      // If successfully posted, call addTeam to update UI
      addTeam(res.data);
      reset(); // Optionally reset the form after submission
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button>Create Team</Button>
        </Dialog.Trigger>

        <Dialog.Content maxWidth="600px">
          <Dialog.Title>Create Team</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            Make changes to add team.
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
                {...register("team_name")}
                id="team_name"
                placeholder="Enter team name"
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Short Name
              </Text>
              <TextField.Root
                id="short_name"
                {...register("short_name")}
                placeholder="Enter short name"
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Team logo url
              </Text>
              <TextField.Root
                id="team_logo"
                {...register("team_logo")}
                placeholder="Enter logo URL"
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                City
              </Text>
              <TextField.Root
                id="team_city"
                {...register("team_city")}
                placeholder="Enter City name"
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Home Ground
              </Text>
              <TextField.Root
                id="home_ground"
                {...register("home_ground")}
                placeholder="Enter Home Ground"
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Owner
              </Text>
              <TextField.Root
                id="owner"
                {...register("owner")}
                placeholder="Enter Owner"
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Coach
              </Text>
              <TextField.Root
                id="coach"
                {...register("coach")}
                placeholder="Enter Coach Name"
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Captain
              </Text>
              <TextField.Root
                id="captain"
                {...register("captain")}
                placeholder="Enter Captain Name"
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Titles
              </Text>
              <TextField.Root
                id="titles"
                {...register("titles")}
                placeholder="Enter Titles Won"
              />
            </label>

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
  );
};

export default CreateTeam;
