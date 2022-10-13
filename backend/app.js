const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));

const db = require('./models')

// routes
const postsRouter = require('./routes/Posts')
const doctorRouter = require('./routes/Doctor')
const patientRouter = require('./routes/Patient')
const ambulanceRouter = require('./routes/Ambulance')
const medicineRouter = require('./routes/Medicine')
const roomRouter = require('./routes/Room')
const billRouter = require('./routes/Bill')

app.use("/posts", postsRouter)
app.use("/doctors", doctorRouter)
app.use("/patients", patientRouter)
app.use("/medicines", medicineRouter)
app.use("/ambulances", ambulanceRouter)
app.use("/rooms", roomRouter)
app.use("/bills", billRouter)




db.sequelize.sync().then(() => {
    app.listen(5000, () => {
        console.log(`Server running on port 5000`)
    })
})
