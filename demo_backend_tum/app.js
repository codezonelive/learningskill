const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const port = 3000

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

//
const { ObjectId } = require('mongoose').Types
const testmodel = require('./models/Test')

app.get('/', async(req, res) =>{
    try {
        res.send("Hello world")
    } catch (error) {
        res.send(error)   
    }
})

app.post('/testpost' , async(req, res)=>{
    try {
        var { names , surname ,  ar} = req.body
        console.log(ar)
        res.send('my name is : ' + names + " " + surname)
    } catch (error) {
        res.send(error)
    }
})

app.post('/api/test', async(req, res) =>{
    try {
        const { name, phone } = req.body
        const testsave = new testmodel({
            name,
            phone
        })
        await testsave.save()
        
        res.status(200).json({message:'pass'})
    } catch (error) {
        res.status(400).json({error:error})
    }
})

app.get('/api/test', async(req, res) =>{
    try {
        let result = await testmodel.find({})
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({error:error})
    }
})

app.get('/api/test/one', async(req, res) =>{
    try {
        let result = await testmodel.findOne({})
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({error:error})
    }
})

app.get('/api/test/id/:id', async(req, res) =>{
    try {
        const { id } = req.params
        let result = await testmodel.findById(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({error:error})
    }
})


app.put('/api/test', async(req, res) =>{
    try {
        const { id, name } = req.body
        let query = { _id: ObjectId(id) }
        let update = { $set:{
            name
        }}
        let option = { upsert: true,new: true}
        let result = await testmodel.updateOne(query,update,option)
        console.log(result)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({error:error})
    }
})

app.delete('/api/test/id/:id', async(req, res) =>{
    try {
        const { id } = req.params
        await testmodel.deleteOne({_id: ObjectId(id)})
       res.status(200).json({message:'delete success'}) 
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
})



app.listen(port, () => console.log('server start port ' + port)) 
