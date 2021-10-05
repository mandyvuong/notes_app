document.addEventListener("DOMContentLoaded", () => {
  const updateNoteList = () => {
    document.getElementById('all-notes').innerText = note.this.list;
    // document.querySelector('#temperature').className = thermostat.energyUsage();
  }


  
const note = new Note(); 

document.querySelector('#add-note-button').addEventListener('click', () => {
  const newNote = document.querySelector('#add-note')
  note.add(newNote);
  console.log(note);
});
