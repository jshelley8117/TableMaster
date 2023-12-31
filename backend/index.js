const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const tableRoute = require("./routes/table")
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DB Connection successful"))
.catch((err)=> {
    console.log(err)
});

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/tables", tableRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running");
});