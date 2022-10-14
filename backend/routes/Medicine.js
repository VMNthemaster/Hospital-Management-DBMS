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

router.post('/addMedicine', async (req, res) => {
    const medicine = req.body
    let newMedicine
    try {
      newMedicine = await Medicine.create(medicine)
    } catch (error) {
      console.log(error)
      return res
        .status(500)
        .json({ success: false, message: 'Internal Server Error' })
    }
  
    res.status(201).json({ success: true, newMedicine })
  })



module.exports = router