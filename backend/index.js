const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors'); // Import cors
const multer = require('multer');

const app = express();
const prisma = new PrismaClient();
const upload = multer(); // Initialize multer to handle form-data

// Use CORS middleware

app.use(cors({
  origin: 'https://frontend-assignment-mjxebnkm1-chirags-projects-388b236c.vercel.app', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
  credentials: true, // If cookies or auth headers are involved
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/users', async (req, res) => {
    try {
      const students = await prisma.students.findMany({
       
      });
      res.json(students);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  

  app.post("/api/users", upload.none(), async (req, res) => {
    const { name, cohort, date_joined, last_login, status, courses } = req.body;
    try {
      const newStudent = await prisma.students.create({
        data: {
          name,
          cohort,
          date_joined: new Date(date_joined), // Convert to Date object
          last_login: new Date(last_login),   // Convert to Date object
          status: status === "true",         // Convert to boolean
          courses: Array.isArray(courses) ? courses : JSON.parse(courses), // Ensure courses is an array
        },
      });
      res.status(201).json(newStudent);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // PUT request to update a student's details, including courses
  app.put('/api/users/:id', async (req, res) => {
    const { id } = req.params; // Extract the student ID from the URL
    const { name, cohort, date_joined, last_login, status, courses } = req.body;
  
    try {
      const updatedStudent = await prisma.students.update({
        where: { id: Number(id) }, // Ensure ID is numeric
        data: {
          name,
          cohort,
          date_joined: date_joined ? new Date(date_joined) : undefined, // Convert to Date object if provided
          last_login: last_login ? new Date(last_login) : undefined, // Convert to Date object if provided
          status: status === 'true', // Convert to boolean
          courses: Array.isArray(courses) ? { set: courses } : undefined, // Use courses as an array directly
        },
      });
  
      res.status(200).json(updatedStudent);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  
  app.delete("/api/users/:studentId", async (req, res) => {
    const { studentId } = req.params;
    try {
      await prisma.students.delete({
        where: { id: Number(studentId) },
      });
      res.status(204).end();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
