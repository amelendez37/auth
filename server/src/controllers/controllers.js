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
    await signupQuery(req.body.username, hash);
    success('Success in signup controller');
    res.status(201).send();
  } catch (err) {
    error('Error in signupController - ', err)
    res.status(500).send();
  }
};

export const loginController = async (req, res) => {
  try {
    let data = await loginQuery(req.params.username);
    let { rows } = data;
    success('Success in login controller');
    if (rows.length) {
      if (bcrypt.compareSync(req.params.password, rows[0].password)) {
        return res.status(201).send();
      } else {
        return res.status(403).send();
      }
    }
    return res.status(403).send();
  } catch (err) {
    error('Error in login controller - ', err);
  }
};