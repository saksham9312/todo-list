const express = require('express');
const app = express();
const port = 5000;

app.listen(port, function(err){
    if (err){
        console.log(`Error on running server: ${err}`);
    }
    console.log(`Serving running successfully on port: ${port}`);
})