const express = require("express")
const router = express.Router()

const statisticsRoutes = require("./statistics")
router.use("/statistics", statisticsRoutes)

module.exports = router