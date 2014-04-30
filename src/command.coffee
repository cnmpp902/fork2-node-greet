greet = require './index'
name  = process.argv[2]
parseArgs = require('minimist')(process.argv.slice(2))

command = ()->
    console.log greet(name,parseArgs.drunk)

module.exports = command
