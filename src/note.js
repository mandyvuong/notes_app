class Note {
  constructor() {
    this.list = [];
    this.abbreviatedList = [];
  }

  add(note) {
    this.list.push(note);      
    return note
  }

  delete(note) { // update method to complete?
    let pos = this.list.indexOf(note)
    let removedItem = this.list.splice(pos, 1)
    return removedItem
  }

  abbreviateEveryNote() {
   this.abbreviatedList = this.list.map(note => note.substr(0, 20))
  }

  lastNotes() {
    return this.list[this.list.length -1]
  }
}

console.log(this.abbreviatedList);
