// Express Server
// FIX ME :(
const express = require('express');
const path = require('path');
const router = require('./router');
const morgan = require('morgan');
const cors = require('cors');


const server = express();
const port = 3000;

server.use(morgan('dev'));
server.use(express.json());
server.use(express.json({ urlencoded: true }));
server.use(cors());
server.use('/', express.static(path.join(__dirname + '/../client/dist')));
server.use('/', router);

server.listen(port, () => console.log(`Connected to port: ${port}`));
