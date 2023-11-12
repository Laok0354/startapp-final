# Authentication API Documentation

This API provides authentication and authorization functionality using JWT tokens and bcrypt for password hashing.

## Routes

### 1. Logout

- **Method:** DELETE
- **Path:** `/logout`
- **Middleware:** `authenticateToken`
- **Description:** Logs out the user by deleting the refresh token from the database and clearing cookies.
- **Response:**
  - 200 OK: User logged out
  - 400 Bad Request: Cannot find token
  - 500 Internal Server Error: Server error

### 2. Get Access Token

- **Method:** GET
- **Path:** `/token`
- **Middleware:** `authenticateToken`
- **Description:** Generates a new access token and sends it in a cookie.
- **Response:**
  - 200 OK: Returns the new access token
  - 500 Internal Server Error: Server error

### 3. Login

- **Method:** POST
- **Path:** `/login`
- **Description:** Authenticates the user and generates access and refresh tokens.
- **Request Body:**
  - email: User's email
  - password: User's password
- **Response:**
  - 200 OK: Login success, returns access and refresh tokens
  - 400 Bad Request: One or more required fields are empty or cannot find user
  - 500 Internal Server Error: Server error

### 4. Check Authorization

- **Method:** GET
- **Path:** `/check`
- **Middleware:** `authenticateToken`
- **Description:** Checks if the user is authorized by validating the access token.
- **Response:**
  - 200 OK: Authorized
  - 401 Unauthorized: Unauthorized
  - 500 Internal Server Error: Server error

## Helper Function

### generateAccessToken

- **Description:** Generates a new access token for the user.
- **Parameters:**
  - user: User object
- **Returns:** JWT access token

## Dependencies

- **dotenv:** Loads environment variables from a .env file.
- **express:** Web application framework for Node.js.
- **bcrypt:** Library for hashing passwords.
- **jsonwebtoken:** JSON Web Token implementation.
- **@prisma/client:** Prisma client for database operations.
- **authMiddleware:** Middleware for authenticating JWT tokens.

## Environment Variables

- **ACCESS_TOKEN_SECRET:** Secret key for signing access tokens.
- **REFRESH_TOKEN_SECRET:** Secret key for signing refresh tokens.

## Usage

1. Install dependencies: `npm install`
2. Set environment variables in a `.env` file.
3. Run the server: `node your_server_file.js`
