import bcrypt from 'bcrypt';
import passport from 'passport';
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
    let salt = bcrypt.genSaltSync(+process.env.SALT_ROUNDS);
    let hash = bcrypt.hashSync(req.body.password, salt);
    let data = await signupQuery(req.body.username, hash);
    success('Success in signup controller');
    return data ? res.status(201).send() : res.status(200).send();
  } catch (err) {
    error('Error in signup controller - ', err)
    res.status(500).send();
  }
};

export const loginController = async (req, res) => {
  try {
    const { rows } = await loginQuery(req.body.username);
    delete rows[0].password;
    const { username } = rows[0];
    success('loginController - successfully retrieved data ', rows[0]);
    // const token = await genToken(id, email);
    // res.set('jwt', token.accessToken);
    // res.set("Access-Control-Expose-Headers", "jwt");
    return res.status(200).send(rows[0]);
  } catch (err) {
    error('Error in login controller = ', err);
    return res.status(400).send();
  }
};