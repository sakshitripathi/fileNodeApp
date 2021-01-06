var express = require('express'),
    app = express();
    port = 3000,
    mongoose = require('mongoose'), //created model loading here
    bodyParser = require('body-parser');
//var formidable = require('formidable');
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs") 

       


var routes = require('./api/routes/fileRoutes'); //importing route
routes(app); //register the route


app.listen(port);