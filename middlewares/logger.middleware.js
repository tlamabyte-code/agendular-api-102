/**
 * Middleware para registrar errores 
 * @param {*} error 
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 */
function loggerHandler(error, request, response, next) {
    console.log('logger middleware')
    console.error(error)
    next()
}

module.exports = loggerHandler