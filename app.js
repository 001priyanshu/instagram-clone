const PORT = 5000;
const express = require('express');
const app = express();


app.get('/',(req,res) => {
    return res.send("hello world");
} );


app.listen(PORT,(err) => {
    if(err){
        console.log("Error in creating server");
        return;
    }
    console.log("server is up and running");
    
})