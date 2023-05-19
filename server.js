const express = require('express')
const app = express()
const port = 3000

console.log('Iniciando Servidor ..')

app.use(express.static(__dirname + '/'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'index.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})