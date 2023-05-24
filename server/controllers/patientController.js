import asyncHandler from 'express-async-handler';

import Patient from '../models/patientModel.js';


/**
 * @desc    Create new patient
 * @route   POST /api/patients
 * @access  public
 */
const createPatient = asyncHandler(async (req, res) => {
  const {
    firstname,
    lastname,
    gender,
    dateOfBirth,
    height,
    weight,
    generalHealth,
    dietToLoseWeight,
    onDrugs,
    comments,
  } = req.body;

  const bmi = weight / (height * height) * 10000;

  const patient = new Patient({
    firstname,
    lastname,
    gender,
    dateOfBirth,
    height,
    weight,
    bmi,
    generalHealth: bmi < 25 ? generalHealth : undefined,
    dietToLoseWeight: bmi < 25 ? dietToLoseWeight : undefined,
    onDrugs: bmi >= 25 ? onDrugs : undefined,
    comments: bmi >= 25 ? comments : undefined,
  });

  const createdPatient = await patient.save();
  res.status(201).json(createdPatient);
});


/**
 * @desc    Get all patients
 * @route   GET /api/patients
 * @access  public
 */
const getPatients = asyncHandler(async (req, res) => {
  const patients = await Patient.find({});
  res.json(patients);
});


/**
 * @desc    Get single patient
 * @route   GET /api/patients/:id
 * @access  public
 */
const getPatientById = asyncHandler(async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (patient) {
      res.json(patient);
    } else {
      res.status(404).json({ message: 'Patient not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});


/**
 * @desc    Update a patient
 * @route   PUT /api/patients/:id
 * @access  public
 */
const updatePatientById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const {
    firstname,
    lastname,
    gender,
    dateOfBirth,
    height,
    weight,
    generalHealth,
    dietToLoseWeight,
    onDrugs,
    comments,
  } = req.body;

  const patient = await Patient.findById(id);

  if (patient) {
    patient.firstname = firstname;
    patient.lastname = lastname;
    patient.gender = gender;
    patient.dateOfBirth = dateOfBirth;
    patient.height = height;
    patient.weight = weight;
    patient.bmi = weight / (height * height);
    patient.generalHealth = patient.bmi < 25 ? generalHealth : undefined;
    patient.dietToLoseWeight = patient.bmi < 25 ? dietToLoseWeight : undefined;
    patient.onDrugs = patient.bmi >= 25 ? onDrugs : undefined;
    patient.comments = patient.bmi >= 25 ? comments : undefined;

    const updatedPatient = await patient.save();
    res.json(updatedPatient);
  } else {
    res.status(404).json({ message: 'Patient not found' });
  }
});


/**
 * @desc    Delete a patient
 * @route   DELETE /api/patients/:id
 * @access  Public
 */
const deletePatientById = asyncHandler(async (req, res) => {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.id);

    if (patient) {
      res.json({ message: 'Patient deleted successfully' });
    } else {
      res.status(404).json({ message: 'Patient not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});


export {
  createPatient,
  getPatients,
  getPatientById,
  updatePatientById,
  deletePatientById,
};
