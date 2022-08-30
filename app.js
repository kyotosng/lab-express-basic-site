const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/public/kurz_banner.jpeg")   
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/views/home.html")   
})

app.get('/about', function (req, res) {
    res.sendFile(__dirname + "/views/about.html")   
})

app.get('/gallery', function (req, res) {
    res.sendFile(__dirname + "/views/gallery.html")   
})

app.get('/works', function (req, res) {
    res.sendFile(__dirname + "/views/works.html")   
})

app.listen(3000)
