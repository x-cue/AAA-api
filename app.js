const express = require("express")
require("dotenv").config()
const PORT = process.env.PORT || 8080
const app = express()
const db = require("./src/db")

// Install json parser
app.use(express.json())

// Default route to test connectivity
app.get("/api/", (req, res) => res.send("Hello World!"))

//#region Routes
const statisticsRoutes = require("./src/routes/statistics")
app.use("/api/statistics", statisticsRoutes)
//#endregion Routes

// Start listening to incoming requests
app.listen(PORT, () => console.log(`Listening on ${PORT}`))

process.on("exit", () => {
  db.pool?.end()
})

process.on("uncaughtException", (err) => {
  console.log(err)
})
