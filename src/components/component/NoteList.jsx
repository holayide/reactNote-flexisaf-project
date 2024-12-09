import PropTypes from "prop-types";
import NoteCard from "./NoteCard";

function NoteList({ notes, handleDeleteNote }) {
  return (
    <>
      {notes.length === 0 ? (
        <p className="text-center pt-10 text-base sm:text-lg">Empty field</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {notes.map((note) => (
            <NoteCard
              key={note.id}
              id={note.id}
              title={note.title}
              detail={note.detail}
              date={note.date}
              handleDeleteNote={handleDeleteNote}
            />
          ))}
        </div>
      )}
    </>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  handleDeleteNote: PropTypes.func,
};

export default NoteList;
