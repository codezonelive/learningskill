const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

const port = process.env.PORT

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('combined'))


//connect mongo
const url = 'mongodb://localhost:27017/learning'
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, poolSize: 5})
var db = mongoose.connection
db.on("error", console.log.bind(console, "connection error"))
db.once("open", (callback) =>{
    console.log("connection succeded")
})

var whiteListHost = ['http://localhost:8080']
const corsOptions = {
  origin: function (origin, callback) {
      if (whiteListHost.indexOf(origin) !== -1 || !origin) {
          callback(null, true); // ALLOW CORS
      } else {
          callback('Forbidden (not allowed by CORS) ', false); // BLOCKED BY CORS
      }
  },
  allowedHeaders: ['Origin', 'X-Requested-With', 'X-CSRF-TOKEN', 'Content-Type', 'Accept', 'Authorization','x-www-form-urlencoded'],
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

const API = require('./routes/api')
API(app)


app.listen(port, () => console.log('server start port ' + port)) 
