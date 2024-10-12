const db = require(".")

async function createServerJoin(player, server) {
  return await db.query(
    "INSERT INTO server_joins (player, server) VALUES (?, ?);",
    [player, server]
  )
}

async function checkWhitelist(player) {
  // If whitelist enabled, check for player ign... otherwise just return false
  const query = `SELECT 
    IF(
        (SELECT setting_value FROM settings WHERE setting_key = 'whitelist_enabled') = 'true', 
        COUNT(whitelist.player) > 0, 
        0
    ) AS is_whitelisted
FROM 
    whitelist
WHERE 
    player = ?;`

  const rows = await db.query(query, [player])

  return rows[0] ? rows[0].is_whitelisted == 1 : false
}

module.exports = {
  createServerJoin,
  checkWhitelist,
}
