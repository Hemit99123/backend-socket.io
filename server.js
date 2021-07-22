const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server,{
    cors:{
        origin:'*',
    }
})

app.get('/' , (req,res) => {
  res.send('Hello world')
})
io.on('connection', socket => {
  socket.on('message', ({ username, message }) => {
    io.emit('message', { username, message })
  })
})

server.listen( process.env.PORT || 7000, function() {
  console.log('listening on port 7000')
})