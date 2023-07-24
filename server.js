const path = require('path');
const fs = require('fs');

const clientsFolderPath = path.join(__dirname, 'Clients');
const aboutFolderPath = path.join(clientsFolderPath, 'About');
const blogFolderPath = path.join(clientsFolderPath, 'Blog');
const contactFolderPath = path.join(clientsFolderPath, 'Contact');

// Create and write to file inside Clients folder
fs.writeFile(
  path.join(clientsFolderPath, 'index.html'),
  'Hello World!',
  err => {
    if (err) throw err;
    console.log('File written to...');
  }
);

// Create and write to file inside About folder
fs.writeFile(
    path.join(aboutFolderPath, 'index.html'),
    'Hello hello',
    err => {
        if (err) throw err;
        console.log('File written to...');
      }
);

// Create and write to file inside About folder
fs.writeFile(
    path.join(blogFolderPath, 'index.html'),
    'Hi Barbie',
    err => {
        if (err) throw err;
        console.log('File written to...');
      }
);

// Create and write to file inside About folder
fs.writeFile(
    path.join(contactFolderPath, 'index.html'),
    'Hi Barbie',
    err => {
        if (err) throw err;
        console.log('File written to...');
      }
);

// Create subfolders inside Clients folder
const subfolders = ['About', 'Contact', 'Blog'];
subfolders.forEach(subfolder => {
  const subfolderPath = path.join(clientsFolderPath, subfolder);
  if (!fs.existsSync(subfolderPath)) {
    fs.mkdirSync(subfolderPath);
    console.log(`"${subfolder}" folder created...`);
  }
});
