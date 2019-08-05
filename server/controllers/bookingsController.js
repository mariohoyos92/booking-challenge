const Repository = require("../repository/repository");
const camelize = require("camelcase-keys-deep");

async function getBookings(req, res, next) {
  try {
    const bookings = await Repository.getBookings(req.query.direction);
    res.status(200).json(camelize(bookings));
  } catch (error) {
    next(error);
  }
}

async function createBooking(req, res, next) {
  try {
    await Repository.createBooking(req.body);
    const bookings = await Repository.getBookings();
    res.status(200).json(camelize(bookings));
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getBookings,
  createBooking
};
