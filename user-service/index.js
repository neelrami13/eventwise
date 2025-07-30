const express = require('express');
const app = express();
app.use(express.json());

let users = [];

app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json({ message: 'User created', user });
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(3001, () => {
  console.log('User service running on port 3001');
});
