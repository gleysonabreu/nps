import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  return response.json({
    name: 'Hy'
  })
});

app.listen(3333, () => console.log('Server running.'));