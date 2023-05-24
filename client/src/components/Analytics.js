import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Analytics = () => {
  // Sample data for population chart
  const populationData = [
    { age: '<18', male: 500, female: 550 },
    { age: '18-30', male: 800, female: 900 },
    { age: '30-45', male: 1000, female: 950 },
    { age: '45+', male: 700, female: 750 },
  ];

  // Sample data for BMI chart
  const bmiData = [
    { category: 'Underweight', count: 200 },
    { category: 'Normal', count: 500 },
    { category: 'Overweight', count: 400 },
    { category: 'Obese', count: 300 },
  ];

  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Analytics
      </Heading>

      <Box mb={8}>
        <Heading as="h3" size="md" mb={4}>
          Population Chart
        </Heading>
        <BarChart width={400} height={300} data={populationData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="age" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="male" stackId="gender" fill="#3182CE" />
          <Bar dataKey="female" stackId="gender" fill="#ED64A6" />
        </BarChart>
      </Box>

      <Box>
        <Heading as="h3" size="md" mb={4}>
          BMI Chart
        </Heading>
        <BarChart width={400} height={300} data={bmiData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#38A169" />
        </BarChart>
      </Box>

      <Text mt={8}>
      How to Measure and Interpret Weight Status
        <ol>
            <li>If your BMI is less than 18.5, it falls within the underweight range.</li>
            <li>If your BMI is 18.5 to 24.9, it falls within the Healthy Weight range.</li>
            <li>If your BMI is 25.0 to 29.9, it falls within the overweight range.</li>
            <li>If your BMI is 30.0 or higher, it falls within the obese range.</li>
        </ol>
      </Text>
    </Box>
  );
};

export default Analytics;
