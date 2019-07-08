// Dependencies
const express = require('express');

// Express config.
const db = require('./data/db');
const server = express();
server.use(express.json());
const port = 5000;

// Create a user
server.post('/api/users', (req, res) => {
  const userInfo = req.body;
  console.log(userInfo);
  db.insert()
    .then()
    .catch();
});

// Read all users
server.get('/api/users', (req, res) => {
  db.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// Read specific user
server.get('/api/users/:id', (req, res) => {
  db.findById()
    .then()
    .catch();
});

// Update a user
server.put('/api/users/:id', (req, res) => {
  db.update()
    .then()
    .catch();
});

// Delete a user
server.delete('/api/users/:id', (req, res) => {
  db.remove()
    .then()
    .catch();
});

// Initialize the server
server.listen(port, () => {
  console.log(`Server running on ${port}`);
});
