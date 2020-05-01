//import validator from 'validator'; //Es6
const validator = require('validator');
const yarg = require('yargs');
const chalk = require('chalk'); //Es5 
const notes= require('./note.js');



//customize version of yarg

//create add command
yarg.command({
    command: 'add',
    describe: 'add a new note',
    builder : {
        title: {
            describe : 'Note title',
            demandOption: true,
            type: 'string'
        },
        body : {
            describe : 'Body',
            demandOption : true,
            type: 'string'
        }

    },
    handler(argv)
    {
        notes.addNotes(argv.title, argv.body);
    }
})

//Create remove command
yarg.command({
    command: 'remove',
    describe: 'removing the note',
    title : {
            describe :'title of note',
            demandOption : true,
            type: 'string'
    },
    handler(argv){
        
        console.log("start");
        notes.removeNote(argv.title);
        
    }
})

yarg.command({
    command: 'list',
    describe :'you can list',
    handler: function(){
        notes.listNotes();
    }
})

yarg.command({
    command :'read',
    describe :' you can read me',
    handler: function(){
        console.log("you can read the file ");
    }
})
// Add notes

yarg.parse();
// remove, read, list 
//console.log(yarg.argv);


