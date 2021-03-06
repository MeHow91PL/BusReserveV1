const express = require('express');

const app = express();
const port = 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/', (req, res) => {
    res.send("Siemanero");
  });

app.listen(port, () => console.log(`Listening on port ${port}`));