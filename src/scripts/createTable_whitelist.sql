CREATE TABLE IF NOT EXISTS whitelist (
    id INT AUTO_INCREMENT,
    player VARCHAR(50) NOT NULL UNIQUE,
    PRIMARY KEY(id)
) ENGINE = INNODB;