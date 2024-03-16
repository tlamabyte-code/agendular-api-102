const express = require("express")
const DailiesService = require('../services/dailies.service')

const router = express.Router(); // Router
const service = new DailiesService(); // Dailies Service

router.get("/",  async (req, res) => {
    const dailies = await service.all(); 
    res.status(200).json(dailies)
});

// Crear nuevo daily con sequelize ORM (dev07)
router.post("/", async (req, res) => {
    try {
        const body = req.body
        const newDaily = await service.create(body)
        res.status(201).json(newDaily)
    } catch(error) {
        console.log('error', error)
        res.status(403).send("Formato Incorrecto")
    }
});

// router.get("/:id", async (req, res, next) => {
//         const { id } = req.params

//         const daily = await service.findOne(id);
//         res.json(daily);
        
// });

// router.get("/",  async (req, res) => {
//     res.status(200).json([])
// });

// // Crear nuevo daily con sequelize ORM (dev07)
// router.post("/", async (req, res) => {
//     // const newDaily = await service.create(body);
//     res.status(201).json({});
// });

module.exports = router