const express = require("express")
const rateLimiter = require("express-rate-limit")

const router = express.Router()

const statisticsRoutes = require("./statistics")


router.use("/statistics", statisticsRoutes)

module.exports = router