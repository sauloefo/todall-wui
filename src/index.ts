require('pkginfo')(module, 'version');
const { version } = module.exports;
console.log(`Initializing TodALL Web Application version ${version}...`);

import express from 'express';

const httpPort = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || 'localhost';

const entryURL = `http://${hostname}:${httpPort}/`;

const app = express()
  .get('/', (req, res) => {
    res.send('hello world.');
  })
  .listen(httpPort)
  .on('listening', () => console.log(`TodALL Web Application (version ${version}) running on ${entryURL}.`))
  .on('error', error => console.error(
    `Failure to initialize TodALL Web Application (version ${version}) on ${entryURL}:`
    , error
  ));