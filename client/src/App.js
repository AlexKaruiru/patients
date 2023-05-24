import React from 'react';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import RegisterPatientForm from './components/RegisterPatientForm';
import Report from './components/Report';
import Analytics from './components/Analytics';

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Flex>
          <Box ml="250px" p={4}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/register" element={<RegisterPatientForm />} />
              <Route path="/report" element={<Report />} />
              <Route path="/analytics" element={<Analytics />} />
            </Routes>
          </Box>
          <Box w="250px" position="fixed" top={0} bottom={0} left={0} bg="gray.200">
            <Sidebar />
          </Box>
        </Flex>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
