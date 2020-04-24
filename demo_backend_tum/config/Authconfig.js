const authconfig = {}
require('dotenv').config()

authconfig.jwt_public_key = process.env.PUBLIC_KEY
authconfig.jwt_private_key = process.env.PRIVATE_KEY

module.exports = authconfig