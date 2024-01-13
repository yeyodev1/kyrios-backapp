import mongoose from 'mongoose';

const responseOptionsValues = ['Sin documentar ni implementar', 'Implementado pero no formalizado ni comunicado', 'Implementado, documentado pero requiere mejorar', 'Implementado listo para auditar', 'No aplica'];

const isoTestSchema = new mongoose.Schema({
  isoType: {
    type: String,
    required: true,
    enum: ['ISO 27001', 'ISO 20000', 'ISO 22301']
  },
  company: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    required: false,
    default: new Date()
  },
  createdBy: {
    type: String,
    required: false,
    default: 'yeyodev'
  },
  questions: [
    {
      clause: {
        type: String,
        required: false,
      },
      questionText: {
        type: String,
        required: true,
      },
      answerOptions: {
        type: [String],
        required: true,
        default: responseOptionsValues,
      },
      correctAnswer: {
        type: String,
        required: false, 
      },
      userResponse: {
        type: String, 
        required: false
      }
    }
  ],
});

export default mongoose.model('IsoTest', isoTestSchema);
