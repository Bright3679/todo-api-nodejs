const express = require('express')
const mongoose = require('mongoose')
const databaseurl = 'mongodb://localhost:27017/taskdata'
mongoose.connect(databaseurl)
    .then(()=> console.log('connected to mongodb'))
    .catch(error=> console.error ('error connecting',error))
const app = express()
app.use(express.json())
const http = require('http').createServer(app)
const PORT = process.env.PORT || 3000
const todoroute = require('./routes/todo')
app.use('/tasks', todoroute)
http.listen(PORT , ()=>{
    console.log("listening .. ", PORT)
})  
app.get('/', (req,res)=>{
    res.send('hello i am alive')
})