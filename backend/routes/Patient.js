const express = require('express')
const {Patient} = require('../models')

const router = express.Router()

router.get('/', async (req, res) => {
    let allPatients
    try {
        allPatients = await Patient.findAll()
    } catch (error) {
        return res.status(500).json({success: false, message: 'Internal Server Error'})
    }
    return res.status(200).json({success: true, allPatients})
})



module.exports = router