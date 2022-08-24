const express = require('express')
const app = express()
const port = 8080
const path = require('path');


app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, '/index.html'));
})


app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send(`I'm minh`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})