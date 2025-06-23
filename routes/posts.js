const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.send('Create a new post');
});

module.exports = router;