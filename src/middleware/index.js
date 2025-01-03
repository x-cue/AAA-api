const express = require("express")
const router = express.Router()

const rateLimit = require("./rate-limiter")
const clientSenderCheck = require("./client-sender-check")

router.use(clientSenderCheck)
router.use(rateLimit)
router.use(express.json())

module.exports = router