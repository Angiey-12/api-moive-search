var express = require('express');
var request = require('request');


var app = express();
//设置模板引擎为ejs
app.set('view engine', 'ejs');


//index page
app.get('/', function(req, res){
    res.render('search');

});


app.get('/results', function(req, res){


    var apikey = 'ccb8e748';
    var query = req.query.search;
    var url = 'http://www.omdbapi.com/?apikey=' + apikey + '&s=' + query;
    
    request(url, function(error, response, body){


            console.log(error); 
            console.log(response); 
            console.log(body); 
                   var data = JSON.parse(body);
                   res.json('results', {data: data}); 

    });
    
});



// app.get('/results', function(req, res){
//     var apikey = 'ccb8e748';
//     var query = req.query.search;
//     var url = 'http://www.omdbapi.com/?apikey=' + apikey + '&s=' + query;
    
//     request(url, function(error, response, body){
        
        
//             var data = JSON.parse(body)
//             res.render('results', {data: data});
            
        
//     });
// });

 app.listen(3000, function(){
     console.log('Started on port: 3000');
 });
