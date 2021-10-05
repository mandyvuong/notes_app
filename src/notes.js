class Note {
  constructor(){
    this.list = [];
  }

  add(note){
    this.list.push(note);
  }

  delete(note){
    console.log(this.list)
    let pos = this.list.indexOf(note)
    let removedItem = this.list.splice(pos, 1)
    console.log(this.list)
    return removedItem
  }
}