const express = require('express')
const routerAPI = require('./routes')

const app = express()
const PORT = 3000

app.use(express.json())

// Rutas del Aplicativo (API)
app.get('/', (req, res) => {
    res.send('Server en express')
})

routerAPI(app)


// EJEMPLOS PARAMS
// Query-Params
app.get('/query', (req, res) => {
    const queryParams = req.query 
    res.json({ data: queryParams })
})

// Path-Params
app.get('/path/:id', (req, res) => {
    const idParam = req.params.id 
    res.json({ data: idParam })
})

// Body-Param
app.post('/body', (req, res) => {
    const bodyParam = req.body
    res.json({ data: bodyParam })
})

// Exponer Servicio Express
app.listen(PORT, () => {
    console.log(`Server corriendo en ${PORT} ${process.env.NODE_ENV}`)
})