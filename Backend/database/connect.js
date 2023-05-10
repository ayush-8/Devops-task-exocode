const mongoose = require("mongoose");

function connectDB(url) {
  try {
    mongoose
      .connect(url)
      .then(() => {
        console.log("Database Successfully connected");
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  } catch (err) {
    console.log(err.message);
  }
}


module.exports = connectDB;