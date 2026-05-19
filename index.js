const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.get('/user/:id', (req, res) => {
  if (req.params.id === '42') {
    return res.json({ id: 42, name: 'John' });
  }
  res.status(404).json({ error: 'Not found' });
});

module.exports = app;