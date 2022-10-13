const express = require('express')
const {Posts} = require('../models')

const router = express.Router()

router.get('/', (req, res) => {
    res.send("hello")
})

router.post('/', async (req, res) => {
    const post = req.body
    await Posts.create(post)

    res.json(post)
})

module.exports = router