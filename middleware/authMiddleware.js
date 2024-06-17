
import jwt from 'jsonwebtoken';
import { prepareResponse } from '../utils';

const JWT_SECRET = process.env.JWT_SECRET || 'defaultSecret';

export const checkJwt = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).send(prepareResponse("FAILURE", "Missing token"));
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
        res.status(401).send(prepareResponse("FAILURE", "Invalid token"));
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.user = decoded;
    next();
  });
};
