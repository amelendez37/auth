import express from 'express';
import passport from '../middleware/validation/passport.js';
import {
  signupController,
  loginController
} from '../controllers/controllers.js';

const router = express.Router();

router.post('/signup', signupController);
router.post('/login', passport.authenticate('local', { session: false }), loginController);
router.get('/', loginController);

export default router;