const mysql = require('mysql2');  //Import mysql package from node_modules.
const express = require('express'); //Import express from node_modules.
//The PORT designation and the app expression
const PORT = process.env.PORT || 3001;
const app = express();


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: '',
    database: 'election'
  },
  console.log('Connected to the election database.')
);

//tets database
db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

//The function that will start the Express.js server on port 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
