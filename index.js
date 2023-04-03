const express = require('express');
const app = express();
const port = 5000;
const db = require('./config/mongoose');
const Task = require('./models/task');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use('/',require('./routes'));

app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.static('./assets'));

app.listen(port, function(err){
    if (err){
        console.log(`Error on running server: ${err}`);
    }
    console.log(`Serving running successfully on port: ${port}`);
})