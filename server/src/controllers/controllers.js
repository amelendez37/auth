import passport from 'passport';
import { hashPassword } from '../middleware/auth/bcrypt.js';
import { genToken } from '../middleware/auth/jwt.js';
import {
  signupQuery,
  loginQuery
} from '../queries/authQueries.js';
import {
  success,
  error
} from '../lib/log';

export const signupController = async (req, res) => {
  try {    
    let hash = await hashPassword(req.body.password);
    let data = await signupQuery(req.body.username, hash);
    success('Success in signup controller');
    return data ? res.status(201).send() : res.status(401).send();
  } catch (err) {
    error('Error in signup controller - ', err)
    res.status(500).send();
  }
};

export const loginController = async (req, res) => {
  try {
    const { username } = req.body;
    const { rows } = await loginQuery(username);
    delete rows[0].password;
    success('loginController - successfully retrieved data ', rows[0]);
    const token = await genToken({username: username});
    return res.status(200).json({ token: token });
  } catch (err) {
    error('Error in login controller = ', err);
    return res.status(400).send();
  }
};