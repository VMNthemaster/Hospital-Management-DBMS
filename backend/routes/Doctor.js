const express = require('express')
const { Doctor } = require('../models')

const router = express.Router()

router.get('/', async (req, res) => {
  let allDoctors
  try {
    allDoctors = await Doctor.findAll()
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: 'Internal Server Error' })
  }
  return res.status(200).json({ success: true, allDoctors })
})

router.post('/addDoctor', async (req, res) => {
  const doctor = req.body
  let newDoctor
  try {
    newDoctor = await Doctor.create(doctor)
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ success: false, message: 'Internal Server Error' })
  }

  res.status(201).json({ success: true, newDoctor })
})

module.exports = router
