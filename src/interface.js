document.addEventListener("DOMContentLoaded", () => {

let note = new Note(); 

document.querySelector('#add-note-button').addEventListener('click', (clickevent) => {
  clickevent.preventDefault();
  let newNote = document.querySelector('#add-note').value 
  document.querySelector('#add-note').value = "";

  // This is the API Function
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({"text":`${newNote}`});

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://makers-emojify.herokuapp.com/", requestOptions)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    note.add(data.emojified_text)
    note.abbreviateEveryNote()
    localStorage.setItem(note.list.length-1, note.list[note.list.length-1]); // Store

    // each note is in an anchor
    let item = document.createElement('a')
      item.id = `${note.list.length-1}`; 
      item.href = `#${note.list.length-1}`; 
      item.innerText = note.abbreviatedList[note.abbreviatedList.length-1] + '\n'; 
    document.querySelector('#all-notes').appendChild(item)
  })     
  
  makeUrlChangeShowNoteForCurrentPage();

  function makeUrlChangeShowNoteForCurrentPage() {
    window.addEventListener("hashchange", showNoteForCurrentPage);
  };

  function showNoteForCurrentPage() {
    showNote(getNoteFromUrl(window.location));
  };

  function getNoteFromUrl(location) {
    return location.hash.split("#")[1];
  };

  function showNote(Note) {
    document
      .getElementById("foo")
      .innerHTML = note.list[Note];
  };
  })
});
