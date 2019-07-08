// Dependencies
const express = require('express');

// Express config.
const db = require('./data/db');
const server = express();
server.use(express.json());
const port = 5000;

// Create a user
server.post('/api/users', (req, res) => {
  const { name, bio } = req.body;
  const userInfo = req.body;

  console.log(`Name: ${name}, Bio: ${bio}`);

  if (name && bio) {
    db.insert(userInfo)
      .then(user => {
        console.log(user);
        res.status(201).json(user);
      })
      .catch(error => {
        res.status(500).json({
          error: 'There was an error while saving the user to the database'
        });
      });
  } else {
    res.status(400).json({
      errorMessage: 'Please provide a name and biography for the user.'
    });
  }
});

// Read all users
server.get('/api/users', (req, res) => {
  db.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(() => {
      res
        .status(500)
        .json({ message: 'There was an error while retrieving the users' });
    });
});

// Read specific user
server.get('/api/users/:id', (req, res) => {
  const id = req.params.id; // specific user id
  db.findById(id)
    .then(user => {
      if (user) {
        // if we have the user pulled in through dynamic id
        res.status(200).json(user);
      } else {
        // dude ain't there
        res
          .status(404)
          .json({ message: 'The user with the specified ID does not exist.' });
      }
    })
    .catch(() => {
      // something goes wrong (api err from what's being thrown at it?)
      res
        .status(500)
        .json({ error: 'The user information could not be retrieved.' });
    });
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
