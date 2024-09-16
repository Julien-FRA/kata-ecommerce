import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const UserModel = require("../models/user");

exports.register = async (req, res) => {
  if (!req.body.email || !req.body.name || !req.body.password) {
    return res.status(400).send({ message: "Content can not be empty!" });
  }

  const userAlreadyExist = await UserModel.find({ email: req.body.email });

  if (userAlreadyExist.length > 0) {
    return res.status(400).json({ message: "User already exist" });
  }

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const user = new UserModel({
    email: req.body.email,
    name: req.body.name,
    password: hashedPassword,
  });

  await user
    .save()
    .then((data) => {
      res.send({
        message: "User created successfully!!",
        user: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating user",
      });
    });
};
