const express = require('express');
const path = require('path');
const server = express();
const PORT = process.env.PORT || 3000;

server.use(express.static(path.resolve(__dirname, '../../client/dist')));
server.use(express.urlencoded({ extended: true }));

server.listen(PORT, () => console.log(`Serving static files on port ${PORT}...`));
