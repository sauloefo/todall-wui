"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('pkginfo')(module, 'version');
var version = module.exports.version;
console.log("Initializing TodALL Web Application version " + version + "...");
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var httpPort = process.env.PORT || 3000;
var hostname = process.env.HOSTNAME || 'localhost';
var entryURL = "http://" + hostname + ":" + httpPort + "/";
var app = express_1.default()
    .use('/', express_1.default.static(path_1.default.join(__dirname, '/public')))
    // .get('/', (req, res) => {
    //   res.send('hello world.');
    // })
    .listen(httpPort)
    .on('listening', function () { return console.log("TodALL Web Application (version " + version + ") running on " + entryURL + "."); })
    .on('error', function (error) { return console.error("Failure to initialize TodALL Web Application (version " + version + ") on " + entryURL + ":", error); });
