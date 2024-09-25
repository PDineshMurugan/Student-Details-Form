# Student Details Form

## Description

The **Student Details Form** is a web application that allows users to submit and store their student information, including name, email, registration number, phone number, course, and year of study. This application utilizes a Node.js server with Express for handling requests and a MySQL database for data storage. It features a simple, user-friendly interface built with HTML and CSS.

## Features

- **User-friendly Form**: Easily input student details.
- **Data Validation**: Ensures required fields are filled.
- **Responsive Design**: Adapts to various screen sizes for better user experience.
- **Database Integration**: Stores submitted data in a MySQL database.
- **Confirmation Messages**: Feedback provided upon successful data submission.

## Technologies Used

- **Frontend:**
  - HTML
  - CSS
  - Google Fonts (Poppins)
  
- **Backend:**
  - Node.js
  - Express.js
  - MySQL

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/PDineshMurugan/student-details-form.git
   Navigate to the project directory:

# Navigate to the project directory:
cd student-details-form
Install the required dependencies:

# Install the required dependencies:
npm install

# Set up the MySQL Database:
Create a MySQL database named students_db.
Ensure that the connection settings in server.js match your local MySQL configuration.
Start the Node.js server:

# Start the Node.js server:
node server.js
Access the application:
Open your web browser and navigate to http://localhost:3000/student to fill out the form.

# Usage
Fill in all required fields in the form.
Click the "Submit" button to store the student details in the database.
Upon successful submission, a confirmation message will be displayed.

# Contributing
Contributions are welcome! If you have suggestions for improvements or encounter any issues, please feel free to open issues or submit pull requests.

# License
This project is licensed under the MIT License.
