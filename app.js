const yargs = require('yargs');
const chalk = require('chalk');

// add command
yargs.command({
    command: 'add',
    describe : 'adding a new note.',
    builder: {
        title:{
            describe: 'Note  title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note  body',
            demandOption: true,
            type: 'string'
        }        
    },
    handler: (argv)=>{
        console.log(chalk.blue.inverse("Title: "), argv.title);
        console.log(chalk.gray.inverse("Body: "), argv.body);
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


yargs.parse()