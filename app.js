const chalk = require("chalk")

const yargs = require('yargs')

// console.log(process.argv)

yargs.version('1.1.0')


//create add command 

yargs.command({
  command: 'add',
  describe: "add a new note",
  handler: function () {
    console.log("adding note...")
  }
})

yargs.command({
  command: "remove",
  describe: "remove note",
  handler: function () {
    console.log('remove note')
  }
})

yargs.command({
  command: "list",
  describe: "list all notes",
  handler: function () {
    console.log('list of notes')
  }
})

yargs.command({
  command: "read",
  describe: "read note",
  handler: function () {
    console.log('read note')
  }
})


console.log(yargs.argv)