const Authorization = {}

Authorization.retrieveToken = (req) =>{
    let token = null
    const bearerHeader = req.headers['authorization']

    if(typeof bearerHeader !== 'undefined'){
        let bearer = bearerHeader.split(' ')
        token = bearer[1]
    }

    return token
}

module.exports = Authorization