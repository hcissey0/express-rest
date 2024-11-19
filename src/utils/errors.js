/**
 * Base class for all API-specific errors.
 * Extends the native Error class with additional properties for HTTP status handling.
 * 
 * @extends Error
 * @property {string} status - The status type ('fail' for 4xx, 'error' for 5xx)
 * @property {number} statusCode - The HTTP status code
 */
class APIError extends Error {
    status;
    statusCode;
    /**
     * Creates a new API error with the specified status code and message.
     * 
     * @param {number} statusCode - HTTP status code (4xx or 5xx)
     * @param {string} message - Error message describing what went wrong
     */
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';

        Error.captureStackTrace(this, this.constructor);
    }
}

/**
 * Represents a 404 Not Found error.
 * Used when a requested resource cannot be found.
 * 
 * @extends APIError
 */
class NotFound extends APIError {
    /**
     * Creates a new NotFound error.
     * 
     * @param {string} message - Description of what resource was not found
     */
    constructor(message) {
        super(404, message);
    }
}

/**
 * Represents a 400 Bad Request error.
 * Used when the request is malformed or contains invalid parameters.
 * 
 * @extends APIError
 */
class BadRequest extends APIError {
    /**
     * Creates a new BadRequest error.
     * 
     * @param {string} message - Description of why the request was invalid
     */
    constructor(message) {
        super(400, message);
    }
}

/**
 * Represents a 401 Unauthorized error.
 * Used when authentication is required but has failed or not been provided.
 * 
 * @extends APIError
 */
class Unauthorized extends APIError {
    /**
     * Creates a new Unauthorized error.
     * 
     * @param {string} message - Description of the authentication failure
     */
    constructor(message) {
        super(401, message);
    }    
}

/**
 * Represents a 404 Route Not Found error.
 * Used specifically when a requested API endpoint does not exist.
 * 
 * @extends NotFound
 */
class RouteNotFound extends NotFound {
    /**
     * Creates a new RouteNotFound error.
     * 
     * @param {string} path - The path that was not found
     */
    constructor(path) {
        super(`Route ${path} does not exist on this server`);
    }
}

export { APIError, NotFound, BadRequest, Unauthorized, RouteNotFound };