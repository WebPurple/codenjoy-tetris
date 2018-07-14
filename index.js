const WebSocket = require('ws')
const strategy = require('./strategy.js')

// const SERVER_HOST = 'ec2-54-88-40-91.compute-1.amazonaws.com'
const SERVER_HOST = '192.168.88.110'
const USER_NAME = 'nikitos'
const PORT = 8080

let server = `ws://${SERVER_HOST}:${PORT}/ws`
let wsClient = new WebSocket(`${server}?user=${USER_NAME}`)

wsClient.on('open', () => console.log('Connection opened'))
wsClient.on('close', () => console.log('Connection closed'))

wsClient.on('message', message => {
  let pattern = new RegExp(
    /^figure=(\w+)&x=(\d+)&y=(\d+)&glass=(.*)&next=(\w*)$/
  )
  let parameters = message.match(pattern)
  let result = strategy(
    parameters[1],
    parameters[2],
    parameters[3],
    parameters[4],
    parameters[5]
  )

  console.log('RAW_MESSAGE: ' + message)
  console.log('YOUR_RESPONSE: ' + result)

  wsClient.send(result)
})

console.log('Web socket client running at ' + server)
