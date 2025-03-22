// server.js

// Import the Express module, which provides a robust set of features for web applications.
const express = require("express");

// Create an instance of an Express application.
const app = express();

// Define the port number on which the server will listen.
const port = 8080;

// Use Express middleware to serve static files from the "public" directory.
// This means any file in the "public" folder (e.g., index.html, CSS, images) can be accessed via HTTP.
app.use(express.static("public"));

// Start the server and have it listen on the specified port and on all network interfaces ("0.0.0.0").
// Using "0.0.0.0" ensures that the server is accessible from any device on your local network.
app.listen(port, "0.0.0.0", () => {
  // Log a confirmation message to the console once the server is up and running.
  console.log(`Server running at http://localhost:${port}`);
});
