// next auth route
// import NextAuth from "next-auth"
// import GitHub from 'next-auth/providers/github'

import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

// Define the authentication configuration
const authConfig = {
  // Add any additional NextAuth configurations here
};

// Initialize NextAuth and store it in a variable
const authHandler = NextAuth({
  ...authConfig,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});

// Export the handler
export const { auth, signIn, signOut } = authHandler;

// Define the API route handlers
export const GET = authHandler.handleGet;
export const POST = authHandler.handlePost;
