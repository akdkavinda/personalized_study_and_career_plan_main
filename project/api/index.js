const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

var category = require('./routes/category')
var leaf = require('./routes/leaf')

var app = express()
app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:3000'}))
app.listen(3500,()=>console.log('Server started at : 3500'))

app.use('/category',category)
app.use('/leaf',leaf)
app.use(express.static('public'))