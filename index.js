const express = require("express")
require("dotenv").config()
const sequelize = require("./db")
const models = require('./models/model')
const Cryptojs = require('crypto-js')
const cors = require('cors')
const routes = require('./routes/index')

const http = require('http')
const HOST=process.env.HOST
const PORT = process.env.PORT
const app = express()
const server = http.createServer(app)


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    next();
  });
app.use(cors())
app.use(express.json())
app.use(express.static('public'));

app.use('/api',routes)


const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        server.listen(PORT, HOST, () => console.log(`Server start on ${HOST}:${PORT}`))
    }
    catch(e){
        console.log(e)
    }
}

start()