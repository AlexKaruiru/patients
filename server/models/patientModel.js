import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema(
    {
      firstname: {
        type: String,
        required: true,
      },
      lastname: {
        type: String,
        required: true,
      },
      gender: {
        type: String,
        required: true,
      },
      dateOfBirth: {
        type: String,
        required: true,
      },
      height: {
        type: Number,
        required: true,
      },
      weight: {
        type: Number,
        required: true,
      },
      bmi: {
        type: Number,
        required: true,
      },
      generalHealth: {
        type: String,
        enum: ['good', 'poor'],
      },
      dietToLoseWeight: {
        type: String,
        enum: ['yes', 'no'],
      },
      onDrugs: {
        type: String,
        enum: ['yes', 'no'],
      },
      comments: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
  );
  
  const Patient = mongoose.model('Patient', patientSchema);
  
  export default Patient;
  