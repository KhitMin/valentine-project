import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SecondPage from './SecondPage';
import theme from './theme';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import LoginPage from './LoginPage';
import ThirdPage from './ThirdPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher initialColorMode={theme.config.initialColorMode} justifySelf="flex-end" />
          <Router>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/second" element={<SecondPage />} />
              <Route path="/third" element={<ThirdPage />} />
            </Routes>
          </Router>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
