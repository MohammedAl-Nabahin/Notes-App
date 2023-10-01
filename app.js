const fs = require('fs');
const validator = require('validator')
const chalk = require('chalk');
const yargs = require('yargs');

// const Notes = require('./notes.js');
// const msg = Notes();
// console.log(msg)

// console.log(validator.isEmail('user@user.com'))
// fs.writeFileSync('notes.txt' , 'Hello World');
// fs.appendFileSync('notes.txt' , 'Hello Again!');


// console.log(chalk.cyan.inverse.bold('Success!'))


//Getting an input from the user , !using process golbal variable (argv) :


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