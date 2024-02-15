import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
const Card = ({ title, description, imageSrc }) => {
  return (
    <Box backgroundColor={'white'} borderRadius={'10px'}>
      <Image src={imageSrc} borderRadius={'10px'}/>
      <VStack alignItems={'flex-start'} ml={4} mt={4} mb={4} mr={4}>
      <Heading color={'black'} size={'sm'}>
        {title}
      </Heading>
      <Text color={'grey'}>
        {description}
      </Text>
      <HStack justifyContent={'center'} alignItems={'center'}>
        <Heading color={'black'} size={'xs'}>
          See more
        </Heading>
        <FontAwesomeIcon icon={faArrowRight} size={'xs'} color={'black'} />
      </HStack>
      </VStack>
    </Box>
  )
};

export default Card;
