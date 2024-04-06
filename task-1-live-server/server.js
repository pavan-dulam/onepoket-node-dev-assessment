// Import required modules
const http = require('http');

// Define port number
const PORT = 3000;

// Create HTTP server
const server = http.createServer((req, res) => {
    // Set response headers
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send response
    res.end('Hello, World!\n');
});

// Start server and listen on defined port
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
