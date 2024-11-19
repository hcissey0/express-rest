# Express REST API Template

A modern, production-ready template for building RESTful APIs with Express.js. Features standardized error handling, response formatting, and authentication scaffolding.

![Node.js](https://img.shields.io/badge/Node.js-v18.0%2B-green)
![Express](https://img.shields.io/badge/Express-v4.21-blue)
![License](https://img.shields.io/badge/License-ISC-green)

## Features

- Modern JavaScript - ES Modules
- Authentication Ready - Built-in auth middleware and routes
- Standardized Responses - Consistent API response formatting
- Error Handling - Centralized error handling with custom error classes
- Route Wrapper - Async route handler with automatic error catching
- Project Structure - Organized and scalable project architecture
- Hot Reload - Development server with automatic reloading
- Well Documented - Comprehensive JSDoc documentation

## Project Structure

```
express-rest/
├── src/
│   ├── controllers/     # Route controllers
│   ├── middlewares/     # Custom middlewares
│   ├── routes/          # API routes
│   ├── utils/           # Utility functions
│   └── app.js          # Express app configuration
├── index.js            # Application entry point
├── package.json        # Project dependencies
└── tsconfig.json       # TypeScript configuration
```

## Quick Start

1. Clone the template
   ```bash
   git clone <repository-url>
   cd express-rest
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start development server
   ```bash
   npm run dev
   ```

The server will start on port 3000 (default) with hot reload enabled.

## Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
PORT=3000
NODE_ENV=development
```

### Available Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with hot reload

## Authentication

The template includes a basic authentication setup:

```javascript
// Protect a single route
router.get('/protected', auth, controller.method);

// Protect all routes in a router
router.use(auth);
router.get('/protected', controller.method);
```

## Response Handling

Standardized response formatting:

```javascript
// Success response (200 OK)
res.ok(data, "Operation successful");

// Created response (201)
res.created(data, "Resource created");

// No Content response (204)
res.noContent("Resource deleted");
```

Response format:
```json
{
  "status": "success",
  "message": "Operation successful",
  "data": { ... }
}
```

## Error Handling

Built-in error classes for common scenarios:

```javascript
// Not Found Error
throw new NotFound("Resource not found");

// Bad Request Error
throw new BadRequest("Invalid input");

// Unauthorized Error
throw new Unauthorized("Invalid token");
```

Error response format:
```json
{
  "status": "fail",
  "message": "Error message"
}
```

## Route Wrapper

Automatic error handling for async routes:

```javascript
router.get('/examples', ExampleController.getAllExamples);

// Controller
static async getAllExamples(req, res) {
    const examples = await Example.find();
    return res.ok({ examples }, "Examples retrieved successfully");
}
```

## API Documentation

### Auth Endpoints
- `POST /api/v1/auth/register` - Register a new user
- `POST /api/v1/auth/login` - Authenticate user

### Example Endpoints
- `GET /api/v1/examples` - Get all examples

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Added some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Express.js team for the amazing framework
- Node.js community for the continuous support

## Contact

Hassan Cissey Tijani - hcissey0@gmail.com

Project Link: [https://github.com/hcissey0/express-rest](https://github.com/hcissey0/express-rest)

Enjoy building RESTful APIs with Express.js!