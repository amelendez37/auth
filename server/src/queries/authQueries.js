import db from '../config/database';
import {
  success,
  error
} from '../lib/log';

export const signupQuery = async (username, password) => {
  let query = `
    INSERT INTO
        users (username, password)
    VALUES
        ('${username}', '${password}')
    `;
  try {
    await db.query(query);
    return true;
  } catch (err) {
    return false;
  }
};

export const loginQuery = async (username) => {
  let query = `
      SELECT
        username, password
      FROM
        users
      WHERE
        username='${username}'
    `;
  return await db.query(query);
};