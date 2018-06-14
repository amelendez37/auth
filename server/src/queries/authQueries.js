import db from '../config/database';
import {
  success,
  error
} from '../lib/log';

export const signupQuery = (username, password) => {
  let query = `
    INSERT INTO
        users (username, password)
    VALUES
        ('${username}', '${password}')
    `;
  db.query(query, (err, res) => {
    if (err) {
      error('Error in signup query - ', err);
    } else {
      success('Success in signup query')
    }
  });
};

export const loginQuery = async (username) => {
  let query = `
      SELECT
        password
      FROM
        users
      WHERE
        username='${username}'
    `;
  return await db.query(query);
};