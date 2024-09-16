import UserSchema from "../utils/user";

var mongoose = require("mongoose");

var schema: UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

var user = new mongoose.model("User", schema);

module.exports = user;
