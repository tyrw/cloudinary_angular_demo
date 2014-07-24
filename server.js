var express       = require('express')
  , morgan        = require('morgan')
  , path          = require('path')
var app           = express()

app.use(express.static(path.join(__dirname, '/app')))
app.set('port', 5000)
app.use(morgan('dev'))

app.get('/', function (req, res) {
  res.sendfile('./app/index.html')
})

app.listen(5000, function () {
  console.log('listening on 5000')
})
