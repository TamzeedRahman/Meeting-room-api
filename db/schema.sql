DROP DATABASE IF EXISTS d155gujbj874q3;

CREATE DATABASE d155gujbj874q3;
\c d155gujbj874q3;

DROP TABLE IF EXISTS meetingrooms CASCADE; 
CREATE TABLE meetingrooms (
    id SERIAL PRIMARY KEY,
    room_name TEXT,
    building_level TEXT,
    capacity TEXT
);

DROP TABLE IF EXISTS bookings CASCADE;

CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    meeting_room_id INTEGER REFERENCES meetingrooms (id) ON DELETE CASCADE,
    meeting_name TEXT,
    time_start TEXT,
    time_end TEXT,
    attendees TEXT
);
