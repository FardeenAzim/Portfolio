import React from "react";
import { Modal, Button, Text, Group, ScrollArea } from "@mantine/core";

const FullProjectModel = ({ opened, close, projectDetails }) => {
  return (

    <Modal
      opened={opened}
      onClose={close}
      centered
      size="55rem"
      overlayOpacity={0.55}
      overlayBlur={3}
      scrollAreaComponent={(props) => (
        <ScrollArea.Autosize
          {...props}
          classNames={{
            root: 'bg-gray-600',
          }}
        />
      )}
      classNames={{
        modal: 'border-l border-r border-gray-600', 
        header: 'bg-gray-600',                      
        footer: 'bg-gray-600', 
      }}
      closeButtonProps={{
        className: 'text-blue-600', 
      }}
      
    >
      <div className="relative flex flex-col gap-4 p-4 !bg-gray-600 rounded-lg">
        <div className="w-full h-[300px] md:h-[400px] rounded-md overflow-hidden">
          <img
            src={projectDetails.image}
            alt={projectDetails.title}
            className="w-full h-full object-cover !bg-gray-600"
          />
        </div>

        <div className="w-full p-3 rounded-lg !bg-gray-600 text-white">
          <Text size="lg" className="text-center text-2xl font-bold">
            {projectDetails.title}
          </Text>

          <Text
            size="md"
            color="dimmed"
            className="text-center text-xl text-justify !font-semibold mt-[30px]"
          >
            {projectDetails.description}
          </Text>
        </div>

        <Group spacing="xs" mt="3xl" className="justify-center rounded-lg w-full sm:w-auto">
          {projectDetails.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-500 text-white rounded py-1 px-4 text-center flex justify-center
               items-center text-xl md:text-lg sm:text-sm xs:text-xs"
            >
              {tech}
            </span>
          ))}
        </Group>

        <Group className="rounded-lg w-full sm:w-auto xs:w-auto" justify="space-between" mt="xs">
          <a href={projectDetails.github} target="_blank" className="md:!w-[48%] sm:[40%] -mt-[20px]">
            <Button
              className="bg-blue-500 text-white text-center rounded-md text-xl"
              variant="outline"
              fullWidth
              mt="xs"
            >
              View Code
            </Button>
          </a>

          <a href={projectDetails.link} target="_blank" className="md:!w-[48%] sm:[40%] -mt-[20px]">
            <Button
              className="bg-blue-500 text-white text-center rounded-md text-xl"
              variant="outline"
              fullWidth
              mt="xs"
            >
              Live App
            </Button>
          </a>
        </Group>
      </div>
    </Modal>
  );
};

export default FullProjectModel;
