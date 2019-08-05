const express = require("express");
const router = express.Router();
const {
  getBookings,
  createBooking
} = require("./controllers/bookingsController");

router.get("/api/getBookings", getBookings);
router.post("/api/createBooking", createBooking);

module.exports = router;
