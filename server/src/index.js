import express from 'express';
import path from 'path';
import passport from 'passport';
import bodyParser from 'body-parser';
import router from './routes/routes.js';
import { 
  verifyUserWithJwt
 } from './middleware/auth/jwt.js';

const server = express();
const PORT = process.env.PORT || 3000;

// middleware
server.use(express.static(path.resolve(__dirname, '../../client/dist')));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(passport.initialize());

// routes
server.use('/auth', router);
// wildcard route
server.use('/*', verifyUserWithJwt, router);

server.listen(PORT, () => console.log(`Serving static files on port ${PORT}...`));
