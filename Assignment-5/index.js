// Import required core modules 
const http = require("http"); // Module to create basic HTTP server
const fs = require("fs"); // Module to work with file system (file system)

// Create HTTP server
const server = http.createServer((req, res) => {

  // req.url contains the path user is requesting (like /, /about, /contact.)
  // Routing logic using if-else
  if (req.url === "/") {

    // When user visits homepage → load home.html
    fs.readFile("home.html", (err, data) => {
      // Handle error (file not found or other issue)
      if (err) {
        res.end("Error loading file");
      } else {
        // Send HTML file content as response
        res.end(data);
      }
    });
  } 
  
  else if (req.url === "/about") {
    // When user visits /about → load about.html
    fs.readFile("about.html", (err, data) => {

      if (err) {
        res.end("Error loading file");
      } else {
        res.end(data);
      }
    });
  } 
  
  else if (req.url === "/contact") {
    // When user visits /contact → load contact.html
    fs.readFile("contact.html", (err, data) => {

      if (err) {
        res.end("Error loading file");
      } else {
        res.end(data);
      }
    });
  } 
  
  else {
    // If no route matches → show custom 404 page
    fs.readFile("404.html", (data) => {
        res.end(data);
    });
  }
  
});

// Start server on port 3000
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
