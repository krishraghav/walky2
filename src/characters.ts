import earStand from "../assets/ear_stand.gif";
import earWalk from "../assets/ear_walk.gif";
import earSit from "../assets/ear_sit.gif";
import evilStand from "../assets/evil_stand.gif";
import evilWalk from "../assets/evil_walk.gif";
import stand1 from "../assets/stand1.gif";
import walk1 from "../assets/walk1.gif";
import slimegfStand from "../assets/slimegf_stand.png";
import slimegfSit "../assets/slimegf_sit.png";
import slimegfWalk "../assets/slimegf_walk.gif";
  
export const CHARACTERS = {
  ear:    { label: "Ear",    stand: earStand,  move: earWalk,  sit: earSit,    tint: true },
  evil:   { label: "Evil",   stand: evilStand, move: evilWalk, sit: evilStand, tint: true },
  walker: { label: "Walker", stand: stand1,    move: walk1,    sit: stand1,    tint: true },
  slimegf: {label: "SlimeGF GF", stand: slimegfStand, move: slimegfWalk, sit: slimegfSit, tint: false },
};
