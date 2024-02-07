import logo from "./assets/logo-nlw-expert.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW Expert"></img>
      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
        ></input>
      </form>
      <div className="h-px bg-slate-700"></div>
      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard
          title="Adicionar nota"
          content="Grave uma nota em áudio que será convertida para texto automaticamente."
        ></NewNoteCard>
        {/* <div className="rounded-md bg-slate-700 p-5 space-y-3">
          <span className="text-sm font-medium text-slate-200">
            Adicionar nota
          </span>
          <p className="text-sm leading-6 text-slate-400">
            Grave uma nota em áudio que será convertida para texto
            automaticamente.
          </p>
        </div> */}
        <NoteCard
          note={{
            date: new Date(2024, 0, 15),
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus esse reiciendis dolorum cumque non? Voluptate, numquam?",
          }}
        ></NoteCard>
        <NoteCard
          note={{
            date: new Date(2023, 9, 10),
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus esse reiciendis dolorum cumque non? Voluptate, numquam?",
          }}
        ></NoteCard>
      </div>
    </div>
  );
}
