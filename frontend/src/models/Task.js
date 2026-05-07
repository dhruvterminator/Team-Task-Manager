import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: 'Pending',
    },

    priority: {
      type: String,
      default: 'Medium',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Task', taskSchema);