const express = require('express');
const postRouter = require('./routes/posts.js');
const uploadRouter = require('./routes/uploads.js');
const commentRouter = require('./routes/comments.js');

const app = express();
const port = 8080;

app.use('/posts', postRouter);
app.use('/uploads', uploadRouter);
app.use('/comments', commentRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});