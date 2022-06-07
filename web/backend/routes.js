const MD = require("./tools/mdHandling.js")


module.exports = function(app){

    let web = {
        name: "Hacking and Coding" // Move to config
    }

    app.get('/', (req, res) => {
        MD.getTLFolders().then(MDTL =>{ //make it so we only have to call this once
            res.render('main.pug', { title: 'Hacking and Coding', web: web, MDTL:MDTL })
        })
    })

    app.get('/i', (req, res) => {
        
        MD.getTLFolders().then(MDTL =>{
            let buttons = MD.getButtons(req.query)
            res.render('mdrender.pug', { title: 'Hacking and Coding', message: 'MD RENDERING', buttons:buttons, web:web, MDTL:MDTL  })
        })
    })

    //other routes..
}