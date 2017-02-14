var gulp = require('gulp'),
    exec = require('child_process').exec;

module.exports = function() {
  exec('node node_modules/json-server/bin/index.js --watch mocks/db.json --static ./', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
};
