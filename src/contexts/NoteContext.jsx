import { useEffect, useState, createContext } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

const NoteContext = createContext();

function NoteProvider({ children }) {
  const noteLists = [
    {
      id: nanoid(),
      title: "Meeting Notes",
      detail:
        "Summary of the last team meeting discussing project milestones and deadlines.",
      date: "2/3/2",
    },
    {
      id: nanoid(),
      title: "Shopping List",
      detail: "Items to buy: milk, bread, eggs, and vegetables.",
      date: "2/4/2",
    },
  ];

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : noteLists;
  });
  const [search, setSearch] = useState("");

  // saved to locals, when note changes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // new note
  const addNote = (title, detail) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title,
      detail: detail,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const delNote = notes.filter((note) => note.id !== id);
    setNotes(delNote);
  };

  const searchFilterNote = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(search) ||
      note.detail.toLowerCase().includes(search)
  );

  return (
    <NoteContext.Provider
      value={{
        notes,
        setNotes,
        search,
        setSearch,
        addNote,
        deleteNote,
        searchFilterNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}

NoteProvider.propTypes = {
  children: PropTypes.node,
};

export { NoteContext, NoteProvider };
