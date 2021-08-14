const express = require('express');
const path = require('path');
const c = require('ansi-colors');
const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')))
app.use(express.static(path.resolve(__dirname, '../example')))

const port = 3000;

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!\n${c.cyan(`http://127.0.0.1:${port}/index.html`)}`);
});