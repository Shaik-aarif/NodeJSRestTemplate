import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "defaultSecret";

const signJwt = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "1h" });
};

const verifyJwt = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

const getUserIdFromJwt = (token) => {
  const decoded = jwt.decode(token);
  return decoded ? decoded.userId : null;
};

export { signJwt, verifyJwt, getUserIdFromJwt };
