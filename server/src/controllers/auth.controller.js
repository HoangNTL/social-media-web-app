const User = require("../models/user");
const bcrypt = require("bcrypt");
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
      password: hashPassword
    });
  
    console.log(user);
    return res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const login = (req, res) => {
  res.send("Login user");
};

const logout = (req, res) => {
  res.send("Logout user");
};

module.exports = {
  register,
  login,
  logout,
};
