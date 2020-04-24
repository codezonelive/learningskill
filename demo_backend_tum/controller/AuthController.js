require('dotenv').config()
const jwt = require('jsonwebtoken')

const authcontroller = {}

authcontroller.testtoken = async(req,res)=>{
    try {
        let token = await jwt.sign({type: 'testtoken'},process.env.PUBLIC_KEY,{expiresIn: '1d'})
        res.status(200).json({token:token})
    } catch (error) {
        res.status(400).json({error:error})
    }
}


module.exports = authcontroller