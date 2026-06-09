import { useState, useEffect } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function addNote(text) {
    setNotes([...notes, text]);
  }

  function deleteNote(index) {
    setNotes(notes.filter((_, i) => i !== index));
  }

  function clearAllNotes() {
    setNotes([]);
  }

  function editNote(index, newText) {
    const updatedNotes = [...notes];
    updatedNotes[index] = newText;
    setNotes(updatedNotes);
  }

  return (
    <div>
      <h1>Notes App</h1>

      <p>You have {notes.length} notes</p>

      <button onClick={clearAllNotes}>Clear All Notes</button>

      <NoteForm addNote={addNote} />
      <NoteList 
        notes={notes} 
        deleteNote={deleteNote} 
        editNote={editNote}
      />
    </div>
  );
}

export default App;



