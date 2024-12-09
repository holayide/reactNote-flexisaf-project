import NoteList from "../components/component/NoteList";
import Header from "../components/component/Header";
import AddButton from "../components/component/AddButton";
import Search from "../components/component/Search";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";

function Note() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [search, setSearch] = useState("");

  // Save to local storage to handle note change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (title, detail) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title,
      detail: detail,
      date: date.toLocaleDateString(),
    };

    setNotes((prevNotes) => [...prevNotes, newNote]);
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
    <>
      <Header />
      <div className="max-w-[1440px] mx-auto px-5">
        <Search handleSearch={setSearch} />
        <NoteList notes={searchFilterNote} handleDeleteNote={deleteNote} />
        <AddButton handleAddNote={addNote} />
      </div>
    </>
  );
}
export default Note;
