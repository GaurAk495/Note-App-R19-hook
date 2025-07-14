import { Note } from "../models/note.js";

const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({}).sort({ createdAt: -1 });
    return res.status(200).json({
      count: notes.length,
      data: notes,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    return res.status(200).json(note);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

const createNote = async (req, res) => {
  try {
    if (!req.body.title || !req.body.description) {
      return res.status(400).send({
        message: "Send all required fields: title, description",
      });
    }
    const newNote = {
      title: req.body.title,
      description: req.body.description,
    };
    const note = await Note.create(newNote);
    return res.status(201).send(note);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

const editNote = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Note.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).json({ message: "Note not found" });
    }
    return res.status(200).send({ message: "Note updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Note.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Note not found" });
    }
    return res.status(200).send({ message: "Note deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export { getNotes, getNoteById, createNote, editNote, deleteNote };
