/**
 * Middleware para manejo de errores del servidor
 * @param {*} req 
 * @param {*} res 
 */
function errorHandler(req, res) {
    res.status(500).json({
        message: "Operación Inválida, revisa logger"
    })
}

module.exports = { errorHandler }