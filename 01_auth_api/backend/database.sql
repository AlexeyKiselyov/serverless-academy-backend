CREATE database auth_api;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE users(
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  accessToken VARCHAR(255),
  refreshToken VARCHAR(255)
);