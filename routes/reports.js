const router = require('express').Router();

router.post('/', (req, res) => {
    res.send('Report created successfully');
})

router.get('/:id', (req, res) => {
    const reportId = req.params.id;
    res.send(`Report with ID: ${reportId}`);
})