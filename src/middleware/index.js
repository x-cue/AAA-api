const express = require("express")
const router = express.Router()

const clientSenderCheck = require("./client-sender-check")
router.use(clientSenderCheck)
router.use(express.json())

module.exports = router