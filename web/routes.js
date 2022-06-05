module.exports = function(app){

    app.get('/', (req, res) => {
        res.render('main.pug', { title: 'Hacking and Coding', message: 'This works' })
    })

    app.get('/i', (req, res) => {
        res.render('mdrender.pug', { title: 'Hacking and Coding', message: 'MD RENDERING' })
    })

    //other routes..
}