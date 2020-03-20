
const express= require('express');
const app = express();
const port = 9000;

app.use('/',require('./routes'));


app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
})