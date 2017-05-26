var express = require('express'),
    getStamps = require('./dateObj'),
    app = express();

app.set('view engine', 'ejs');

//Home Route
app.get('/', function(req, res) {
    res.render('landing');
});

//Request Route
app.get('/:timestamp', function(req, res) {
    var request = req.params.timestamp;
    var timeStamps = JSON.stringify(getStamps(request));
    res.send(timeStamps);
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("Listening...");
});