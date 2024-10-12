const db = require("../db/statistics")

module.exports = {
  /**
   * Log a server join to the database
   */
  handleServerJoin: async (req, res) => {
    const { player, server } = req.body

    if (!player || !server) {
      return res.status(400).json({ error: "Player and server are required." })
    }

    try {
      await db.createServerJoin(player, server)
      return res.status(201).json({ message: "Server join recorded." })
    } catch (err) {
      console.error("Error recording server join: ", err)
      return res
        .status(500)
        .json({ error: "An error occurred while recording the server join." })
    }
  },

  /**
   * Check if a player is whitelisted in the mod
   */
  checkWhitelist: async (req, res) => {
    const { player } = req.params

    if (!player) {
      return res.status(400).json({ error: "Player is required." })
    }

    try {
      const isWhitelisted = await db.checkWhitelist(player)

      return res.status(200).json({ isWhitelisted })
    } catch (err) {
      console.error("Error checking whitelist: ", err)
      return res
        .status(500)
        .json({ error: "An error occurred while checking the whitelist." })
    }
  },
}
