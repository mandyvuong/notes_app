document.addEventListener("DOMContentLoaded", () => {

const note = new Note(); 


document.querySelector('#add-note-button').addEventListener('click', (clickevent) => {
  clickevent.preventDefault();
  let newNote = document.querySelector('#add-note').value
  note.add(newNote); 
  let lastnote = note.lastNotes();    

  // This is the API Function
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({"text":`${lastnote}`});

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
    console.log(data.emojified_text)

    let item = document.createElement('li')
    let textnode = document.createTextNode(data.emojified_text)  
    item.appendChild(textnode)  
    document.querySelector('#all-notes').appendChild(item) 

  })     
  
  })   
  console.log(note)
});
