// Create fake users for the db
require("dotenv/config")
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URI)

const User = require("../models/User.model")
const allUsers = require("./users.json")

let fakeUsers = []

for (let i = 0; i < allUsers.length; i++) {
    fakeUsers.push({
        fullName: `${allUsers[i].firstName} ${allUsers[i].lastName}`,
    })
}

User.insertMany(fakeUsers)
    .then(users => {
        console.log(`You pushed ${users.length} users to the db`)
        mongoose.connection.close()
    })
    .catch(err => console.log(err))
