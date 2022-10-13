const express = require('express')
const {Medicine} = require('../models')

const router = express.Router()

router.get('/', async (req, res) => {
    let allMedicines
    try {
        allMedicines = await Medicine.findAll()
    } catch (error) {
        return res.status(500).json({success: false, message: 'Internal Server Error'})
    }
    return res.status(200).json({success: true, allMedicines})
})



module.exports = router