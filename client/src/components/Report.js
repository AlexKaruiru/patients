import React, { useEffect, useState } from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Input } from '@chakra-ui/react';

const Report = () => {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [filterDate, setFilterDate] = useState('');

  useEffect(() => {
      const fetchPatients = async () => {
      try {
        const response = await fetch('/api/patients');
        const data = await response.json();
        setPatients(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPatients();
  }, []);

  useEffect(() => {
      const filtered = patients.filter((patient) =>
      patient.dateOfBirth.includes(filterDate)
    );
    setFilteredPatients(filtered);
  }, [filterDate, patients]);

  const getBMIStatus = (bmi) => {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'Normal';
    } else {
      return 'Overweight';
    }
  };

  const calculateAge = (dateOfBirth) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <Box>
      <Input
        placeholder="Filter by date"
        value={filterDate}
        onChange={(e) => setFilterDate(e.target.value)}
        mb={4}
      />
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Full Name</Th>
            <Th>Age</Th>
            <Th>BMI</Th>
            <Th>BMI Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredPatients.map((patient) => (
            <Tr key={patient._id}>
              <Td>{`${patient.firstname} ${patient.lastname}`}</Td>
              <Td>{calculateAge(patient.dateOfBirth)}</Td>
              <Td>{patient.bmi}</Td>
              <Td>{getBMIStatus(patient.bmi)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Report;
