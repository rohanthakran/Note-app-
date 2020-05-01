const fs = require('fs');
const chalk = require('chalk');
const getNotes = () =>
{
    console.log("Your notes...");
}


const addNotes = (title, body) =>
{
      const notes =loadNotes();
      const duplicatetitle = notes.filter((note) =>  note.title === title);

      if(duplicatetitle.length ==0)
      {
        notes.push({
            title: title,
            body:body
        })
        saveNotes(notes);
        console.log(chalk.green('item is added'));
      }
      else{
        
          console.log(chalk.red('title is already taken'));
      }

      
}
const saveNotes =(notes) =>{
        const dataJson = JSON.stringify(notes);
        fs.writeFileSync('notes.json', dataJson);
}

const loadNotes =() =>
{
    try{
    const dataBuffer = fs.readFileSync('notes.json');
    const data = dataBuffer.toString();
    return JSON.parse(data);
    }
    catch(e){
        return[];
    }
}
const removeNote = (title) =>
{
    const notes  =loadNotes();
    const notekeep = notes.filter((note) =>note.title != title); 
    saveNotes(notekeep);
    if(notes.length > notekeep.length)
    {
    console.log(chalk.green('item is removed'));
    }
    else{
        console.log(chalk.red('no item is removed'));
    }
}
const listNotes =()=> {
    const note = loadNotes();
    console.log(chalk.inverse('your notes'));

    note.forEach((note) => {
        console.log(note.title);
        console.log("f");
    });

}

module.exports ={
    getNotes : getNotes,
    addNotes: addNotes,
    removeNote : removeNote,
    listNotes: listNotes
};