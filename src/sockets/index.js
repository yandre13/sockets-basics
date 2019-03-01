const {io} = require('../index')

 io.on('connection', (client)=>{
  console.log(`user: ${client}`)

/*   client.emit('sendMessage', {
   user: 'Admin',
   message: "hello"
  }) */
/*   client.emit('secondTwo', {
   user: 'Admin',
   second: true
  })
 */
  client.on('disconnect', ()=>{
   console.log('user disconnect')
  })
  //Listen to client
  client.on('sendMessage', (data, callback)=>{
   console.log(data)
   client.broadcast.emit('sendMessage', {
    data
   })
  })
  client.on('secondtwo', (two)=>{
   console.log(two)
  })
 })