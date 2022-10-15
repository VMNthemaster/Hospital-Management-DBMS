const express = require('express')
const {Ambulance} = require('../models')

const router = express.Router()

router.get('/check', async (req, res) => {
    let allAmbulances
    try {
        allAmbulances = await Ambulance.findAll({where: {isAvailable: true}})
    } catch (error) {
        return res.status(500).json({success: false, message: 'Internal Server Error'})
    }
    return res.status(200).json({success: true, allAmbulances})
})

router.post('/addAmbulance', async (req, res) => {
    const ambulance = req.body
    let newAmbulance
    try {
      newAmbulance = await Ambulance.create(ambulance)
    } catch (error) {
      console.log(error)
      return res
        .status(500)
        .json({ success: false, message: 'Internal Server Error' })
    }
  
    res.status(201).json({ success: true, newAmbulance })
  })

router.patch('/update', async (req, res) => {
  const {numberPlate, isAvailable} = req.body
  try {
    await Ambulance.update({isAvailable: isAvailable}, {where: {NumberPlate: numberPlate}})
  } catch (error) {
    return res
        .status(500)
        .json({ success: false, message: 'Internal Server Error' })
  }
  res.status(201).json({ success: true })

})



module.exports = router