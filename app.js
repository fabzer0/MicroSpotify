import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import modules from './src/modules';
import cors from 'cors';



// Set up the express app
const app = express();

// Log requests to the console
app.use(logger('dev'));
app.use(cors());

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set base url for api
modules(app);

// catch all routers
app.use('*', (req, res) => res.status(404).json({
  message: 'Not Found. Use /api/v1 to access the api'
}));

// module.exports = app;
export default app;
