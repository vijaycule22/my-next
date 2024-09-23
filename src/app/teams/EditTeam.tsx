


import { Dialog, Button, Flex, TextField, Text } from "@radix-ui/themes";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type CreateTeamProps = {
  updateTeam: (updatedTeam: CreateTeam) => void;
  currentTeam?: CreateTeam | null; // Used to populate form if editing
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

const EditTeam = ({ updateTeam, currentTeam }: CreateTeamProps) => {
  const { register, handleSubmit, reset, setValue } = useForm<CreateTeam>();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (currentTeam) {
      setIsEditing(true);
      // Populate form fields with current team data
      Object.keys(currentTeam).forEach((key) => setValue(key as keyof CreateTeam, (currentTeam as any)[key]));
    } else {
      setIsEditing(false);
      reset();
    }
  }, [currentTeam, setValue, reset]);

  const onSubmitForm = async (data: CreateTeam) => {
    try {
      if (currentTeam) {
        // Edit team
        const res = await axios.put(`/api/teams/${currentTeam.team_id}`, data);
        updateTeam(res.data);
      }
      reset();
    } catch (error) {
      console.error(error);
    }
  };



  return (
          <form
            onSubmit={handleSubmit((data) => onSubmitForm(data))}
            className="grid gap-4 grid-cols-2">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Team Name
              </Text>
              <TextField.Root
                {...register("team_name", { required: true })}
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
          <Button variant="soft" type="submit">
            update
          </Button>
        </Dialog.Close>
      </Flex>
          </form>
  );
};

export default EditTeam;
