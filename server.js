//reference to the ExpressJS module
const express = require('express')
//another module needed to handle requests containing JSONs
const bodyParser = require('body-parser')
//init
const app = express()
//choosing the port
const port = 3000

dirName = '/public'

//telling the ExpressJS app to use the bodyparser.
//This has to ‘happen’ before other middleware.
app.use(bodyParser.json())

//Middleware that handles GET requests to ‘/’
app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/public/index.html');
})

//start the server
app.listen(port, function () {
    console.log(`Genesis Point initialized on Port ${port}!!`)
})

// Send the css file
app.get('/public/url/style.css', function (req, res, next) {
    res.sendFile(__dirname + '/public/url/style.css');
})

// Send the javascript 
app.get('/public/url/script.js', function (req, res, next) {
    res.sendFile(__dirname + '/public/url/script.js');
})

// Send the json file and find the amount 
// of time it took to send data to the server
app.post('/input', function (req, res, next) {

    res.sendStatus(200);
})

// Send the user to the site that displays the data of the user
app.get("/about", function (req, res, next) {
    res.sendFile(__dirname + "/public/about.html");
})