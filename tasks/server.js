var gulp = require('gulp'),
    exec = require('child_process').exec;

module.exports = function() {
  exec('node ./node_modules/json-server/bin/index.js --watch app/src/assets/data/db.json --routes app/src/assets/data/routes.json --static ./ --port 80', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
};
