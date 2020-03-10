const express = require ('express');    //pulling in express after installing it
const cors = require('cors');           //pulling in cors after installing it
const path = require('path');
const apiRouter = require('./routes');  //looks for index in folder

let app = express();


app.use(cors());                        //"hooking-up" middle-ware
app.use(express.json());                //"hooking-up" middle-ware. Body parser.

app.use('/api', apiRouter);             //use middleware router which is coming from index.js file this has been set up with: const apiRouter = require('./routes');


app.use(express.static(path.join(__dirname, "../client")));




app.listen(3000);                       //listing on port 3000