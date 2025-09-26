const STORAGE_KEY = 'notes-app-data';

// data awal
const initialNotes = [
  {
    id: 'notes-1',
    title: 'Babel',
    body: 'Babel merupakan tools open-source ...',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
  },
  {
    id: 'notes-2',
    title: 'Functional Component',
    body: 'Functional component merupakan React component ...',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
  },
  {
    id: 'notes-3',
    title: 'Modularization',
    body: 'Dalam konteks pemrograman JavaScript ...',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
  },
  {
    id: 'notes-4',
    title: 'Lifecycle',
    body: 'Dalam konteks React component, lifecycle ...',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
  },
  {
    id: 'notes-5',
    title: 'ESM',
    body: 'ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
  },
  {
    id: 'notes-6',
    title: 'Module Bundler',
    body: 'Module bundler merupakan tools untuk menggabungkan seluruh modul ...',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
  },
];

// ambil data dari localStorage
function getNotes() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : initialNotes;
}

// simpan data ke localStorage
function saveNotes(notes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

function getAllNotes() {
  return getNotes();
}

function getNote(id) {
  return getNotes().find((note) => note.id === id);
}

function getActiveNotes() {
  return getNotes().filter((note) => !note.archived);
}

function getArchivedNotes() {
  return getNotes().filter((note) => note.archived);
}

function addNote({ title, body }) {
  const notes = getNotes();
  const newNote = {
    id: `notes-${+new Date()}`,
    title: title || '(untitled)',
    body,
    createdAt: new Date().toISOString(),
    archived: false,
  };
  notes.push(newNote);
  saveNotes(notes);
}

function deleteNote(id) {
  const notes = getNotes().filter((note) => note.id !== id);
  saveNotes(notes);
}

function archiveNote(id) {
  const notes = getNotes().map((note) =>
    note.id === id ? { ...note, archived: true } : note
  );
  saveNotes(notes);
}

function unarchiveNote(id) {
  const notes = getNotes().map((note) =>
    note.id === id ? { ...note, archived: false } : note
  );
  saveNotes(notes);
}

function editNote({ id, title, body }) {
  const notes = getNotes().map((note) =>
    note.id === id ? { ...note, title, body } : note
  );
  saveNotes(notes);
}

export {
  getAllNotes,
  getActiveNotes,
  getArchivedNotes,
  deleteNote,
  editNote,
  getNote,
  archiveNote,
  unarchiveNote,
  addNote,
};
