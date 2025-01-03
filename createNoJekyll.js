const fs = require('fs');
const filePath = './out/.nojekyll';

fs.writeFile(filePath, '', (err) => {
  if (err) {
    console.error(`Error creating ${filePath}:`, err);
  } else {
    console.log(`${filePath} created successfully.`);
  }
});