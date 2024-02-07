interface NewNoteCardProps {
  title: string;
  content: string;
}

export function NewNoteCard(props: NewNoteCardProps) {
  return (
    <button className="flex flex-col items-start rounded-md bg-slate-700 p-5 gap-3 overflow-hidden hover:ring-2 hover:ring-slate-600 hover:cursor-pointer text-left focus:ring-2 focus:ring-lime-400 outline-none">
      <span className="text-sm font-medium text-slate-200">{props.title}</span>
      <p className="text-sm leading-6 text-slate-400">{props.content}</p>
    </button>
  );
}
