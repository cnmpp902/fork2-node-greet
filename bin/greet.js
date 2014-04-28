#!/usr/bin/env node
var greet = require('../'),
    name  = process.argv[2],
    parseArgs = require('minimist')(process.argv.slice(2));
console.log(parseArgs);
console.log(greet(name,parseArgs.drunk));
