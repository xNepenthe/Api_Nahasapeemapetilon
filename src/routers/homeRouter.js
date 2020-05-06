const Router

app.get('/', function (req, res) {
    res.send('Request: ' + req)
})

module.exports = homeRouter;