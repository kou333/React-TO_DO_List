// server/server.js
// server.js
const express = require('express');
const { Pool } = require('pg');
const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(express.json());

// Create a task
app.post('/tasks', async (req, res) => {
  const { title, description, recurrence } = req.body;
  const result = await pool.query(
    'INSERT INTO tasks (title, description, recurrence) VALUES ($1, $2, $3) RETURNING *',
    [title, description, recurrence]
  );
  res.json(result.rows[0]);
});

// Read all tasks
app.get('/tasks', async (req, res) => {
  const result = await pool.query('SELECT * FROM tasks');
  res.json(result.rows);
});

// Update a task
app.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, recurrence } = req.body;
  const result = await pool.query(
    'UPDATE tasks SET title=$1, description=$2, recurrence=$3 WHERE id=$4 RETURNING *',
    [title, description, recurrence, id]
  );
  res.json(result.rows[0]);
});

// Delete a task
app.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM tasks WHERE id=$1', [id]);
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
