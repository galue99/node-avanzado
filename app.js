const port = 3000;

const express = require('express');
const app = express();

const router = require('./routes/router.js');

app.use('/',router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
