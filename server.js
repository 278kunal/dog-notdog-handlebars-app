var exec = require('child_process').exec,
    port = process.env.PORT;

console.log("Running Server on "+port);
 exec('node ./node_modules/json-server/bin/index.js --watch app/src/assets/data/db.json --routes app/src/assets/data/routes.json --static ./ --port '+port, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });