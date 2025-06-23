const router = require('express').Router();

router.post('/', (req, res) => { 
    res.send('Created a new comment');
});

router.get('/:id', (req, res) => {
    const commentId = req.params.id;
    res.send(`Comment with ID: ${commentId}`);
})

router.delete('/:id', (req, res) => {
    const commentId = req.params.id;
    res.send(`Deleted comment with ID: ${commentId}`);
});