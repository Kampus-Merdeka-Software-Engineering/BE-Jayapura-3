import jwt from "jsonwebtoken";

export const checkAuth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: "Token not found" });
  const [type, credentials] = token.split(" ");
  if (type !== "Bearer")
    return res.status(401).json({ message: "Invalid token" });
  if (!credentials) return res.status(401).json({ message: "Invalid token" });

  jwt.verify(credentials, process.env.PRIVATE_KEY, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid token" });
    req.user = decoded.user;
    next();
  });
};
