import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findByUsername(username);

    bcrypt.compare(password, user.password, function (err, result) {
      if (err) return res.status(500).json({ error: err.message });

      if (result) {
        const token = jwt.sign(
          { user: { username: user.username, id: user.id } },
          process.env.PRIVATE_KEY,
          {
            expiresIn: 60 * 60,
          }
        );

        return res.status(200).json({ token });
      }

      return res.status(401).json({ error: "Invalid password" });
    });
  } catch (error) {
    return res.status(404).json({ error: "User not found" });
  }
};
