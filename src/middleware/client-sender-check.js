const express = require("express")
const router = express.Router()

router.use((req, res, next) => {
  const clientSender = req.headers["client-sender"]

  if (clientSender !== "AAA-fabric-mod") {
    return res.sendStatus(403) // Forbidden
  }

  next()
})

module.exports = router