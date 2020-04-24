const { vertifytesttoken } = require('../middlewares/Auth')
const testcontroller = require('../controller/testController')
const authcontroller = require('../controller/AuthController')


module.exports = (app) =>{
    app.post('/api/test', testcontroller.store)
    app.get('/api/test', vertifytesttoken ,testcontroller.find)
    app.get('/api/test/one', testcontroller.findOne)
    app.get('/api/test/id/:id', testcontroller.findOne)
    app.put('/api/test', testcontroller.update)
    app.delete('/api/test/id/:id', testcontroller.delete)

    app.get('/api/token',authcontroller.testtoken)
}
