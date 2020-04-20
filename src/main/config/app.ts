import express from 'express';

import setupMiddewares from './middlewares';
import setupRoutes from './routes';

const app = express();

setupMiddewares(app);
setupRoutes(app);

export default app;
