const express = require('express')
const DailiesService = require('../services/dailies.service')

const router = express.Router()
const service = new DailiesService()

router.get("/", async (req, res) => {

    // Llamar el serviicio que traiga los dailies
    const dailies = await service.all()

    res.status(200).json(dailies)
})

router.post("/", async (req, res) => {

    try {
        // Llamar el serviicio que traiga los dailies
        const body = req.body
        const newDaily = await service.create(body)
        res.status(200).json(newDaily)

    } catch (error) {
        console.log('error', error)
        res.status(403).send("Formato Incorrecto")
    }

})

module.exports = router