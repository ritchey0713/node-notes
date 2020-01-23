const fs = require("fs")

const getNotes = () => {
  return "All notes"
}

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNotes = notes.filter((note) => {
    return note.title === title
  })

  if(duplicateNotes.length === 0){
    notes.push({
      title,
      body
    })
    saveNotes(notes)
    console.log("note saved")
  } else {
    console.log("duplicate title!")
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync("notes.json", dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

const removeNote = (title) => { 
  const notes = loadNotes()
  const newNotes = notes.filter((note) => {
    return note.title !== title
  })

  if(newNotes.length < notes.length){
    saveNotes(newNotes)
  } else {
    console.log("no note found!")
  }
   
  
}

module.exports = {
  getNotes,
  addNote,
  removeNote
}