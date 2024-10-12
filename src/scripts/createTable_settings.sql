CREATE TABLE IF NOT EXISTS settings (
    setting_key VARCHAR(50) UNIQUE NOT NULL,
    setting_value VARCHAR(50) NOT NULL,
    description VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE = INNODB;

INSERT INTO settings (setting_key, setting_value, description) VALUES ('whitelist_enabled', 'false', 'Whether the whitelist is enabled or not.')