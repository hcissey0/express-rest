import express from 'express';
import { errorHandler, notFoundHandler } from './utils/error-handler.js';
import { responseHandler } from './utils/response-handler.js';
import authRouter from './routes/auth.js';
import exampleRouter from './routes/example.js';

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Response handler middleware
app.use(responseHandler);

// Routes will go here
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/examples', exampleRouter);

// Handle undefined routes
app.use(notFoundHandler);

// Error handler middleware (should be last)
app.use(errorHandler);

export default app;
