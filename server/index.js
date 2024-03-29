const express = require("express");
require("dotenv").config();
const connectDB = require('./config/db');
const userRouter = require("./routes/user.router");

connectDB();

const app = express();
const PORT  = process.env.PORT || 8000;

app.listen(PORT, () => {console.log(`Sever is starting on ${PORT}`)});
app.use("/api/user", userRouter);