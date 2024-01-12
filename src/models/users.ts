import mongoose, { Schema } from 'mongoose';

const usersSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: null
    },
    lastname: {
      type: String,
      default: null
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true,
      select: false
    },
   tests: [
    {
      type: Schema.Types.ObjectId,
      ref: 'IsoTest'
    }
   ],
   testAccessLevel: {
    type: String,
    enum: ['viewTest', 'downloadAndViewTest', 'downloadTemplate'],
    default: null
   }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default mongoose.model('users', usersSchema);
