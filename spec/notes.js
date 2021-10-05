it('can create a new note', ()=>{
  note = new Note();
  note.add('this is a note');
  expect(note.list).toContain ('this is a note')
});

it('can show a list of notes', ()=>{
  note = new Note();
  note.add('this is a note');
  note.add('this is another note');
  expect(note.list).toContain ('this is a note', 'this is another note')
});

xit('can delete a note', ()=>{
  note = new Note();
  note.add('this is a note');
  note.add('this is another note');
  note.delete('this is another note');
  expect(note.list).toEqual ('this is a note')
});