const db = require(".")

async function createServerJoin(player, server, ip) {
  return await db.query(
    "INSERT INTO server_joins (player, server, ip) VALUES (?, ?, ?);",
    [player, server, ip]
  )
}

async function checkWhitelist(player, ip) {
  // Query to check both whitelist and blacklist status in one go
  const query = `
    SELECT 
      IF(
        (SELECT setting_value FROM settings WHERE setting_key = 'whitelist_enabled') = 'true', 
        COUNT(DISTINCT w.player) > 0, 
        1
      ) AS is_whitelisted,
      (SELECT COUNT(*) > 0 FROM blacklist WHERE player = ? OR ip = ?) AS is_blacklisted
    FROM 
      whitelist AS w
    WHERE 
      w.player = ? OR w.ip = ?;`

  const rows = await db.query(query, [player, ip, player, ip])

  // Check results
  if (rows[0]) {
    const isWhitelisted = rows[0].is_whitelisted == 1
    const isBlacklisted = rows[0].is_blacklisted == 1

    return isWhitelisted && !isBlacklisted
  } else {
    throw new Error("Invalid whitelist query results")
  }
}


module.exports = {
  createServerJoin,
  checkWhitelist,
}
