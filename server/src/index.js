import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import router from './routes/routes.js';
const server = express();
const PORT = process.env.PORT || 3000;

server.use(express.static(path.resolve(__dirname, '../../client/dist')));
server.use(express.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use('/auth', router);

server.listen(PORT, () => console.log(`Serving static files on port ${PORT}...`));
