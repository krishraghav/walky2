import * as React from "react";
import { atom, useAtom } from "jotai";
import { CHARACTERS } from "./characters";
import { getState } from "./state";

export const characterSelectOpen = atom<boolean>(
  !localStorage.getItem("character") // show on first visit
);

// Stops clicks/touches on this UI from also making the character walk
const stop = (e: React.SyntheticEvent) => e.stopPropagation();

export function CharacterSelect() {
  const [open, setOpen] = useAtom(characterSelectOpen);

  const choose = (id: string) => {
    getState().me.character = id;
    localStorage.setItem("character", id);
    setOpen(false);
  };

  if (!open) {
    return (
      <button
        className="character-button"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
        onMouseDown={stop}
        onTouchStart={stop}
      >
        Change character
      </button>
    );
  }

  return (
    <div
      className="character-select"
      onClick={stop}
      onMouseDown={stop}
      onTouchStart={stop}
      onTouchMove={stop}
      onWheel={stop}
    >
      <h2>Choose your character</h2>
      <div className="choices">
        {Object.entries(CHARACTERS).map(([id, c]) => (
          <button key={id} onClick={() => choose(id)}>
            <img src={c.stand} alt={c.label} />
            <span>{c.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
