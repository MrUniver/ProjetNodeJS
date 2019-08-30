let express = require('express')
let path = require('path')

let $ = express()

$.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/vues/index.html"))
})

$.get('/inscription/', (req, res) => {

})

$.get('/confirmtoken-:token([0-9]+)-:email', (req, res) => {
    res.send('<h1>Salut mec</h1>')
    console.log('confirmation')
})

$.get('/logout', (req, res) => {

})
$.get("/profil/", function(req, res) {
    console.log("inscription")
})


$.listen(8080, 'localhost', function() {
    console.log("Serveur démarré")
})

$.all('*', (req, res) => {
    res.send('<h1>Page existe pas</h1>')
})