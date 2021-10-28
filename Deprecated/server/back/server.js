const express = require("express");
const cors = require('cors')
const app = express();
const port = 4444;

app.use(cors());

app.get('/hi', (req, res) => {
  res.json({message: 'Hello'});
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })