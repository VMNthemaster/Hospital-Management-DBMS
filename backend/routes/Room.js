const express = require('express')
const { where } = require('sequelize')
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

router.patch('/update', async (req, res) => {
  const {roomNo, isOccupied} = req.body
  try {
    await Room.update({isOccupied: isOccupied}, {where: {Id: roomNo}})
  } catch (error) {
    return res
        .status(500)
        .json({ success: false, message: 'Internal Server Error' })
  }
  res.status(201).json({ success: true })
})



module.exports = router