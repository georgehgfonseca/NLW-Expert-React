import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";

interface NewNoteCardProps {
  title: string;
  content: string;
  onNoteCreated: (content: string) => void;
}

export function NewNoteCard(props: NewNoteCardProps) {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true);
  const [content, setContent] = useState("");

  function handleStartTextNote() {
    setShouldShowOnboarding(false);
  }

  function handleContentChanged(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value);
    if (event.target.value === "") setShouldShowOnboarding(true);
  }

  function handleSaveNote(event: FormEvent) {
    event.preventDefault();
    props.onNoteCreated(content);
    setContent("");
    setShouldShowOnboarding(true);
    toast.success("Nota criada com sucesso!");
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="flex flex-col items-start rounded-md bg-slate-700 p-5 gap-3 overflow-hidden hover:ring-2 hover:ring-slate-600 hover:cursor-pointer text-left focus:ring-2 focus:ring-lime-400 outline-none">
        <span className="text-sm font-medium text-slate-200">
          {props.title}
        </span>
        <p className="text-sm leading-6 text-slate-400">{props.content}</p>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50">
          <Dialog.Content className="fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col outline-none">
            <Dialog.Close className="absolute right-0 top-0 p-1.5 bg-slate-800 text-slate-400 hover:text-slate-100">
              <X className="size-5" />
            </Dialog.Close>
            <form onSubmit={handleSaveNote} className="flex flex-1 flex-col">
              <div className="flex flex-1 flex-col gap-3 p-5">
                <span className="text-sm font-medium text-slate-300">
                  Adicionar nota
                </span>
                {shouldShowOnboarding ? (
                  <p className="text-sm leading-6 text-slate-400">
                    Começe{" "}
                    <button className="font-medium text-lime-400 hover:underline">
                      gravando uma nota em áudio
                    </button>{" "}
                    ou se preferir{" "}
                    <button
                      className="font-medium text-lime-400 hover:underline"
                      onClick={handleStartTextNote}
                    >
                      utilize apenas texto
                    </button>
                    .
                  </p>
                ) : (
                  <textarea
                    autoFocus
                    className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none"
                    onChange={handleContentChanged}
                    value={content}
                  ></textarea>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-500"
              >
                Salvar nota
              </button>
            </form>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
