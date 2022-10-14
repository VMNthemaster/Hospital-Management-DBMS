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

router.post('/addBill', async (req, res) => {
    const bill = req.body
    let newBill
    try {
      newBill = await Bill.create(bill)
    } catch (error) {
      console.log(error)
      return res
        .status(500)
        .json({ success: false, message: 'Internal Server Error' })
    }
  
    res.status(201).json({ success: true, newBill })
  })



module.exports = router