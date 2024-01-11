import mongoose, { Schema } from 'mongoose';

const isoTestSchema = new mongoose.Schema({
  isoType: {
    type: String,
    required: true,
    enum: ['ISO 27001', 'ISO 20000', 'ISO 22301']
  },
  company: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  createdBy: {
    type: String,
    required: true
  },
  questions: [
    {
      clause: String,
      questionText: String,
      answerOptions: [String],
      correctAnswer: String
    }
  ]
});

export default mongoose.model('IsoTest', isoTestSchema);