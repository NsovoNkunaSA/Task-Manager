const express = require('express');
const app = express();
const PORT = 3000;
const TaskList = require('./core/tasklist');

const taskList = new TaskList();


app.use(express.json());
app.use(express.static('..'));




app.get('/', (req, res) => {
  res.json({ message: 'Task Manager API', status: 'running' });
});


app.post('/api/tasks', (req, res) => {
  try {
    const task = taskList.addTask(req.body);
    res.status(201).json(task.toJSON());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


app.get('/api/tasks', (req, res) => {
  res.json(taskList.getAllTasks());
});


app.get('/api/tasks/:id', (req, res) => {
  const task = taskList.getTask(parseInt(req.params.id));
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task.toJSON());
});


app.put('/api/tasks/:id', (req, res) => {
  const updated = taskList.updateTask(parseInt(req.params.id), req.body);
  if (!updated) return res.status(404).json({ error: 'Task not found' });
  res.json(updated.toJSON());
});


app.delete('/api/tasks/:id', (req, res) => {
  const deleted = taskList.deleteTask(parseInt(req.params.id));
  if (!deleted) return res.status(404).json({ error: 'Task not found' });
  res.json({ message: 'Task deleted' });
});


app.get('/api/statistics', (req, res) => {
  res.json(taskList.getStatistics());
});


app.get('/api/tasks/filter/completed', (req, res) => {
  res.json(taskList.getCompletedTasks());
});


app.get('/api/tasks/filter/pending', (req, res) => {
  res.json(taskList.getPendingTasks());
});


app.listen(PORT, () => {
  console.log( `Server running at http://localhost:${PORT}`);
  console.log('Available endpoints:');
  console.log('  POST   /api/tasks           - Create task');
  console.log('  GET    /api/tasks           - Get all tasks');
  console.log('  GET    /api/tasks/:id       - Get single task');
  console.log('  PUT    /api/tasks/:id       - Update task');
  console.log('  DELETE /api/tasks/:id       - Delete task');
  console.log('  GET    /api/statistics      - Get stats');
});