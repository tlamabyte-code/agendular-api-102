const express = require('express')
const dailiesRouter = require('./dailies.router')
// const itemsRouter = require('./items.router')

function routerApi(app) {
    const router = express.Router()

    app.use('/api/v1', router)

    router.use('/dailies', dailiesRouter)
    // router.use('/items', dailiesRouter)

}

module.exports = routerApi