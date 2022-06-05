const MD = require("./tools/mdHandling.js")


module.exports = function(app){

    let web = {
        name: "Hacking and Coding" // Move to config
    }

    app.get('/', (req, res) => {
        res.render('main.pug', { title: 'Hacking and Coding', message: 'This works', web: web })
    })

    app.get('/i', (req, res) => {
        let buttons = MD.getButtons(req.query)
        res.render('mdrender.pug', { title: 'Hacking and Coding', message: 'MD RENDERING', buttons:buttons, web:web })
    })

    //other routes..
}