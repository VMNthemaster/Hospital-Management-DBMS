const express = require('express')
const app = express()
app.use(express.json())

const db = require('./models')

// routes
const postsRouter = require('./routes/Posts')
app.use("/posts", postsRouter)

db.sequelize.sync().then(() => {
    app.listen(5000, () => {
        console.log(`Server running on port 5000`)
    })
})
