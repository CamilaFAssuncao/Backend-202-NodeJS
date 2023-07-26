const path = require('path');
const fs = require('fs');
const http = require('http');
const portfinder = require('portfinder');


const clientsFolderPath = path.join(__dirname, 'Clients');
const subfolders = [
  { name: 'About', color: '#FFC0CB' },
  { name: 'Contact', color: '#FF69B4' },
  { name: 'Blog', color: '#DA70D6' }
];


// Function to create a folder and write to files inside it
function createFolderAndFiles(folderPath, pageTitle, cssContent) {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    console.log(`"${path.basename(folderPath)}" folder created...`);
  }

  let linksHTML = '';

   // Add links only if the folder is the "Clients" folder
   if (folderPath === clientsFolderPath) {
    linksHTML = `
      <!-- Add links to subfolder pages -->
      <ul>
        <li><a href="./About/index.html">About</a></li>
        <li><a href="./Contact/index.html">Contact</a></li>
        <li><a href="./Blog/index.html">Blog</a></li>
      </ul>
    `;
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${pageTitle}</title>
      <style>
        body { background-color:${subfolder.color}; color: #333; font-family: Arial, sans-serif; }
      </style>
    </head>
    <body>
      <h1>${pageTitle}</h1>
      ${linksHTML}
    </body>
    </html>
  `;

  fs.writeFile(path.join(folderPath, 'index.html'), htmlContent, err => {
    if (err) throw err;
    console.log('HTML file written...');
  });

  fs.writeFile(path.join(folderPath, 'style.css'), cssContent, err => {
    if (err) throw err;
    console.log('CSS file written...');
  });
}

// Create subfolders inside Clients folder
subfolders.forEach(subfolder => {
  const subfolderPath = path.join(clientsFolderPath, subfolder.name);
  const pageTitle = subfolder.name;
  const cssContent = `body { background-color:${subfolder.color}; color: #333; font-family: Arial, sans-serif; }`;

  createFolderAndFiles(subfolderPath, pageTitle, cssContent);
});

// Create and write to file inside Clients folder
const clientsCSSContent = `body { background-color:#FF00FF; color: #333; font-family: Arial, sans-serif; }`;

createFolderAndFiles(clientsFolderPath, 'Clients', clientsCSSContent);

// Find an available port dynamically
portfinder.getPort((err, port) => {
  if (err) {
    console.error('Error finding available port:', err);
  } else {


    const server = http.createServer((req, res) => {
        res.setHeader('Content-Type', 'text/html');
        console.log(`${req.method} ${req.url}`);
      
        const extension = path.extname(req.url).slice(1);
        const type = extension ? types[extension] : types.html;
        const supportedExtension = Boolean(type);
      
        if (!supportedExtension) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end('404: File not found');
          return;
        }

         // routing
  let route = './Clients/';
  switch(req.url) {
    case '/':
      route += 'index.html';
      res.statusCode = 200;
      break;
    case '/About':
      route += 'index.html';
      res.statusCode = 200;
      break;
      case '/Blog':
      route += 'index.html';
      res.statusCode = 200;
      break;
      case '/Contact':
      route += 'index.html';
      res.statusCode = 200;
      break;
    default:
      route += 'index.html';
      res.statusCode = 404;
  }

  // send html
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    //res.write(data);
    res.end(data);
  });
      });
      

    server.listen(port, () => {
      console.log(`Server started on http://127.0.0.1:${port}`);
    });
  }
});
