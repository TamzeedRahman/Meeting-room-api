const express = require("express");
const meetingRooms = express.Router({ mergeParams: true });
// const bookingsController = require("./bookingsController.js");

const {
  getAllMeetingRooms,
  getMeetingRoom,
  getBookingsByMeetingRoom,
  createMeetingRoom,
  deleteMeetingRoom,
  updateMeetingRoom,
} = require("../queries/meetingRooms.js");

const {
  MeetingRoomNotCreatedError,
  ValidationError,
  customErrorHandler,
} = require("../helper.js");

// const db = require("../db/dbConfig.js");
const db = require("../db/dbConfig.js");

// MIDDLEWARE
const validateMeetingRoom = (req, res, next) => {
  console.log(req.body);
  try {
    const { room_name, building_level, capacity } = req.body;

    let isMeetingRoomValid = true;
    let errorMsg = "MeetingRoom request not formatted correctly: ";

    if (typeof room_name !== "string") {
      isMeetingRoomValid = false;
      errorMsg += "The 'room_name' field must be of type 'string'";
    }
    if (typeof building_level !== "string") {
      isMeetingRoomValid = false;
      errorMsg += "The 'buildingLevel' field must be of type 'string'";
    }
    if (typeof capacity !== "string") {
      isMeetingRoomValid = false;
      errorMsg += "The 'capacity' field must be of type 'string'";
    }
    if (isMeetingRoomValid !== true) {
      throw new ValidationError(errorMsg);
    }
  } catch (e) {
    next(e);
  }
  return next();
};

// index
meetingRooms.get("/", async (req, res) => {
  const allMeetingRooms = await getAllMeetingRooms();
  res.status(200).json({
    success: true,
    payload: allMeetingRooms,
  });
});

//show
meetingRooms.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const meetingRoom = await getMeetingRoom(id);
    if (meetingRoom.id) {
      res.status(200).json({
        success: true,
        payload: meetingRoom,
      });
    } else {
      throw `No meetingRoom found at index: ${id}`;
    }
  } catch (e) {
    res.status(404).json({
      success: false,
      payload: e,
    });
  }
});

//show bookings by meeting room
meetingRooms.get("/:id/bookings", async (req, res) => {
  const { id } = req.params;
  try {
    const bookings = await getBookingsByMeetingRoom(id);
    if (bookings) {
      res.status(200).json({
        success: true,
        payload: bookings,
      });
    } else {
      throw `No bookings found by Meeting Room Id: ${id}`;
    }
  } catch (e) {
    res.status(404).json({
      success: false,
      payload: e,
    });
  }
});

//create
meetingRooms.post("/", validateMeetingRoom, async (req, res, next) => {
  try {
    const meetingRoom = await createMeetingRoom(req.body);
    if (meetingRoom.id) {
      res.status(200).json({
        success: true,
        payload: meetingRoom,
      });
    } else {
      const msg = `MeetingRoom not added to database: ${JSON.stringify(req.body)}`;
      throw new MeetingRoomNotCreatedError(msg);
    }
  } catch (e) {
    return next(e);
  }
});

// update
meetingRooms.put("/:id", validateMeetingRoom, async (req, res, next) => {
  const { id } = req.params;
  try {
    const meetingRoom = await updateMeetingRoom(id, req.body);

    if (meetingRoom.id) {
      res.status(200).json({
        success: true,
        payload: meetingRoom,
      });
    } else {
      const msg = `MeetingRoom not added to database: ${JSON.stringify(req.body)}`;
      throw new MeetingRoomNotCreatedError(msg);
    }
  } catch (e) {
    return next(e);
  }
});

// delete
meetingRooms.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleted = await deleteMeetingRoom(id);
    if (deleted.id) {
      res.status(200).json({
        success: true,
        payload: deleted,
      });
    } else {
      const msg = `MeetingRoom not deleted from database: ${id}`;
      throw new MeetingRoomNotCreatedError(msg);
    }
  } catch (e) {
    next(e);
  }
});

// meetingRooms.use("/:meetingRoomId/bookings", bookingsController);

// Error handling
meetingRooms.use(customErrorHandler);

module.exports = meetingRooms;