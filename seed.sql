DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS interests;
DROP TABLE IF EXISTS user_interested;
DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS followers;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR (100) UNIQUE NOT NULL,
  email VARCHAR (100) UNIQUE NOT NULL,
  password VARCHAR (250) NOT NULL,
  avatar VARCHAR (250) NULL DEFAULT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TABLE interests (
  id SERIAL PRIMARY KEY,
  interest_type VARCHAR DEFAULT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE user_interested (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR DEFAULT NULL,
  interests_id VARCHAR DEFAUlT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  title VARCHAR DEFAULT NULL,
  description VARCHAR DEFAUlT NULL,
  host VARCHAR DEFAULT NULL,
  time VARCHAR DEFAUlT NULL,
  location VARCHAR DEFAULT NULL,
  number_of_likes INTEGER DEFAUlT NULL,
  number_of_comments INTEGER DEFAULT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR NOT NULL,
  event_id VARCHAR NOT NULL,
  message VARCHAR DEFAULT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR NOT NULL,
  event_id VARCHAR NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE followers (
  id SERIAL PRIMARY KEY,
  person_whos_following_id VARCHAR NOT NULL,
  person_being_followed_id VARCHAR NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
