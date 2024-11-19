/**
 * Standard API Response class for consistent response formatting.
 * 
 * @class
 * @classdesc Handles formatting of successful API responses
 */
class APIResponse {
    /**
     * Creates a new APIResponse instance.
     * 
     * @param {*} data - The response data
     * @param {string} message - Response message
     * @param {number} statusCode - HTTP status code (defaults to 200)
     */
    constructor(data, message = '', statusCode = 200) {
        this.data = data;
        this.message = message;
        this.statusCode = statusCode;
        this.status = 'success';
    }
}

/**
 * Response handler middleware for Express application.
 * Attaches response utility methods to the response object.
 * 
 * @param {import("express").Request} req - Express request object
 * @param {import("express").Response} res - Express response object
 * @param {import("express").NextFunction} next - Express next middleware function
 * 
 * @example
 * // In your Express app
 * app.use(responseHandler);
 * 
 * // In your controller
 * res.ok(data, "Operation successful");
 * res.created(newResource, "Resource created");
 */
export const responseHandler = (req, res, next) => {
    // Helper to send API response
    /**
     * Sends an API response with the specified data, message, and status code.
     * 
     * @function
     * @name sendResponse
     * @kind variable
     * @memberof responseHandler
     * @param {APIResponse} apiResponse
     * @returns {e.Response<any, Record<string, any>>}
     */
    const sendResponse = (apiResponse) => {
        return res.status(apiResponse.statusCode).json({
            status: apiResponse.status,
            message: apiResponse.message,
            data: apiResponse.data
        });
    };

    // 200 OK
    res.ok = (data, message = '') => {
        return sendResponse(new APIResponse(data, message, 200));
    };

    // 201 Created
    res.created = (data, message = '') => {
        return sendResponse(new APIResponse(data, message, 201));
    };

    // 204 No Content
    res.noContent = (message = '') => {
        return sendResponse(new APIResponse(null, message, 204));
    };

    next();
};
