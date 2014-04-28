#!/usr/bin/env node
var greet = require('../'),
    name  = process.argv[2],
    parseArgs = require('minimist')(process.argv);
console.log(greet(name,parseArgs.drunk));
