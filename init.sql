CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    photo_url TEXT NULL
);

CREATE TABLE IF NOT EXISTS characters (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    photo_url TEXT NULL
);

INSERT INTO users (name, email, password_hash) VALUES
('Son Goku', 'goku@email.com', '$2b$10$hashed_password_example_1'),
('Naruto Uzumaki', 'naruto@email.com', '$2b$10$hashed_password_example_2'),
('Paul Mcney', 'paul@email.com', '$2b$10$hashed_password_example_4');

INSERT INTO characters (name, photo_url) VALUES
('Totoro', NULL),
('Renato Portalluppi', NULL);