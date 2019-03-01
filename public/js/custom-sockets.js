const socket = io()
  socket.on('connect', ()=>{
   console.log('conectada')
  })
  socket.on('disconnect', ()=>{
   console.log('perdimos')
  })
  //Emits => send information
  socket.emit('sendMessage', {
   user: 'Yaser',
   message: 'Hello sockets <3',
   },
   function(res){
    console.log(res)
   })
  //Listen to information
  socket.on('sendMessage', (resp)=>{
   console.log(resp)
  })
  socket.on('secondTwo', (res)=>{
   console.log(res)
  })