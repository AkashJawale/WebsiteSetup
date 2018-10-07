var express = require('express'),// to create serverno
    app = express()
        bodyParser = require('body-parser'),
        path = require('path');


    app.use(bodyParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended : false}));

    app.use(express.static(path.join(__dirname,'client')));

app.get('/',function(req,res){
    res.sendfile(__dirname+'/client/index.html');
// res.render('index',{title : 'Computer Not Working'});
})

app.listen(3000);

console.log('server started on 3000');
module.exports = app;