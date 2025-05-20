// // This code creates an Express server that listens on port 1245 and uses the routes defined in the routes/index.js file
import express from 'express';
import routes from './routes/index.js';

const app = express();

const port = 1245;

app.use('/', routes);

app.listen(port);

export default app;
