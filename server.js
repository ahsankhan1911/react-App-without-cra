var path = require('path');

// Load .env file
require('dotenv').load({
  path: path.join(__dirname, './.env'),
  silent: true
});
var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();


require('./api/model')

// mongoose.connect(`mongodb://localhost/praipsDB`, { useMongoClient: true }, function (err) {
//   if (err) {
//      throw new Error(err);
//   }
//   else {
//     console.log("MongoDB is now Connected")
//   }
// });


//We will be connection the express REST APIs with our front end so we need CORS config for it
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});


//body parser middleware
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.use(express.static('./client/build'));

app.use('/api', require('./api'));


app.listen(process.env.PORT || 5000,function () {
  
  console.log('Running server on ' + process.env.PORT);
});
