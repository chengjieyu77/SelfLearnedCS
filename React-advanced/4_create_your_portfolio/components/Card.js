import { Heading, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
   <VStack bg='white' borderRadius='lg' >
      <Image src={imageSrc} borderRadius='lg'/>

      <Stack mt="6" spacing='3' padding={2}>
        <Heading size='md' color='black'>{title}</Heading>
        <Text color='gray.500'>
          {description}
        </Text>
        <HStack>
          <Text color='black'>
            See more
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="black" />
        </HStack>
      </Stack>
   </VStack>

  );
};

export default Card;
