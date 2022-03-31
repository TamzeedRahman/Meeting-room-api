DROP DATABASE IF EXISTS d6lsrpgi5rjovl;

CREATE DATABASE d6lsrpgi5rjovl;
\c d6lsrpgi5rjovl;

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
