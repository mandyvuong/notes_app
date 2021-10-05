class Note {
  constructor(){
    this.list = [];
    this.abbreviatedList = [];
  }

  add(note){
    this.list.push(note);
  }

  delete(note){ // update method to complete?
    console.log(this.list)
    let pos = this.list.indexOf(note)
    let removedItem = this.list.splice(pos, 1)
    console.log(this.list)
    return removedItem
  }

  abbreviateEveryNote() {
   this.abbreviatedList = this.list.map(note => note.substr(0, 20))
  }
}

console.log(this.abbreviatedList);
