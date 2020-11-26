const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/shrub1.jpg');
})

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));
