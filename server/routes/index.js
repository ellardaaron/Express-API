const express = require('express');         //bringing in express
const chirpsRouter = require('./chirps');   //bringing in chirps router


let router = express.Router();              //creating new router

router.use('/chirps', chirpsRouter);        //telling where to find file for router then using it


module.exports = router;                     //exporting router with the other routes from above on it