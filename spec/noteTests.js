it('Adds a new note', () => {
  let note = new Note();
  expect(note.add('this is a note')).toEqual('this is a note')
});

it('Stores a new note', () => {
  let note = new Note();
  note.add('Note 1: Walk the dog');
  expect(note.list).toContain('Note 1: Walk the dog')
});

it('Stores a new note - equal test', () => {
  let note = new Note();
  note.add('Note 1: Walk the dog');
  expect(note.list).toEqual('Note 1: Walk the dog')
});

it('Stores a new note - unequal test', () => {
  let note = new Note();
  note.add('Note 1: Walk the dog');
  note.add('Note 2: Feed the dog');
  expect(note.list).toNotEqual('Note 1: Walk the dog')
});

it('Stores notes in an array', () => {
  let note = new Note();
  note.add('Note 1: Walk the dog');
  note.add('Note 2: Feed the dog');
  expect(note.list).toBeAnArray()
})

it('Shows all notes in a list', () => {
  let note = new Note();
  note.add('Note 1: Walk the dog');
  note.add('Note 2: Feed the dog');
  note.add('Note 3: Buy food');
  expect(note.list).toContain('Note 1: Walk the dog', 'Note 2: Feed the dog', 'Note 3: Buy food')
});

it('Deletes a note', () => {
  let note = new Note();
  note.add('Note 1: Walk the dog');
  note.add('Note 2: Feed the dog');
  note.delete('Note 1: Walk the dog');
  expect(note.list).toNotContain('Note 1: Walk the dog')
});