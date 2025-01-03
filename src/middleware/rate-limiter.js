const rateLimit = require("express-rate-limit")

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100,
  message: "Too many requests, please try again later.",
  headers: true, // Send rate limit info in the response headers
})

module.exports = limiter