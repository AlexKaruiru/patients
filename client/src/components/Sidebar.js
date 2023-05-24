import React from 'react';
import { Box, VStack, Icon } from '@chakra-ui/react';
import { FaHome, FaUsers, FaChartBar, FaFileAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    navigate('/');
  };

  return (
    <Box p={4} bg="gray.200">
      <VStack spacing={4} align="stretch">
        <Link to="/" display="flex" align="center" color="gray.600" onClick={handleDashboardClick}>
          <Icon as={FaHome} mr={2} />
          Dashboard
        </Link>
        <Link to="/register" display="flex" align="center" color="gray.600">
          <Icon as={FaUsers} mr={2} />
          Register Patient
        </Link>
        <Link to="/report" display="flex" align="center" color="gray.600">
          <Icon as={FaFileAlt} mr={2} />
          View Report
        </Link>
        <Link to="/analytics" display="flex" align="center" color="gray.600">
          <Icon as={FaChartBar} mr={2} />
          Analytics
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
