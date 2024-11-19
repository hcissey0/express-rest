import { APIError, RouteNotFound } from "./errors.js";

/**
 * Global error handling middleware for Express application.
 * Processes errors and sends appropriate HTTP responses:
 * - For APIError instances: uses the error's status code and message
 * - For other errors: returns 500 Internal Server Error
 * 
 * @param {Error} error - The error object thrown in the application
 * @param {import("express").Request} req - Express request object
 * @param {import("express").Response} res - Express response object
 * @param {import("express").NextFunction} next - Express next middleware function
 * @returns {import("express").Response} JSON response with error details
 * 
 * @example
 * // Usage in Express app
 * app.use(errorHandler);
 * 
 * // Response format for APIError
 * // { "message": "Error message", "status": "fail"|"error" }
 */
const errorHandler = (error, req, res, next) => {
    if (error instanceof APIError) { // Check if the error is an instance of APIError
        return res.status(error.statusCode).json({ message: error.message, status: error.status });
    }
    
    console.error(error); // Log the error if it's not an instance of APIError
    return res.status(500).json({ message: "Internal Server Error", status: "error" });
};

/**
 * Middleware for handling undefined routes.
 * Creates a RouteNotFound error for any request that reaches this middleware.
 * 
 * @param {import("express").Request} req - Express request object
 * @param {import("express").Response} res - Express response object
 * @param {import("express").NextFunction} next - Express next middleware function
 * 
 * @example
 * // Usage in Express app
 * app.use(notFoundHandler);
 * 
 * // Response format
 * // Status: 404 Not Found
 * // {
 * //   "status": "fail",
 * //   "message": "Route /unknown-path does not exist on this server"
 * // }
 */
const notFoundHandler = (req, res, next) => {
    next(new RouteNotFound(req.originalUrl));
};

export { errorHandler, notFoundHandler };
