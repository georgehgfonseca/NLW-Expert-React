import { ChangeEvent, useState } from "react";
import logo from "./assets/logo-nlw-expert.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

export interface Note {
  id: string;
  date: Date;
  content: string;
}

export function App() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnStorage = localStorage.getItem("notes");
    if (notesOnStorage) {
      return JSON.parse(notesOnStorage);
    }
    return [];
  });

  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    };

    const updatedNotes = [newNote, ...notes];

    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    setNotes(updatedNotes);
  }

  function onNoteDeleted(currentNote: Note) {
    const updatedNotes = notes.filter((note) => note !== currentNote);

    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    setNotes(updatedNotes);
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;
    setSearch(query);
  }

  const filteredNotes = search
    ? notes.filter((note) =>
        note.content.toLowerCase().includes(search.toLowerCase())
      )
    : notes;

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 px-5">
      <img src={logo} alt="NLW Expert"></img>
      <form className="w-full">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
        ></input>
      </form>
      <div className="h-px bg-slate-700"></div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 auto-rows-[250px]">
        <NewNoteCard
          onNoteCreated={onNoteCreated}
          title="Adicionar nota"
          content="Grave uma nota em áudio que será convertida para texto automaticamente."
        ></NewNoteCard>
        {filteredNotes.map((note) => {
          return (
            <NoteCard key={note.id} note={note} onNoteDeleted={onNoteDeleted} />
          );
        })}
      </div>
    </div>
  );
}
