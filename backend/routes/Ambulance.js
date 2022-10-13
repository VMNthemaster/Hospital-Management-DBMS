const express = require('express')
const {Ambulance} = require('../models')

const router = express.Router()

router.get('/', async (req, res) => {
    let allAmbulances
    try {
        allAmbulances = await Ambulance.findAll()
    } catch (error) {
        return res.status(500).json({success: false, message: 'Internal Server Error'})
    }
    return res.status(200).json({success: true, allAmbulances})
})



module.exports = router