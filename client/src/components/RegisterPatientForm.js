import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Radio, Stack, Textarea, Button, useToast, FormControl, FormLabel, VStack } from '@chakra-ui/react';
import axios from 'axios';

const RegisterPatientForm = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const [patientData, setPatientData] = useState({
    firstname: '',
    lastname: '',
    gender: '',
    dateOfBirth: '',
    height: '',
    weight: '',
    generalHealth: '',
    dietToLoseWeight: '',
    onDrugs: '',
    comments: '',
  });

  const calculateBMI = () => {
    const { height, weight } = patientData;
    if (height && weight) {
      const bmi = (weight / (height * height)) * 10000;
      return Math.round(bmi * 10) / 10;
    }
    return null;
  };

  const bmi = calculateBMI();

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "radio") {
      setPatientData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setPatientData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/patients', patientData);
      console.log('Patient registered:', response.data);
      toast({
        title: 'Patient Registered',
        description: 'The patient has been successfully registered.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      navigate('/'); // Redirect to the homescreen
    } catch (error) {
      console.error('Error registering patient:', error.response.data);
      toast({
        title: 'Error',
        description: 'An error occurred while registering the patient.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4} align="start">
        <FormControl isRequired>
          <FormLabel>First Name</FormLabel>
          <Input
            name="firstname"
            placeholder="First Name"
            value={patientData.firstname}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Last Name</FormLabel>
          <Input
            name="lastname"
            placeholder="Last Name"
            value={patientData.lastname}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Gender</FormLabel>          
          <Stack direction="row" spacing={4}>
              <Radio
                name="gender"
                value="male"
                isChecked={patientData.gender === 'male'}
                onChange={handleChange}
                >
                   Male
                </Radio>
                <Radio
                  name="gender"
                  value="female"
                  isChecked={patientData.gender === 'female'}
                  onChange={handleChange}
                  >
                  Female
              </Radio>
            </Stack>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Date of Birth</FormLabel>
          <Input
            name="dateOfBirth"
            type="date"
            placeholder="Date of Birth"
            value={patientData.dateOfBirth}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Height (in cm)</FormLabel>
          <Input
            name="height"
            placeholder="Height (in cm)"
            value={patientData.height}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Weight (in kg)</FormLabel>
          <Input
            name="weight"
            placeholder="Weight (in kg)"
            value={patientData.weight}
            onChange={handleChange}
          />
        </FormControl>

        {bmi && (
          <Stack spacing={4} w="100%">
            {bmi < 25 ? (
              <>
                <FormControl >
                  <FormLabel>General Health</FormLabel>
                  <Stack direction="row" spacing={4}>
                    <Radio
                      name="generalHealth"
                      value="good"
                      isChecked={patientData.generalHealth === 'good'}
                      onChange={handleChange}
                    >
                      Good
                    </Radio>
                    <Radio
                      name="generalHealth"
                      value="poor"
                      isChecked={patientData.generalHealth === 'poor'}
                      onChange={handleChange}
                    >
                      Poor
                    </Radio>
                  </Stack>
                </FormControl>


                <FormControl >
                  <FormLabel>Diet to Lose Weight</FormLabel>
                  <Stack direction="row" spacing={4}>
                    <Radio
                      name="dietToLoseWeight" 
                      value="yes"
                      isChecked={patientData.dietToLoseWeight === 'yes'}
                      onChange={handleChange}
                    >
                      Yes
                    </Radio>
                    <Radio
                      name="dietToLoseWeight" 
                      value="no"
                      isChecked={patientData.dietToLoseWeight === 'no'}
                      onChange={handleChange}
                    >
                      No
                    </Radio>
                  </Stack>
                </FormControl>
                <FormControl>
                    <FormLabel>Comments</FormLabel>
                    <Textarea
                      name="comments"
                      placeholder="Comments"
                      value={patientData.comments}
                      onChange={handleChange}
                    />
                </FormControl>
                </>
            ) : (
              <>
                <FormControl >
                  <FormLabel>General Health</FormLabel>
                  <Stack direction="row" spacing={4}>
                    <Radio 
                      name="generalHealth" 
                      value="poor"
                      isChecked={patientData.generalHealth === 'poor'} 
                      onChange={handleChange}
                    >
                      Poor
                    </Radio>
                    <Radio 
                      name="generalHealth" 
                      value="good"
                      isChecked={patientData.generalHealth === 'good'} 
                      onChange={handleChange}
                    >
                      Good
                    </Radio>
                  </Stack>
                </FormControl>

                <FormControl >
                  <FormLabel>On Drugs</FormLabel>
                  <Stack direction="row" spacing={4}>
                    <Radio
                      name="onDrugs" 
                      value="yes"
                      isChecked={patientData.onDrugs === 'yes'} 
                      onChange={handleChange}
                    >
                      Yes
                    </Radio>
                    <Radio
                      name="onDrugs" 
                      value="no"
                      isChecked={patientData.onDrugs === 'no'} 
                      onChange={handleChange}
                    >
                      No
                    </Radio>
                  </Stack>
                </FormControl>

                <FormControl>
                  <FormLabel>Comments</FormLabel>
                  <Textarea
                    name="comments"
                    placeholder="Comments"
                    value={patientData.comments}
                    onChange={handleChange}
                  />
                </FormControl>
              </>
            )}
          </Stack>
        )}

        <Button type="submit">Submit</Button>
      </VStack>
    </form>
  );
};

export default RegisterPatientForm;
