const db = require("../db/dbConfig.js");

//index
const getAllMeetingRooms = async () => {
  try {
    const allMeetingRooms = await db.any("SELECT * FROM meetingrooms ORDER BY room_name ASC");
    console.log("Getting all meeting rooms");
    return allMeetingRooms;
  } catch (err) {
    return err;
  }
};
//Show
const getMeetingRoom = async (id) => {
  try {
    const oneMeetingRoom = await db.one("SELECT * FROM meetingrooms WHERE id=$1", id);
    return oneMeetingRoom;
  } catch (err) {
    return err;
  }
};

//Show bookings by meeting room
const getBookingsByMeetingRoom = async (id) => {
    try {
      const bookings = await db.any("SELECT * FROM bookings WHERE meeting_room_id=$1", id);
      return bookings;
    } catch (err) {
      return err;
    }
  };


//create
const createMeetingRoom = async (meetingRoom) => {
  try {
    const newMeetingRoom = await db.one(
      "INSERT INTO meetingrooms (room_name, building_level, capacity) VALUES ($1, $2, $3) RETURNING *",
      [
        meetingRoom.room_name,
        meetingRoom.building_level,
        meetingRoom.capacity
      ]
    );
    return newMeetingRoom;
  } catch (err) {
    return err;
  }
};

//delete
const deleteMeetingRoom = async (id) => {
  try {
    const deletedMeetingRoom = await db.one(
      "DELETE FROM meetingrooms WHERE id=$1",
      id
    );
    return deletedMeetingRoom;
  } catch (err) {
    return err;
  }
};

//update
const updateMeetingRoom = async (id, meetingRoom) => {
  try {
    const updatedMeetingRoom = await db.one(
      "UPDATE meetingrooms SET room_name=$1, building_level=$2, capacity=$3 WHERE id=$4 RETURNING *",
      [
        meetingRoom.room_name,
        meetingRoom.building_level,
        meetingRoom.capacity,
        id
      ]
    );
    return updatedMeetingRoom;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllMeetingRooms,
  getMeetingRoom,
  getBookingsByMeetingRoom,
  createMeetingRoom,
  deleteMeetingRoom,
  updateMeetingRoom,
};