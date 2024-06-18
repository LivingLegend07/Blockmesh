const level = require('level');
const path = require('path');

const userProfile = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
const leveldbPath = path.join(userProfile, 'AppData', 'Local', 'Google', 'Chrome', 'User Data', 'Default', 'Local Extension Settings', '<cdlhoepdfnloimhdgpoljnpicclcmgko>');

console.log('LevelDB Path:', leveldbPath);

const db = level(leveldbPath);

db.get('hello', function(err, value) {
  if (err) {
    return console.log('Error fetching value:', err);
  }
  console.log('Stored value:', value);
});

db.createReadStream()
  .on('data', function(data) {
    console.log(data.key, '=', data.value);
  })
  .on('error', function(err) {
    console.log('Error reading stream:', err);
  })
  .on('close', function() {
    console.log('Stream closed');
  })
  .on('end', function() {
    console.log('Stream ended');
  });
