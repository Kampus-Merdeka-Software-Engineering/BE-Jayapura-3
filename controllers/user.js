import User from "../models/user.js";
import bcrypt from "bcrypt";
export const getUser = async (req, res) => {
  try {
    const { id: user_id } = req.user;
    const user = await User.findByID(user_id);
    if (user === null)
      return res.status(404).json({ message: "User not found" });

    delete user.password;
    return res.status(200).json({ data: user });
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id: user_id } = req.user;
    const { username, email } = req.body;

    const userExists = await User.findByUsername(username);

    if (userExists)
      return res.status(409).json({ error: "User already exists" });

    const user = await User.findByID(user_id);

    if (user === null)
      return res.status(404).json({ message: "User not found" });

    user.username = username;
    user.email = email;

    await user.save();

    return res.status(200).json({ message: "User updated" });
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const register = async (req, res) => {
  const { username, password, email } = req.body;

  bcrypt.hash(password, 10, async function (err, hash) {
    if (err) return res.status(500).json({ error: err.message });

    const userExists = await User.findByUsername(username).catch((err) =>
      res.status(500).json({ error: err.message })
    );

    if (userExists)
      return res.status(409).json({ error: "User already exists" });

    const user = new User(false, username, hash, email);

    try {
      await user.save();
      res.status(201).json({ message: "User created" });
    } catch (error) {
      res.status(409).json({ error: error.message });
    }
  });
};
