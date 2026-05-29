CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    photo_url TEXT NULL
);

CREATE TABLE IF NOT EXISTS characters (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    photo_url TEXT NULL
);

CREATE TABLE IF NOT EXISTS rankings (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS ranking_itens (
    id SERIAL PRIMARY KEY,
    ranking_id INTEGER NOT NULL REFERENCES rankings(id) ON DELETE CASCADE,
    character_id INTEGER NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
    UNIQUE(ranking_id, character_id)
);

CREATE TABLE IF NOT EXISTS votes (
    id SERIAL PRIMARY KEY,
    ranking_id INTEGER NOT NULL REFERENCES rankings(id) ON DELETE CASCADE,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    character_id INTEGER NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
    tier INTEGER NOT NULL,
    UNIQUE(ranking_id, user_id, character_id)
);

INSERT INTO users (id, name, username, password_hash, photo_url) VALUES
(1, 'Son Goku', 'goku@email.com', '$2b$10$hashed_password_example_1', NULL),
(2, 'Naruto Uzumaki', 'naruto@email.com', '$2b$10$hashed_password_example_2', NULL),
(3, 'Paul Mcney', 'paul@email.com', '$2b$10$hashed_password_example_4', NULL);

INSERT INTO characters (id, name, photo_url) VALUES
(1, 'Totoro', NULL),
(2, 'Renato Portalluppi', NULL),
(3, 'Gandalf', NULL);

INSERT INTO rankings (id, name, user_id) VALUES
(1, 'Character Popularity Ranking', 1);

INSERT INTO ranking_itens (ranking_id, character_id) VALUES
(1, 1),
(1, 2),
(1, 3);

INSERT INTO votes (ranking_id, user_id, character_id, tier) VALUES
(1, 1, 1, 3),
(1, 1, 2, 3),
(1, 1, 3, 3),
(1, 2, 1, 3),
(1, 2, 2, 3),
(1, 2, 3, 3),
(1, 3, 1, 3),
(1, 3, 2, 3),
(1, 3, 3, 3);