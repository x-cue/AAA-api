const express = require("express")
require("dotenv").config()
const PORT = process.env.PORT || 8080
const app = express()
const db = require("./src/db")

// Setup middleware
const middleware = require("./src/middleware")
app.use(middleware)

// Default route to test connectivity
app.get("/api/", (req, res) => res.send("Hello World!"))

// Setup routes
const routes = require("./src/routes")
app.use("/api", routes)

// Start listening to incoming requests
app.listen(PORT, () => console.log(`Listening on ${PORT}`))

process.on("exit", () => {
  db.pool?.end()
})

process.on("uncaughtException", (err) => {
  console.log(err)
})
