import { useState } from "react";

function NoteCard({ note, index, deleteNote, editNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(note);

  function saveEdit() {
    editNote(index, newText);
    setIsEditing(false);
  }

  return (
    <div className="note-card">
      {isEditing ? (
        <>
          <textarea 
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <>
          <p>{note}</p>
          <div>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteNote(index)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default NoteCard;
