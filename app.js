const yargs = require('yargs');

// add command
yargs.command({
    command: 'add',
    describe : 'adding a new note.',
    handler: ()=>{
        console.log("adding your note")
    }
})

//remove command
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    handler: ()=>{
        console.log("remove me")
    }
})

//list command
yargs.command({
    command: 'list',
    describe: 'listing the notes',
    handler: ()=>{
        console.log("All for one")
    }
})

//read command
yargs.command({
    command: 'read',
    describe: 'reading the notes',
    handler: ()=>{
        console.log("one from all")
    }
})


console.log(yargs.argv)