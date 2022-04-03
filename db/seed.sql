
\c d155gujbj874q3;

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
        '88',
        '32'
    ),
    (
        'Room 3',
        '2',
        '12'
    );

INSERT INTO bookings
(meeting_room_id, meeting_name, time_start, time_end, attendees)
VALUES
   (
        1,
        'SCRUM MEETING Team Prod',
        '3/28/2022 at 3:00 PM',
        '3/28/2022 at 4:00 PM',
        'jdoe@email.com, bdylan@email.com'
    ),
    (
        1,
        'DAILY STANDUP Team Prod',
        '3/28/2022 at 8:00 AM',
        '3/28/2022 at 8:30 AM',
        'jdoe@email.com, jane@email.com, bob@email.com, kyle@gmail.com, Chris@gmail.com'
    ),
    (
        1,
        'SCRUM MEETING Team Infra',
        '3/29/2022 at 1:00 PM',
        '3/29/2022 at 1:30 PM',
        'doe@email.com, blan@email.com, dan@gmail.com, moa@gmail.com'
    ),
    (
        2,
        'SCRUM MEETING Team Secruity',
        '3/28/2022 at 3:00 PM',
        '3/28/2022 at 4:00 PM',
        'jdoe@email.com, bdylan@email.com, Don@gmail.com'
    ),
    (
        2,
        'SCRUM MEETING Team Front End',
        '3/30/2022 at 1:00 PM',
        '3/30/2022 at 2:00 PM',
        'jdoe@email.com, bdylan@email.com, Ross@gmail.com'
    ),
    (
        3,
        'PRE CHECK RELEASE',
        '3/30/2022 at 8:00 AM',
        '3/30/2022 at 9:00 AM',
        'jdoe@email.com, jane@email.com, bob@email.com, Jordan@gmail.com, Kam@gmail.com, Clin@gmail.com, jillen@gmail.com'
    ),
    (
        3,
        'DAILY STANDUP Back End',
        '3/30/2022 at 9:00 AM',
        '3/30/2022 at 10:00 AM',
        'jdoe@email.com, jane@email.com, bob@email.com, Jordan@gmail.com, Kam@gmail.com'
    );