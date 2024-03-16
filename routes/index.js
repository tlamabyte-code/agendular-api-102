const express = require('express')
const dailiesRouter = require('./dailies.router')

function routerApi(app) {
    const router = express.Router()
    app.use('/api/v1', router)
    

    router.use('/dailies', dailiesRouter); // (dev07)
}

// Exportación de modulo para uso en otros archivos
module.exports = routerApi