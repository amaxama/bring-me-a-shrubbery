const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.sendFile('/shrub1.jpg', { root: __dirname });
})

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));
