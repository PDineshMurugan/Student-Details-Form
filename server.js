const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();

// Body parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'MySQL518',
  database: 'students_db'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database.');
});

// Create students table if it doesn't exist
const createStudentsTable = `CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    regno VARCHAR(255),
    phoneno VARCHAR(255),
    course VARCHAR(255),
    year INT
)`;

connection.query(createStudentsTable, (err, result) => {
  if (err) {
    throw err;
  }
  console.log("Students table created or already exists");
});

// POST route to add student data
app.post('/student', (req, res) => {
  const { name, email, regno, phoneno, course, year } = req.body;
  const query = "INSERT INTO students (name, email, regno, phoneno, course, year) VALUES (?, ?, ?, ?, ?, ?)";
  
  connection.query(query, [name, email, regno, phoneno, course, year], (err, result) => {
    if (err) {
      return res.status(500).send('Error inserting student data.');
    }
    res.send('Student details added successfully!');
  });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
