import express from 'express';

import setupMiddewares from './middlewares';

const app = express();

setupMiddewares(app);

export default app;
