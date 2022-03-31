// DEPENDENCIES
const express = require("express");
const bookings = express.Router({ mergeParams: true });
const {
  getAllBookings,
  getBooking,
  newBooking,
  updateBooking,
  deleteBooking,
} = require("../queries/bookings");

// ROUTES
// index
bookings.get("/", async (req, res) => {
  try {
    const allBookings = await getAllBookings();
    res.status(200).json({
      success: true,
      payload: allBookings,
    });
  } catch (e) {
    res.status(404).statusMessage(e);
  }
});

// show
bookings.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await getBooking(id);
    if (booking.id) {
      res.status(200).json({
        success: true,
        payload: booking,
      });
    } else {
      res.status(404).json({
        success: false,
        payload: "Error: no booking found in the database",
      });
    }
  } catch (e) {
    res.status(404).statusMessage(e);
  }
});

// //show bookings by meeting room
// bookings.get("/:meetingRoomId/bookings", async (req, res) => {
//   const { meetingRoomId } = req.params;
//   try {
//     const bookings = await getBookingsByMeetingRoom(meetingRoomId);
//     if (bookings) {
//       res.status(200).json({
//         success: true,
//         payload: bookings,
//       });
//     } else {
//       throw `No bookings found by Meeting Room Id: ${meetingRoomId}`;
//     }
//   } catch (e) {
//     res.status(404).json({
//       success: false,
//       payload: e,
//     });
//   }
// });

// create
bookings.post("/", async (req, res) => {
  try {
    const { meetingRoomId } = req.params;
    const booking = await newBooking(meetingRoomId, req.body);
    res.status(200).json({
      success: true,
      payload: booking,
    });
  } catch (e) {
    res.status(404).statusMessage(e);
  }
});

// update
bookings.put("/:id", async (req, res) => {
  try {
    const { meetingRoomId } = req.params;
    const { id } = req.params;
    const updatedBooking = await updateBooking(meetingRoomId, id, req.body);
    res.status(200).json({
      success: true,
      payload: updatedBooking,
    });
  } catch (e) {
    res.status(404).statusMessage(e);
  }
});

// delete
bookings.delete("/:id", async (req, res) => {
  try {
    const { meetingRoomId } = req.params;
    const { id } = req.params;
    const deletedBooking = await deleteBooking(meetingRoomId, id);
    res.status(200).json({ success: true, payload: deletedBooking });
  } catch (e) {
    res.status(404).statusMessage(e);
  }
});

// EXPORTS
module.exports = bookings;