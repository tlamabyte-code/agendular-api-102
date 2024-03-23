const express = require('express')
const cors = require('cors')
const routerAPI = require('./routes')
const loggerHandler = require('./middlewares/logger.middleware')
const { errorHandler } = require('./middlewares/errors.middleware')

const app = express()
const PORT = 3000

// Middleware que analiza el cuerpo de las solicitudes
// convierte la data de formato JSON a objeto de JS
// y es accesible por medio req.body
app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
    // req. request
    // res. response

    res.send('Server en express')
})

routerAPI(app)

// Middlewares después del enrutamiento 
// para tratar con las solicitudes de los clientes
app.use(loggerHandler)
app.use(errorHandler)

// Endpoint para visualizar los query-params de un request
// app.get('/query', (req, res) => {
//     const queryParams = req.query;
//     res.json({ data: queryParams });
// });

// Endpoint para visualizar los path-params de un request
// app.get('/path/:id', (req, res) => {
//     const idParam = req.params.id;
//     res.json({ data: idParam });
// });

// Endpoint para visualizar el body-param de un request
// app.post('/body', (req, res) => {
//     const bodyParams = req.body;
//     res.json({ data: bodyParams });
// });

// Endpoint que renderiza HTML
// app.get('/view', (req, res) => {

//     const tablaHTML = `
//         <table border="1">
//             <thead>
//                 <tr>
//                 <th>Nombre</th>
//                 <th>Edad</th>
//                 <th>Correo</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                 <td>Juan</td>
//                 <td>30</td>
//                 <td>juan@example.com</td>
//                 </tr>
//                 <tr>
//                 <td>Maria</td>
//                 <td>25</td>
//                 <td>maria@example.com</td>
//                 </tr>
//                 <tr>
//                 <td>Pedro</td>
//                 <td>35</td>
//                 <td>pedro@example.com</td>
//                 </tr>
//             </tbody>
//         </table>
//         `;
//     res.type('html').send(tablaHTML)
// })

// Endpoint para Estatus HTTP
// app.get('/status', (req, res) => {
//     res.status(200).send('Solicitud Procesada')
// });


app.listen(PORT, () => {
    console.log(`Server corriendo en ${PORT}`)
})


