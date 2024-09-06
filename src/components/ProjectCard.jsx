import React from 'react';
import { Card, Image, Text, Button, Group, Badge, } from '@mantine/core';
import '@mantine/core/styles.css';
import FullProjectModel from './FullProjectModel';
import { useDisclosure } from '@mantine/hooks';

const ProjectCard = ({ image, title, description, technologies, link, github }) => {
  const [opened, { open, close }] = useDisclosure(false);


  return (
    <>
   
    <Card onClick={open} className="hover:!scale-105 cursor-pointer transition-transform
     duration-300 !border-primaryColor border-2 hover:!shadow-[0_0_10px_1px_#64FFDA] " shadow="lg" w="520px"
      padding="sm" radius="lg" withBorder>

    <Card.Section className="p-3 !gap-5  h-[240px] overflow-hidden">
      <Image className="!rounded-xl !shadow-[0_0_5px_1px_#4CAF50] w-full h-full" 
      src={image} alt={image}  />
    </Card.Section>

    <Group position="center" mt="md" mb="xs" className='justify-center'>
        <Text className=" !text-2xl !font-bold  py-2">{title}</Text>
      </Group>


      <Text className="flex gap-2 mb-4 justify-center rounded-lg w-full xs-mx:w-auto xs:text-sm">
        {technologies.map((tech, index) => ( 
          <Badge key={index}
          variant="light"
          className="bg-blue-500 text-white rounded md:text-2xl sm:text-lg xs:text-sm py-3 px-1">
            {tech}
          </Badge>
        ))}
      </Text>

    
      <Text size="xl" lineClamp={5} className="!text-justify">
        {description}
      </Text>

      <Button onClick={open} className="block bg-blue-500 text-white md:text-xl xs:text-lg text-center justify-center rounded-md px-4 py-1">
        Show More
      </Button>
    </Card>
    <FullProjectModel opened={opened} close={close} 
            projectDetails={{ image, title, description, technologies, link, github }}
            />
    </>
  );
};

export default ProjectCard;
