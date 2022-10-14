const express = require('express')
const {Patient} = require('../models')

const router = express.Router()

router.get('/', async (req, res) => {
    let allPatients
    try {
        allPatients = await Patient.findAll()
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Internal Server Error'})
    }
    return res.status(200).json({success: true, allPatients})
})

router.post('/addPatient', async (req, res) => {
    const patient = req.body
    let newPatient
    try {
      newPatient = await Patient.create(patient)
    } catch (error) {
      console.log(error)
      return res
        .status(500)
        .json({ success: false, message: 'Internal Server Error' })
    }
  
    res.status(201).json({ success: true, newPatient })
  })

  router.patch('/updateBill', async (req, res) => {
    const {billId, patientId} = req.body
    try {
      await Patient.update({BillId: billId},{ where: { PatientId: patientId }})
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Internal Server Error' })
    }

    return res.status(200).json({success: true})
  })



module.exports = router