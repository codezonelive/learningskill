const testmodel = require('../models/Test')
const { ObjectId } = require('mongoose').Types

const testcontroller = {}

testcontroller.store = async(req,res) =>{
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
}

testcontroller.find = async(req, res) =>{
    try {
        let result = await testmodel.find({})
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({error:error})
    }
}

testcontroller.findOne = async(req,res) =>{
    try {
        let result = await testmodel.findOne({})
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({error:error})
    }
}

testcontroller.findById = async(req, res) =>{
    try {
        const { id } = req.params
        let result = await testmodel.findById(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({error:error})
    }
}

testcontroller.update = async(req, res) =>{
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
}


testcontroller.delete = async(req, res) =>{
    try {
        const { id } = req.params
        await testmodel.deleteOne({_id: ObjectId(id)})
       res.status(200).json({message:'delete success'}) 
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

module.exports = testcontroller