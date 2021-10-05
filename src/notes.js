class Note {
  constructor(){
    this.list = [];
  }

  add(note){
    this.list.push(note);
  }

  delete(indexInList){
    // noteIndex = this.list.findIndex(note);
    // console.log(noteIndex)
    // this.list.splice(noteIndex, 1);
    this.list.splice(indexInList, 1)
  }
}