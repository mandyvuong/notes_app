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

  abbreviate(note){
    let abbreviation = note.substring(0, 20);
    return abbreviation
  }

  abbreviateEveryNote() {
   this.abbreviatedList = this.list.map(note => {
      this.abbreviate(note) // returns undefined elements in an array
    });
  }
   

}
