const config = require("../../knexfile");
const db = require("knex")(config);
const snakeCaseKeys = require("snakecase-keys");

function getBookings(direction) {
  return db
    .select("*")
    .from("booking")
    .orderBy("booking_date_time", direction === "desc" ? direction : "asc");
}

function createBooking(bookingOptions) {
  return db("booking").insert(snakeCaseKeys(bookingOptions));
}

module.exports = {
  getBookings,
  createBooking
};
