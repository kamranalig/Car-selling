import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  try {
    const user = await User.findOne({ email });
    console.log(user);

    if (!user) return res.status(400).json({ message: "Invalid credientail" });
    const userPass = await User.findOne({ password });
    console.log(userPass);

    if (!userPass)
      return res.status(400).json({ message: "Invalid credientail" });
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token, message: "Login successful" });
  } catch (err) {
    res.status(500).send("Server error");
  }
};
