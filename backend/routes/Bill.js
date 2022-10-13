const express = require('express')
const {Bill} = require('../models')

const router = express.Router()

router.get('/', async (req, res) => {
    let allBills
    try {
        allBills = await Bill.findAll()
    } catch (error) {
        return res.status(500).json({success: false, message: 'Internal Server Error'})
    }
    return res.status(200).json({success: true, allBills})
})



module.exports = router