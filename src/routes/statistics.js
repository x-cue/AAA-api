const express = require("express")
const router = express.Router()
const controller = require("../controllers/statistics")

// Define the route for server joins
router.post("/server-join", controller.handleServerJoin)
router.get("/check-whitelist/:player", controller.checkWhitelist)

module.exports = router