require("dotenv").config();
const path = require("path");

// This will stop the application from starting if a .env file is missing
process.env.DB_PASSWORD ||
  (console.log(
    "You need to have a valid .env file to run this project, are you sure you included it?"
  ) ||
    process.exit(1));

module.exports = {
  client: "mysql",
  connection: {
    host: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
  },
  migrations: {
    directory: path.join(__dirname, "db/migrations")
  },
  seeds: {
    directory: path.join(__dirname, "db/seeds")
  }
};
