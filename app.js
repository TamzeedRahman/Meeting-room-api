// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const meetingRoomsController = require("./controllers/meetingRoomsController.js");
// const meetingRooms = require("./controllers/meetingRoomsController.js");
const bookings = require("./controllers/bookingsController.js");
// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Meeting Rooms Booking App!");
});

app.use("/meetingRooms", meetingRoomsController);
app.use("/bookings", bookings)
app.get("*", (req, res) => {
  res.status(404).send("Page not found")
})


// const db = require("./db/dbConfig.js");


// EXPORT
module.exports = app;