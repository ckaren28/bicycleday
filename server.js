var express = require('express');
var app = express();
var path = require('path');





app.use(express.static(path.join(__dirname, "./client")));
app.use(express.static(path.join(__dirname, './bower_components')));

// require('./server/config/routes.js')(app);


app.listen(8000, function(){
    console.log('listening on port 8000');
});
