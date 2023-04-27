const fs = require('fs');

// Specify the directory path
const directoryPath = '../../../Desktop/';

// Read the directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Log the file names
  console.log('Files in directory:');
  files.forEach((file) => {
    console.log(file);
  });
});
