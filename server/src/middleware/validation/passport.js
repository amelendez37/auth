import passport from 'passport';
import local from 'passport-local';
import { loginQuery } from '../../queries/authQueries.js';
import { comparePasswords } from '../auth/bcrypt.js';

const LocalStrategy = local.Strategy;

passport.use(new LocalStrategy(
    async (username, password, done) => {
      try {
        const { rows } = await loginQuery(username);
        if (!rows.length) {
          return done(null, false, { message: 'Incorrect username.' })
        }
        if (rows.length) {
          const isMatch = await comparePasswords(password, rows[0].password);
          return isMatch ? done(null, rows) : done(null, false, { message: 'Incorrect password.' });
        }
      } catch (err) {
        done(err);
      }
    }
));

export default passport;