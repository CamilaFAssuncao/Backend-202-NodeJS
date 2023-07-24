const path = require('path');
const fs = require('fs');

const clientsFolderPath = path.join(__dirname, 'Clients');
const aboutFolderPath = path.join(clientsFolderPath, 'About');
const blogFolderPath = path.join(clientsFolderPath, 'Blog');
const contactFolderPath = path.join(clientsFolderPath, 'Contact');

// Create subfolders inside Clients folder
const subfolders = ['About', 'Contact', 'Blog'];
subfolders.forEach(subfolder => {
  const subfolderPath = path.join(clientsFolderPath, subfolder);
  if (!fs.existsSync(subfolderPath)) {
    fs.mkdirSync(subfolderPath);
    console.log(`"${subfolder}" folder created...`);
  }
});

// Create and write to file inside Clients folder
fs.writeFile(
  path.join(clientsFolderPath, 'index.html'),
  'Hello World!',
  err => {
    if (err) throw err;
    console.log('File written to...');
  }
);

fs.writeFile(
    path.join(clientsFolderPath, 'style.css'),
    'body { background-color:#FF00FF; color: #333; font-family: Arial, sans-serif; }',
    err => {
      if (err) throw err;
      console.log('CSS file written...');
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

fs.writeFile(
    path.join(aboutFolderPath, 'style.css'),
    'body { background-color:#FFC0CB; color: #333; font-family: Arial, sans-serif; }',
    err => {
      if (err) throw err;
      console.log('CSS file written...');
    }
  );

// Create and write to file inside Blog folder
fs.writeFile(
    path.join(blogFolderPath, 'index.html'),
    'Hi Barbie',
    err => {
        if (err) throw err;
        console.log('File written to...');
      }
);

fs.writeFile(
    path.join(blogFolderPath, 'style.css'),
    'body { background-color:#DA70D6; color: #333; font-family: Arial, sans-serif; }',
    err => {
      if (err) throw err;
      console.log('CSS file written...');
    }
  );

// Create and write to file inside Contact folder
fs.writeFile(
    path.join(contactFolderPath, 'index.html'),
    'Hi Barbie',
    err => {
        if (err) throw err;
        console.log('File written to...');
      }
);

fs.writeFile(
    path.join(contactFolderPath, 'style.css'),
    'body { background-color:#FF69B4; color: #333; font-family: Arial, sans-serif; }',
    err => {
      if (err) throw err;
      console.log('CSS file written...');
    }
  );


