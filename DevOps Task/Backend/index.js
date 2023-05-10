const express = require("express");
const connectDB = require('./database/connect.js')
const cors = require('cors')
const app = express();
const dotenv = require('dotenv')
dotenv.config()

const PORT = 3000;

//Global Middlewares
app.use(express.json())
app.use(cors())

//Custom Middlewares
app.use('/v1/', require('./routes/jobroute'))

function startServer() {
  try {
    connectDB(process.env.MONGO_URL)
    app.listen(PORT, () => {
      console.log(`Server started at Port ${PORT}`);
    });
  } catch (err) {
    console.log(err.message);
  }
}

startServer();
