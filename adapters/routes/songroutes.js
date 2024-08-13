const SongController = require("../controllers/songcontroller");

const express = requier('express');


const router = express.Router();


router.get('/all', SongController.all);