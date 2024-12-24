require('dotenv').config();
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
const multer = require('multer');

const app = express();
const prisma = new PrismaClient();
const upload = multer(); // Initialize multer to handle form-data

// Use CORS middleware
app.use(
  cors({
    origin: ['http://localhost:3001', 'https://instinctive-studio-assign-mincbt10p-rajaiswal6544s-projects.vercel.app/'], // Add allowed frontend origins
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
    credentials: true, // If cookies or auth headers are involved
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Server is running' });
});

// Fetch all students
app.get('/api/users', async (req, res) => {
  try {
    const students = await prisma.students.findMany();
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add a new student
app.post('/api/users', upload.none(), async (req, res) => {
  const { name, cohort, date_joined, last_login, status, courses } = req.body;
  try {
    const newStudent = await prisma.students.create({
      data: {
        name,
        cohort,
        date_joined: new Date(date_joined), // Convert to Date object
        last_login: new Date(last_login), // Convert to Date object
        status: status === 'true', // Convert to boolean
        courses: Array.isArray(courses) ? courses : JSON.parse(courses), // Ensure courses is an array
      },
    });
    res.status(201).json(newStudent);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

// Update a student's details
app.put('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, cohort, date_joined, last_login, status, courses } = req.body;

  try {
    const updatedStudent = await prisma.students.update({
      where: { id: Number(id) },
      data: {
        name,
        cohort,
        date_joined: date_joined ? new Date(date_joined) : undefined,
        last_login: last_login ? new Date(last_login) : undefined,
        status: status === 'true', // Convert to boolean
        courses: Array.isArray(courses) ? { set: courses } : undefined, // Use courses as an array directly
      },
    });
    res.status(200).json(updatedStudent);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

// Delete a student
app.delete('/api/users/:studentId', async (req, res) => {
  const { studentId } = req.params;
  try {
    await prisma.students.delete({
      where: { id: Number(studentId) },
    });
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

// Global error handler for unhandled routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
