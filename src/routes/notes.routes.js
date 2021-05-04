const {Router} = require('express');
const router = Router()
const {renderNoteForm,
       createNewNote,
       renderNotes,
       renderEditForm,
       updateNote,
       deleteNote} = require('../controllers/notes.controller');

//agregar nueva nota
router.get('/notes/add',renderNoteForm);
//guardar nueva nota
router.post('/notes/new-note',createNewNote);

//consultar las notas
router.get('/notes',renderNotes);

//Editar notas
router.get('/notes/edit/:id',renderEditForm);
router.post('/notes/edit/:id',updateNote);

//BOrrar notas
router.delete('/notes/delete/:id',deleteNote);
module.exports = router;