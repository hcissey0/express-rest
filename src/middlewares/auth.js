import { Unauthorized } from '../utils/errors.js';

/**
 * Authentication middleware for protecting routes.
 * Verifies the user's authentication status and attaches user data to the request.
 * Throws Unauthorized error if authentication fails.
 * 
 * @async
 * @param {import("express").Request} req - Express request object
 * @param {import("express").Response} res - Express response object
 * @param {import("express").NextFunction} next - Express next middleware function
 * @returns {Promise<void>} 
 * @throws {Unauthorized} When authentication fails or token is invalid
 * 
 * @example
 * // Protect a route with authentication
 * router.get('/protected', auth, (req, res) => {
 *   // Access authenticated user data
 *   const userId = req.user.id;
 * });
 * // or
 * router.use(auth);
 * router.get('/protected', (req, res) => {
 *   // Access authenticated user data
 *   const userId = req.user.id;
 * });
 */
export const auth = async (req, res, next) => {
    try {
        // your authentication logic here

        req.user = { id: 1 };
        next();
    } catch (error) {
        next(new Unauthorized('Invalid token'));
    }
};