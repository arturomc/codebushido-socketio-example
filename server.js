var server = require('express')(),   
    http	= require('http').Server(server);


var port 	= process.env.PORT || 3000;
//server.use("/", express.static(__dirname+"/public/"));     

server.get('/', function(req,res){
    res.send('Hi there');
});

http.listen(port, function(){
    console.log('Server up and your gonna hear me roar in port ' + port);
})