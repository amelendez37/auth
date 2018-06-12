import express from 'express';
import {
  signupController,
  loginController
} from '../controllers/controllers.js';

const router = express.Router();

router.post('/signup', signupController);
router.get('/login', loginController);

export default router;