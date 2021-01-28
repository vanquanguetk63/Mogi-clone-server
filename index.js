var express = require('express');
var app = express();
var port = 8080;
var userRoute = require('../server/routes/user.route');
var addressRoute = require('../server/routes/address.route');
var typeRoute = require('../server/routes/type.route');
app.listen(port, function() {
    console.log("server is opened At " + port );
});
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/api/user', userRoute);

app.use('/api/address', addressRoute);

app.use('/api/type', typeRoute);


