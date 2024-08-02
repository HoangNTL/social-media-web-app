require('dotenv').config();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const saltRounds = 10;

const register = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    const existingUser = await User.findOne({
      where: {
        userName: userName,
      },
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, saltRounds);
    const user = await User.create({
      userName: userName,
      email: email,
      password: hashPassword,
    });

    console.log(user);
    return res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      res.status(404).json({ message: "Email not found" });
    }

    const isMatchPassword = bcrypt.compareSync(password, user.password);

    if (!isMatchPassword) {
      res.status(401).json({ message: "Wrong password" });
    } 

    const payload = {
      email: user.email,
      userName: user.userName
    }
    
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE});

    console.log(accessToken);

    return res.status(200).json({ message: "Login successful", accessToken: accessToken });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const logout = (req, res) => {
  res.send("Logout user");
};

module.exports = {
  register,
  login,
  logout,
};
