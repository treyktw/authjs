/**
 * An Array of routes that are public
 * These routes do not require authentication
 */
export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * These Routes are used for authentication
 * these routes will redirect logged in users
 * @type {string[]}
 */

export const authRoutes: string[] = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  '/auth/new-password'
];

/**
 *
 * The Prefix for Api auth routes
 * routes that start with this prefix are used for api auth purposes
 * @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * The Default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/settings";
