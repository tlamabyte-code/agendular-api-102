const express = require('express')
const routerAPI = require('./routes')

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => {
    // req. request
    // res. response

    res.send('Server en express')
})

routerAPI(app)

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


