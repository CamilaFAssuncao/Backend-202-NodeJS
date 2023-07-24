
const path = require('path');
const fs = require('fs');

// Create and write to file
fs.writeFile(
    path.join(__dirname, 'Clients', 'index.html'), // Corrected path with 'Clients' folder and 'index.html' file
    'Hello World!', // Content to be written in the file
    err => {
        if (err) throw err;
        console.log('File written to...');
    }
);
