// We'll require our classes later
// For now, just create a basic server

const express = require('express');
const http = requre('http');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes - we'll implement these later
app.get('/', (req, res) => {
  res.json({ message: 'Task Manager API - Under Construction' });
});

// We'll add more routes later

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log('Available endpoints:');
  console.log('  GET  /  - Welcome message');
  // We'll list more endpoints as we create them
});