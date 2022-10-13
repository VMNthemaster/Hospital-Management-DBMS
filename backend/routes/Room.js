const express = require('express')
const {Room} = require('../models')

const router = express.Router()

router.get('/', async (req, res) => {
    let allRooms
    try {
        allRooms = await Room.findAll()
    } catch (error) {
        return res.status(500).json({success: false, message: 'Internal Server Error'})
    }
    return res.status(200).json({success: true, allRooms})
})



module.exports = router