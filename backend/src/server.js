import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import authRoutes from './routes/authRoutes.js';
import taskRoutes from './routes/taskRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin:
      'https://team-task-manager-five-sepia.vercel.app',
    credentials: true,
  })
);

app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Test Route
app.get('/', (req, res) => {
  res.json({
    message: 'Backend Running Successfully',
  });
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB Connected');

    app.listen(process.env.PORT || 5000, () => {
      console.log(
        `Server Running on Port ${
          process.env.PORT || 5000
        }`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });