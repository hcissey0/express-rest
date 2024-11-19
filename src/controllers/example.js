/**
 * Controller handling example-related operations.
 * Provides endpoints for managing example resources.
 * 
 * @class
 * @classdesc Handles CRUD operations for example resources
 */
export default class ExampleController {
    /**
     * Retrieves all examples from the system.
     * Currently returns a mock response for demonstration.
     * 
     * @static
     * @async
     * @param {import("express").Request} req - Express request object
     * @param {import("express").Response} res - Express response object
     * @returns {Promise<import("express").Response>} JSON response with examples data
     * 
     * @example
     * // Route setup
     * router.get('/examples', ExampleController.getAllExamples);
     * 
     * // Response format
     * // Status: 200 OK
     * // {
     * //   "status": "success",
     * //   "message": "Examples retrieved successfully",
     * //   "data": [...]
     * // }
     */
    static async getAllExamples(req, res) {
        const examples = [
            { id: 1, name: 'Example 1' },
            { id: 2, name: 'Example 2' }
        ];
        return res.ok({examples}, "Examples retrieved successfully");
    }
}