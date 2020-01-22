const chalk = require("chalk")

const yargs = require('yargs')

const notes = require("./notes")
// console.log(process.argv)

yargs.version('1.1.0')


//create add command 

yargs.command({
  command: 'add',
  describe: "add a new note",
  builder: {
    title:  {
      describe: "note title",
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body)
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


yargs.parse()
// console.log(yargs.argv)