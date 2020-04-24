const jwt = require('jsonwebtoken')
const authorization = require('../helpers/authorization')
require('dotenv').config()
const Auth = {}


Auth.vertifytesttoken = async(req,res,next) =>{
    try {
        const token = authorization.retrieveToken(req)
        if(!token) { throw { message: "Untoken" }}

        const { err, decode } = await jwt.verify(token, process.env.PUBLIC_KEY, (err, decode) => ({ err,decode}))
        if(err) { throw { message: "error"}}

        next();

    } catch (error) {
        res.status(400).json({error:error})
    }
}

module.exports = Auth