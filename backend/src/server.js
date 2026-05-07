import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// Demo Tasks
let tasks = [
  {
    _id: 1,
    title: 'Build Dashboard',
    status: 'Pending',
    priority: 'High',
  },
];

// GET TASKS
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// CREATE TASK
app.post('/api/tasks', (req, res) => {
  const newTask = {
    _id: Date.now(),
    ...req.body,
  };

  tasks.push(newTask);

  res.json(newTask);
});

// UPDATE TASK
app.put('/api/tasks/:id', (req, res) => {
  tasks = tasks.map((task) =>
    task._id == req.params.id
      ? { ...task, ...req.body }
      : task
  );

  res.json({
    message: 'Task Updated',
  });
});

// DELETE TASK
app.delete('/api/tasks/:id', (req, res) => {
  tasks = tasks.filter(
    (task) => task._id != req.params.id
  );

  res.json({
    message: 'Task Deleted',
  });
});

// TEST ROUTE
app.get('/', (req, res) => {
  res.json({
    message: 'Backend Running Successfully',
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on ${PORT}`);
});