import express from 'express';
import passport from '../middleware/validation/passport.js';
import { validate } from '../middleware/validation/auth-req-validation.js';
import {
  signupController,
  loginController
} from '../controllers/controllers.js';

const router = express.Router();

router.post('/signup', validate, signupController);
router.post('/login', validate, passport.authenticate('local', { session: false }), loginController);
router.get('/', loginController);

export default router;