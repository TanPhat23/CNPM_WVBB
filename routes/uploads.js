const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    // Handle file upload logic here
    // For example, you can use multer to handle file uploads
    res.send('File uploaded successfully');
    }
);

module.exports = router;