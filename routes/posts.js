const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.send('Create a new post');
});
router.put('/:id', (req, res) => {
    const PostsId = req.params.id;
    res.send(`Post with ID: ${PostsId}`);
})

module.exports = router;