
\c d6lsrpgi5rjovl;

INSERT INTO meetingrooms (
    room_name, building_level, capacity
    ) 
VALUES
   (
        'Room 1',
        '88',
        '8'
    ),
    (
        'Room 2',
        '22',
        '16'
    );

INSERT INTO bookings
(meeting_room_id, meeting_name, time_start, time_end, attendees)
VALUES
   (
        (SELECT id FROM meetingrooms WHERE room_name = 'Room 1'),
        'SCRUM MEETING',
        '3/28/2022 at 3:00 PM',
        '3/28/2022 at 4:00 PM',
        'jdoe@email.com, bdylan@email.com'
    ),
    (
        (SELECT id FROM meetingrooms WHERE room_name = 'Room 2'),
        'DAILY STANDUP',
        '3/28/2022 at 9:00 AM',
        '3/28/2022 at 10:00 AM',
        'jdoe@email.com, jane@email.com, bob@email.com'
    );