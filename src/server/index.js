var express = require('express');
var app = express();
 //API
let blogApi = require('./api/blog');

app.use(express.static('./src/public'));


//API dispath
app.use('/api/blog',blogApi)
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});