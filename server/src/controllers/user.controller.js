const User = require("../models/user");

const getUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.user.email,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getUser }