const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.get('/globe-data', (req, res) => {
  const dataPath = path.join(__dirname, 'data.json');
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading data file:', err);
      res.status(500).send('Error reading data file');
      return;
    }
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
