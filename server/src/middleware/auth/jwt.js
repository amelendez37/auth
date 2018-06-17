import {
  sign,
  verify
} from 'jsonwebtoken';
import {
  success,
  error
} from '../../lib/log';

export const genToken = (user) => {
  const token = sign({
    exp: Math.floor(Date.now() / 1000) + (60 * 2),
    data: user
  }, process.env.SECRET_KEY);
  return token;
};

export const verifyUserWithJwt = (req, res, next) => { // verifies jwt as middleware
  const token = req.headers.authorization;
  try {
    verify(token, process.env.SECRET_KEY);
    success('token verified');
    next();
  } catch (err) {
    error('invalid token');
    res.status(403).send();
  }
};

export const verifyUserWithJwtUsername = (req, res) => {
  const token = req.headers.authorization;
  try {
    const decoded = verify(token, process.env.SECRET_KEY);
    success('token verified');
    res.status(200).json(decoded.data.username);
  } catch (err) {
    error('invalid token');
    res.status(403).send();
  }
};