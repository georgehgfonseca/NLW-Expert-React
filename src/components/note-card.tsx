interface NoteCardProps {
  title: string;
  content: string;
}

export function NoteCard(props: NoteCardProps) {
  return (
    <button className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 hover:cursor-pointer text-left focus:ring-2 focus:ring-lime-400 outline-none">
      <span className="text-sm font-medium text-slate-300">{props.title}</span>
      <p className="text-sm leading-6 text-slate-400">{props.content}</p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  );
}
