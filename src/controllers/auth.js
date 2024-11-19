/**
 * Controller handling user authentication operations.
 * Provides endpoints for user registration and login.
 * 
 * @class
 * @classdesc Manages user authentication and authorization processes
 */
export default class AuthController {
    /**
     * Registers a new user in the system.
     * 
     * @static
     * @async
     * @param {import("express").Request} req - Express request object
     * @param {import("express").Response} res - Express response object
     * @returns {Promise<import("express").Response>} JSON response with user data
     * 
     * @example
     * // Request body
     * {
     *   "email": "user@example.com",
     *   "password": "securepassword",
     *   "name": "John Doe"
     * }
     * 
     * // Response format
     * // Status: 201 Created
     * // {
     * //   "status": "success",
     * //   "message": "User registered successfully",
     * //   "data": {
     * //     "user": {
     * //       "id": 1,
     * //       "email": "user@example.com",
     * //       "name": "John Doe"
     * //     }
     * //   }
     * // }
     */
    static async register(req, res) {
        // Mock user registration
        const user = {
            id: 1,
            email: req.body.email,
            name: req.body.name
        };

        return res.created({ user }, "User registered successfully");
    }

    /**
     * Authenticates a user and returns a JWT token.
     * 
     * @static
     * @async
     * @param {import("express").Request} req - Express request object
     * @param {import("express").Response} res - Express response object
     * @returns {Promise<import("express").Response>} JSON response with user data and token
     * 
     * @example
     * // Request body
     * {
     *   "email": "user@example.com",
     *   "password": "securepassword"
     * }
     * 
     * // Response format
     * // Status: 200 OK
     * // {
     * //   "status": "success",
     * //   "message": "Login successful",
     * //   "data": {
     * //     "user": {
     * //       "id": 1,
     * //       "email": "user@example.com",
     * //       "name": "John Doe"
     * //     },
     * //     "token": "jwt_token_here"
     * //   }
     * // }
     */
    static async login(req, res) {
        // Mock login response
        const userData = {
            user: {
                id: 1,
                email: req.body.email,
                name: "John Doe"
            },
            token: "jwt_token_here"
        };
        
        return res.ok(userData, "Login successful");
    }
}