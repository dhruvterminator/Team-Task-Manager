import express from 'express';

import Task from '../models/Task.js';

const router = express.Router();

// GET ALL TASKS
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();

    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// CREATE TASK
router.post('/', async (req, res) => {
  try {
    const task = await Task.create(req.body);

    res.json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// UPDATE TASK
router.put('/:id', async (req, res) => {
  try {
    const task =
      await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

    res.json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// DELETE TASK
router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: 'Task Deleted',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;