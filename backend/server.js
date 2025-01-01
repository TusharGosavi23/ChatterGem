import dotenv from 'dotenv';
dotenv.config();

import http from 'http';
import app from './app.js';

const port = process.env.PORT || 3000;
// console.log(`PORT from .env: ${port}`); // Debugging

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on ${port}`);
});