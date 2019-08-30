let express = require('express')


let $ = express()

$.set("view engine", "ejs");


$.get("/", function(req, res) {
    res.render("index", {

        personnes: [{
                prenom: "monsieur",
                nom: "univer"
            },
            {
                prenom: "mister",
                nom: "strange"
            }
        ]
    })
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