// Packages
const express = require("express")
const mongoose = require("mongoose")
require("dotenv/config")
const cors = require("cors")

const router = express.Router()
const app = express()

// Model
const User = require("./models/User.model")

// App config
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
)

// Run the server
app.listen(5005, () => {
    console.log("Server listening on port http://localhost:5005")
})

// Connect to database
mongoose
    .connect(process.env.MONGODB_URI)
    .then(x => {
        console.log(
            `Connected to Mongo! Database name: "${x.connections[0].name}"`
        )
    })
    .catch(err => {
        console.error("Error connecting to mongo: ", err)
    })

// Get all users
const allUsers = router.get("/all-users", (req, res, next) => {
    User.find()
        .then(found => res.status(200).json(found))
        .catch(err => next(err))
})

// Search
const search = router.get("/search/:query", (req, res, next) => {
    const query = req.params.query
    const search = { $regex: query, $options: "-i" }

    User.find({ fullName: search })
        .then(found => res.status(200).json(found))
        .catch(err => next(err))
})

app.use("/", allUsers)
app.use("/", search)

module.exports = app
