const express = require('express')
const app = express()
require("dotenv").config()

port = process.env.PORT || 3000
app.use('/sentance', express.static('public'))

app.get('/get', (req, res) => {
    res.sendFile('./dist/index.html', { root: __dirname })

})
app.get('/data', (req, res) => {
    res.send({ name: 'ofer' })
})
app.get('/dataJson', (req, res) => {
    res.send(JSON.stringify({ name: 'ofer' }))
})

app.listen(port, (req, res) => {
    console.log(`running on ${port}`)
})