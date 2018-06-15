import bcrypt from 'bcrypt';
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
    error('Error in signupController - ', err)
    res.status(500).send();
  }
};

export const loginController = async (req, res) => {
  try {
    let data = await loginQuery(req.params.username);
    let { rows } = data;
    let password = req.params.password;
    success('Success in login controller');
    if (rows.length && password && bcrypt.compareSync(password, rows[0].password)) {
      return res.status(201).send();
    } else {
      return res.status(200).send();
    }
  } catch (err) {
    error('Error in login controller - ', err);
  }
};