const moment = require("moment");
const faker = require("faker");

const SEED_AMOUNT = 100;

const generateRandomBookings = () =>
  Array(SEED_AMOUNT)
    .fill({})
    .map((c, i) => ({
      name: faker.name.findName(),
      email: faker.internet.email(),
      street_address: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      zip_code: `${faker.address.zipCode("#####")}`,
      booking_type: (i + 1) % 2 > 0 ? "housekeeping" : "dogWalks",
      booking_date_time: moment(
        faker.date.between("2018-01-01", "2019-12-31")
      ).format("YYYY-MM-DD hh:mm")
    }));

exports.seed = function(knex) {
  return knex("booking")
    .del()
    .then(function() {
      const bookings = generateRandomBookings();
      console.log(bookings);
      return knex.batchInsert("booking", bookings);
    })
    .catch(console.log);
};
