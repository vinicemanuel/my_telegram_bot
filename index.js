var http = require('http')

var port = process.env.port || 8080

require('./TelegramBot.js')()

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.write("bot rodando")
    res.end
}).listen(port)