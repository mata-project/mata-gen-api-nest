-- Drop existing tables to start fresh
DROP TABLE IF EXISTS shopping_items;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS markets;

-- Create the markets table
CREATE TABLE markets (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Create the users table
CREATE TABLE users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Create the shopping_items table
CREATE TABLE shopping_items (
    id SERIAL PRIMARY KEY,
    market_id INT NOT NULL, -- Foreign key to markets
    user_id UUID, -- Changed from INT to UUID
    item_name VARCHAR(100) NOT NULL,
    is_deleted INT DEFAULT 0 NOT NULL CHECK (is_deleted IN (0, 1)),
    CONSTRAINT fk_market FOREIGN KEY (market_id) REFERENCES markets (id) ON DELETE CASCADE,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE SET NULL
);

-- Insert sample data into markets
INSERT INTO markets (name) VALUES
('Aldi'),
('Lidl'),
('Colruyt'),
('AH'),
('Turk market'),
('Action'),
('Carrefour'),
('No market');




