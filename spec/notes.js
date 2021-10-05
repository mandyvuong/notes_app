it('can create a new note', ()=>{
  note = new Note();
  note.add('this is a note');
  expect(note.list).toContain ('this is a note')
});

