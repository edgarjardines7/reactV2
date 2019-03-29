var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var path = require('path')
 //API
let blogApi = require('./api/blog');

//Helpers
var hbsHelper = require('../lib/handlebars');

//Utils 
var isMobile = require('../lib/utils/device');

//Public
app.use(express.static('./src/public'));

//Handlebars setup
app.engine('.hbs',exphbs({
  extname:'.hbs',
  helpers: hbsHelper
}));


//View Engine Setup
app.set('views',path.join(__dirname,'./views'));
app.set('view engine', 'hbs');

//Device detector
app.use((req,res,next) => {
  res.locals.isMobile = isMobile(req.headers['user-agent']);
  return next();
})
//API dispath
app.use('/api/blog',blogApi);


//Sending all the traffic to React
app.get('*',(req,res)=>{
  res.render('frontend/index',{
    layout:false
  });  
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});