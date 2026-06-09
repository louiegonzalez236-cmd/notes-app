import NoteCard from "./NoteCard";

function NoteList({ notes, deleteNote, editNote }) {
  return (
    <div>
      {notes.map((note, index) => (
        <NoteCard
          key={index}
          note={note}
          index={index}
          deleteNote={deleteNote}
          editNote={editNote}
        />
      ))}
    </div>
  );
}

export default NoteList;
