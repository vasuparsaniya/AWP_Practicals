const fs = require('fs');

// Create a file
fs.writeFile('example.txt', 'Vasu Parsaniya', (err) => {
  if (err) throw err;
  console.log('File created!');
});

// Read a file
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File contents:', data);
});

// Write to a file
fs.appendFile('example.txt', '\nThis is a new line.', (err) => {
  if (err) throw err;
  console.log('Data written to file!');
});

// Delete a file
fs.unlink('example.txt', (err) => {
  if (err) throw err;
  console.log('File deleted!');
});
