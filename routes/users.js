const express = require('express');
const router = express.Router();
const {get_data, post_data, put_data, delete_data} = require('../controller/controller');

router.get('/api/MerakiData', get_data);
router.post('/api/MerakiData', post_data);
router.put('/api/MerakiData/:id', put_data);
router.delete('/api/MerakiData/:id', delete_data)

module.exports = router;