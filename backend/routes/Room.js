const express = require('express')
const {Room} = require('../models')

const router = express.Router()

router.get('/check', async (req, res) => {
    let allRooms
    try {
        allRooms = await Room.findAll({where: {isOccupied: false}})
    } catch (error) {
        return res.status(500).json({success: false, message: 'Internal Server Error', error})
    }
    return res.status(200).json({success: true, allRooms})
})

router.post('/addRoom', async (req, res) => {
    const room = req.body
    let newRoom
    try {
      newRoom = await Room.create(room)
    } catch (error) {
      console.log(error)
      return res
        .status(500)
        .json({ success: false, message: 'Internal Server Error', error })
    }
  
    res.status(201).json({ success: true, newRoom })
  })



module.exports = router