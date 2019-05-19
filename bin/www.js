// This will be the application entry. We will set up our server here.
import http from 'http';
import dotenv from 'dotenv';
import app from '../app';

dotenv.config();

const port = parseInt(process.env.PORT, 10) || 8000;

const server = http.createServer(app);
server.listen(port, async () => {
  app.set('host', `http://localhost:${port}`);

  console.log(`Find me on http://localhost:${port}`);
});
