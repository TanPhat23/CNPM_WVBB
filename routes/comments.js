const router = require('express').Router();

router.post('/', (req, res) => { 
    res.send('Created a new comment');
});