module.exports.getIpFromRequest = function getIpFromRequest(req) {
  return req.headers["x-forwarded-for"] || req.connection.remoteAddress
} 