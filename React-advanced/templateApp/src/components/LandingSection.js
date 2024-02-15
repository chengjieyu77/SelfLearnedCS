import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Header from "./Header";

const greeting = "Hello, I am James!";
const bio1 = "A web developer";
const bio2 = "specialised in MERN";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Heading>
      <Header/>
    </Heading>
    <Avatar size='2xl' name='James Avila' src='https://bit.ly/sage-adebayo' />
    <h3>{greeting}</h3>
    <h2>{bio1}</h2>
    <h2>{bio2}</h2>
  </FullScreenSection>
);

export default LandingSection;
