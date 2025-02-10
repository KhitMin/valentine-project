// src/components/LoginPage.js
import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Image, Input, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import babyImage from './baby1.png';

const LoginPage = () => {
  const [answers, setAnswers] = useState({ answer1: '', answer2: '', answer3: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Add your validation logic here
    if (answers.answer1 === 'Baby' && answers.answer2 === '121023' && answers.answer3 === '030303') {
      alert('Login successful!');
      navigate('/third');
    } else {
      alert('Incorrect answers. Please try again.');
    }
  };

  return (
    <Box maxW="sm" mx="auto" mt={10}>
        <Image src={babyImage} alt="Login Image" mb={4} boxSize="300px"  // Adjust the box size
        objectFit="cover" // Optional: to fit the image within the box
        />
        <Stack spacing={3}>
        <FormControl>
          <FormLabel>Question 1: Who is Koko's ka lay lay?</FormLabel>
          <Input name="answer1" value={answers.answer1} onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Question 2: When is our anni day?</FormLabel>
          <Input name="answer2" value={answers.answer2} onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Question 3: When is Koko's birthday?</FormLabel>
          <Input name="answer3" value={answers.answer3} onChange={handleChange} />
        </FormControl>
        <Button onClick={handleSubmit} colorScheme="blue">Login</Button>
      </Stack>
    </Box>
  );
};

export default LoginPage;
