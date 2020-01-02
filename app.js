var express = require('express');
var app = express();

app.use(express.static('public'))
app.engine('.html', require('ejs').__express);
app.set('views', __dirname);
app.set('view engine', 'html');

//app.locals.barChartHelper = require('./bar_chart_helper');


app.get('/', function(req, res) {
  res.render('index', { });
});


app.listen(3005);
console.log('listening on port 3005');
