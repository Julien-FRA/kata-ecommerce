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

exports.login = async (req, res) => {
  const { name, password } = req.body;

  if (!name && !password) {
    return res.status(400).send({ message: "Content can not be empty!" });
  }

  try {
    const user = await UserModel.findOne({ name });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!passwordMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1 hour",
    });

    const userInformation = {
      id: user._id,
      email: user.email,
      name: user.name,
      role: user.role,
    };

    res.json({ token, userInformation });
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};
