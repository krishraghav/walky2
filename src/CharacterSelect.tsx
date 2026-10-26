import * as React from "react";
import { atom, useAtom } from "jotai";
import { CHARACTERS } from "./characters";
import { getState } from "./state";

export const characterSelectOpen = atom<boolean>(
  !localStorage.getItem("character") // show on first visit
);

export function CharacterSelect() {
  const [open, setOpen] = useAtom(characterSelectOpen);
  if (!open) return null;

  const choose = (id: string) => {
    getState().me.character = id;
    localStorage.setItem("character", id);
    setOpen(false);
  };

  return (
    <div className="character-select">
  <h2>Choose your character</h2>
  <div className="choices">
    {Object.entries(CHARACTERS).map(([id, c]) => (
      <button key={id} onClick={() => choose(id)}>
        <img src={c.stand} alt={c.label} />
        <span>{c.label}</span>
      </button>
    ))}
  </div>
</div>  );
}
