import express from 'express';

import {
    createPatient,
    getPatients,
    getPatientById,
    updatePatientById, 
    deletePatientById
} from '../controllers/patientController.js';

const router = express.Router();

router.route('/').post(createPatient);
router.route('/').get(getPatients);
router.route('/:id').get(getPatientById);
router.route('/:id').put(updatePatientById);
router.route('/:id').delete(deletePatientById);

export default router;

