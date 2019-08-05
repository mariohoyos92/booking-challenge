const BOOKINGS_TABLE_NAME = "booking";

exports.up = async function(knex) {
  await knex.schema.createTable(BOOKINGS_TABLE_NAME, table => {
    table
      .increments("booking_id")
      .unsigned()
      .primary();
    table.string("email").notNullable();
    table.string("name").notNullable();
    table.string("street_address").notNullable();
    table.string("city").notNullable();
    table.string("state").notNullable();
    table.string("zip_code").notNullable();
    table.enu("booking_type", ["housekeeping", "dogWalks"]).notNullable();
    table.timestamp("booking_date_time").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable(BOOKINGS_TABLE_NAME);
};
