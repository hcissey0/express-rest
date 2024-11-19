import { Router } from 'express';

/**
 * Wraps an Express route handler to handle async operations safely.
 * Ensures that any errors thrown in the async handler are passed to Express's error handling middleware.
 * 
 * @template T
 * @param {(req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => Promise<T>} fn 
 * The async route handler function to wrap
 * @returns {(req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void} 
 * A middleware function that executes the handler and catches any errors
 */
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

/**
 * Creates an Express router with enhanced async support.
 * Automatically wraps async route handlers with error handling functionality.
 * Supports all standard HTTP methods (GET, POST, PUT, DELETE, PATCH).
 * 
 * @returns {Router} An Express router instance with wrapped async handler support
 */
export function createRouter() {
    const router = Router();
    const originalMethods = ['get', 'post', 'put', 'delete', 'patch'];

    // Override router methods to automatically wrap handlers
    originalMethods.forEach(method => {
        const originalMethod = router[method].bind(router);
        router[method] = function (path, ...handlers) {
            const wrappedHandlers = handlers.map(handler => 
                typeof handler === 'function' ? asyncHandler(handler) : handler
            );
            return originalMethod(path, ...wrappedHandlers);
        };
    });

    return router;
}