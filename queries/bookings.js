// DEPENDENCIES
const db = require("../db/dbConfig.js");

// QUERIES

// index
const getAllBookings = async () => {
  try {
    const allBookings = await db.any(
      "SELECT * FROM bookings",
    );
    return allBookings;
  } catch (e) {
    return e;
  }
};

/* SHOW */
const getBooking = async (id) => {
  try {
    const oneBooking = await db.one(
      "SELECT * FROM bookings WHERE id=$1",id
    );
    return oneBooking;
  } catch (e) {
    return e;
  }
};

// //Show bookings by meeting room
// const getBookingsByMeetingRoom = async (meetingRoomId) => {
//     try {
//       const bookings = await db.any("SELECT * FROM bookings WHERE meeting_room_id=$1", meetingRoomId);
//       return bookings;
//     } catch (err) {
//       return err;
//     }
//   };

// CREATE
const newBooking = async (meetingRoomId, booking) => {
  try {
    const newBooking = await db.one(
      `
      INSERT INTO bookings
      (meeting_room_id, meeting_name, time_start, time_end, attendees)
      VALUES
      ($1, $2, $3, $4, $5)
      RETURNING *
      `,
      [meetingRoomId, booking.meeting_name, booking.time_start, booking.time_end, booking.attendees]
    );
    return newBooking;
  } catch (e) {
    return e;
  }
};

/* UPDATE */
const updateBooking = async (meetingRoomId, id, booking) => {
  try {
    const updatedBooking = await db.one(
      `
      UPDATE bookings
      SET meeting_name=$1, time_start=$2, time_end=$3, attendees=$4
      WHERE id=$5 AND meeting_room_id=$6
      RETURNING *
      `,
      [booking.meeting_name, booking.time_start, booking.time_end, booking.attendees, id, meetingRoomId]
    );
    return updatedBooking;
  } catch (e) {
    return e;
  }
};

/* DELETE */
const deleteBooking = async (id) => {
  try {
    const deletedBooking = await db.one(
      "DELETE FROM bookings WHERE id=$1", id
    );
    return deletedBooking;
  } catch (e) {
    return e;
  }
};

// EXPORTS
module.exports = {
  getAllBookings,
  getBooking,
  newBooking,
  updateBooking,
  deleteBooking,
};