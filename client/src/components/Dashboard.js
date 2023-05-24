import React from 'react';
import { Box, Heading, Text, Image, Flex, Icon } from '@chakra-ui/react';
import { FaUsers, FaChartBar, FaFileAlt } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <Box>
      <Box mt={8} p={4}>
        <Heading as="h2" size="lg" mb={4}>
          Welcome to the Health Tracker Dashboard
        </Heading>
        <Text>
          Regular tracking of vital signs, physical activity, nutrition, and sleep patterns provides valuable 
          data for identifying trends, setting goals, and making necessary adjustments to improve overall health 
          and prevent potential health problems.
        </Text>
      </Box>

      <Flex mt={8} p={4}>
        <Image src={process.env.PUBLIC_URL + 'bmi.jpg'} alt="BMI" boxSize="200px" mr={4} />

        <Box>
          <Heading as="h3" size="md" mb={2}>
            Why is BMI Important?
          </Heading>
          <Text>
            Checking BMI (Body Mass Index) is important because it provides a simple and quick assessment
            of an individual's weight status in relation to their height. It helps identify if a person is 
            underweight, normal weight, overweight, or obese, which can indicate potential health risks. 
            Monitoring BMI allows individuals and healthcare professionals to assess the need for lifestyle 
            changes, such as diet and exercise, to maintain a healthy weight and reduce the risk of various 
            chronic conditions, including heart disease, diabetes, and certain cancers.
          </Text>
        </Box>
      </Flex>

      <Flex mt={8} p={4}>
        <Box>
          <Icon as={FaUsers} boxSize={8} color="gray.500" />
          <Heading as="h4" size="md" mt={2} mb={2}>
            Register Patient
          </Heading>
          <Text>
            Register Patients ...
          </Text>
        </Box>

        <Box ml={8}>
          <Icon as={FaFileAlt} boxSize={8} color="gray.500" />
          <Heading as="h4" size="md" mt={2} mb={2}>
            View Report
          </Heading>
          <Text>
            View Reports ...
          </Text>
        </Box>
      </Flex>

      <Flex mt={8} p={4}>
        <Icon as={FaChartBar} boxSize={8} color="gray.500" mr={4} />
        <Box>
          <Heading as="h3" size="md" mb={2}>
            Analytics
          </Heading>
          <Text>
            View Analytics ....
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Dashboard;
