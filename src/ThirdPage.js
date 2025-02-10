import React, { useEffect } from 'react';
import { Box, Button, Text, useMediaQuery } from '@chakra-ui/react';
import './ThirdPage.css';
import videoFile from './cute love gif.mp4'; // Importing the video file

const ThirdPage = () => {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    const questionContainer = document.querySelector(".question-container");
    const heartLoader = document.querySelector(".cssload-main");
    const resultContainer = document.querySelector(".result-container");
    const gifResult = document.querySelector(".gif-result");
    const yesBtn = document.querySelector(".js-yes-btn");
    const noBtn = document.querySelector(".js-no-btn");

    if (!noBtn || !yesBtn || !questionContainer || !heartLoader || !resultContainer || !gifResult) {
      console.error('One or more elements not found');
      return;
    }

    const handleMouseOver = () => {
      const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
      const newY = Math.floor(Math.random() * questionContainer.offsetWidth);
  
      noBtn.style.left = `${newX}px`;
      noBtn.style.top = `${newY}px`;
    };

    const handleYesClick = () => {
      questionContainer.style.display = "none";
      heartLoader.style.display = "inherit";

      setTimeout(() => {
        heartLoader.style.display = "none";
        resultContainer.style.display = "inherit";
        gifResult.play();
      }, 3000);
    };

    noBtn.addEventListener("mouseover", handleMouseOver);
    yesBtn.addEventListener("click", handleYesClick);

    return () => {
      noBtn.removeEventListener("mouseover", handleMouseOver);
      yesBtn.removeEventListener("click", handleYesClick);
    };
  }, []);

  return (
    <Box 
      className="container" 
      maxW={isLargerThan1024 ? "800px" : "400px"} 
      p={isLargerThan1024 ? "4" : "2"}
    >
      <Box 
        className="question-container container" 
        top={isLargerThan1024 ? "70%" : "40%"} 
      >
        <Box
          className="tenor-gif-embed"
          data-postid="8824691505375618737"
          data-share-method="host"
          data-width="100%"
        >
          <a href="https://tenor.com/view/tkthao219-bubududu-panda-gif-8824691505375618737">
            Tkthao219 Bubududu Sticker
          </a>
          from
          <a href="https://tenor.com/search/tkthao219-stickers">
            Tkthao219 Stickers
          </a>
        </Box>
        <script
          type="text/javascript"
          async
          src="https://tenor.com/embed.js"
        ></script>
        <Text 
          className="question" 
          fontSize={isLargerThan1024 ? "3rem" : "1.5rem"}
        >
        Will you be my Valentine?</Text>
        <Box 
          className="button-container" 
          gap={isLargerThan1024 ? "2rem" : "1.5rem"}
        >
          <Button className="yes-btn btn js-yes-btn">Yes</Button>
          <Button className="no-btn btn js-no-btn">No</Button>
        </Box>
      </Box>
      <Box className="result-container container">
        <video className="gif-result" src={videoFile} autoPlay loop></video>
        <Text fontSize={isLargerThan1024 ? "5rem" : "2rem"}>I knew it😍!</Text>
      </Box>
      <Box className="cssload-main">
        <Box className="cssload-heart">
          <span className="cssload-heartL"></span>
          <span className="cssload-heartR"></span>
          <span className="cssload-square"></span>
        </Box>
        <Box className="cssload-shadow"></Box>
      </Box>
    </Box>
  );
};

export default ThirdPage;
