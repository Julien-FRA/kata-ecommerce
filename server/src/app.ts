import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./config/database";

const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

connectDB();

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// User route
const UserRoute = require("./routes/User");
app.use("/user", UserRoute);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
