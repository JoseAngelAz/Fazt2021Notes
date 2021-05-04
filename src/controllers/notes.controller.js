const notesCtrl = {};

const Note = require("../models/Note");
//renderizar formulario
notesCtrl.renderNoteForm = (req, res) => {
  res.render("notes/new-note");
};
//crar nueva nota
notesCtrl.createNewNote = async (req, res) => {
  const { title, description } = req.body;
  const newNote = new Note({ title, description });
  await newNote.save();
  res.redirect("/notes");
};
//Consultar notas
notesCtrl.renderNotes = async (req, res) => {
  const notes = await Note.find().lean();
  res.render("notes/all-notes", { notes });
};
//Editar NOtas, FOrmulario
notesCtrl.renderEditForm = async (req, res) => {
  const note = await Note.findById(req.params.id);
  console.log(`la nota es esta:${note}\su ID es:${req.params.id}`);
  res.render("notes/edit-note", { note });
};
//Mandar datos al formulario Editar PUT
notesCtrl.updateNote = async (req, res) => {
  console.log(req.body);
  const { title, description } = req.body;
  await Note.findByIdAndUpdate(req.params.id, { title, description });
  res.redirect("/notes");
};
//borrar notas
notesCtrl.deleteNote = async (req, res) => {
  console.log("El ID es: ", req.params.id);
  await Note.findByIdAndDelete(req.params.id);
  res.redirect("/notes");
};
module.exports = notesCtrl;
