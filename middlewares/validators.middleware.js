function schemaValidatorHandler(schema, property) {

    // Closure JS
    // Encapsular variables en un ambito
    return (req, res, next) => {
        const data = req[property]

        const { error } = schema.validate(data)

        if (error) {
            res.status(400).json({
                message: "Datos inválidos, vuelve a intentar"
            })
        } else {
            next()
        }
    }

}

module.exports = {
    schemaValidatorHandler
}