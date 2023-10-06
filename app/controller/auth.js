const User = require( "../model/user.js")
const bcrypt = require( "bcrypt")
const jwt = require( "jsonwebtoken")

async function register (req,res,next){
  const { username, password, email } = req.body;

  bcrypt.hash(password, 10, async function (err, hash) {
    if (err) return res.status(500).json({ error: err.message });

    const userExists = await User.findByUsername(username);

    if (userExists)
      return res.status(409).json({ error: "User already exists" });

    const user = new User(username, hash, email, profile_picture);

    try {
      await user.save();
      res.status(201).json({ user });
    } catch (error) {
      res.status(409).json({ error: error.message });
    }
  });
};

async function login (req,res,next){
  const { username, password } = req.body;

  try {
    const user = await User.findByUsername(username);
    console.log(user);

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

module.exports = {
  register,
  login
};