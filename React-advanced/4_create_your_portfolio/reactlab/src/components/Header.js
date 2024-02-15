import React, { useState, useEffect, useRef, useId } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const [down, setDown] = useState(false);
  const pageLocation = useRef(0);
  useEffect(() => {
    const handleNavigation = (e) => {
      const window = e.currentTarget;
      if (pageLocation.current < window.scrollY) {
        if (!down) {
  
          setDown(true)
        }
      } else {
          setDown(false)
      }
      pageLocation.current = window.scrollY;
      
    }
    window.addEventListener('scroll', handleNavigation)

    return () => {
      window.removeEventListener('scroll', handleNavigation)
    }
  },[])

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transform={down ? 'translateY(-200px)' : 'translateY(0)'}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={'24px'}>
            {socials.map((value) => {
              return (
                <a href={value.url} key={useId()}>
                  <FontAwesomeIcon icon={value.icon} size="2x" />
                </a>
              )
            })}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
             <a href="/#contact-me" onClick={handleClick('contactme')}>Contact Me</a>
             <a href="/#projects" onClick={handleClick('projects')}>Projects</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
