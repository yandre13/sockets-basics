const express = require('express'),
 app = express(),
 socketIO = require('socket.io'),
 http = require('http'),
 path = require('path')


 
 //Init
 
 app.set('port', process.env.PORT || 3002)
 
 
 //Routes
 
 
 //Static
 
 //IO
 app.use(express.static(path.resolve(__dirname, '../public')))

 //Conf sockets
 const server = http.createServer(app)
  module.exports.io = socketIO(server)

  //Connection
  require('./sockets')

 //Server on
 server.listen(app.get('port'),()=>console.log(`Server on port ${app.get('port')}`))

