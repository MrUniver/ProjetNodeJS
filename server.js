let express = require('express')

let $ = express()

$.get("/", function(req, res) {
    console.log("salut")
})


$.get("/profil/", function(req, res) {
    console.log("inscription")
})


$.listen(8080, 'localhost', function() {
    console.log("Serveur démarré")
})