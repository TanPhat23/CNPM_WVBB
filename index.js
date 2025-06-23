const express = require('express');
const postRouter = require('./routes/posts.js');

const app = express();
const port = 8080;

app.use('/posts', postRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});