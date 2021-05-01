const notesCtrl = {}

const Note = require('../models/Note');
//renderizar formulario
notesCtrl.renderNoteForm = (req,res)=>{
    res.render('notes/new-note')
}
//crar nueva nota
notesCtrl.createNewNote = async (req,res)=>{
    const {title, description} = req.body;
    const newNote = new Note({title, description});
    await newNote.save();
    res.redirect('/notes');
}
//Consultar notas
notesCtrl.renderNotes = async (req,res)=>{
    const notes = await Note.find().lean();
    res.render('notes/all-notes',{notes});
}
//Editar NOtas, FOrmulario
notesCtrl.renderEditForm = (req,res)=>{
    res.send(`<h2 class='text-warning'>Editar las Nota</h2>`)
}
//Mandar datos al formulario Editar
notesCtrl.updateNote = (req,res)=>{
    res.send(`<h2 class='text-warning'>Nota actualizada</h2>`)
}
//borrar notas
notesCtrl.deleteNote = (req,res)=>{
    res.send(`<h2 class='text-warning'>Borrando Nota</h2>`)
}
module.exports = notesCtrl;