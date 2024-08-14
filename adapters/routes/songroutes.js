const express = require('express');
const SongController = require("../controllers/songcontroller");

const router = express.Router();

router.get('/all', SongController.all);

module.exports = router;
