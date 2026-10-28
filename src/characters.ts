import earStand from "../assets/ear_stand.gif";
import earWalk from "../assets/ear_walk.gif";
import earSit from "../assets/ear_sit.gif";
import evilStand from "../assets/evil_stand.gif";
import evilWalk from "../assets/evil_walk.gif";
import stand1 from "../assets/stand1.png";
import walk1 from "../assets/walk1.gif";
import slimegfStand from "../assets/slimgf_stand.png";
import slimegfSit from "../assets/slimegf_sit.png";
import slimegfWalk from "../assets/slimegf_walk.gif";
import bulletStand from "../assets/bullet_stand.gif";
import bulletSit from "../assets/bullet_sit.png";
import bulletWalk from "../assets/bullet_walk.gif";


export const CHARACTERS = {
  ear:    { label: "the og",    stand: earStand,  move: earWalk,  sit: earSit,    tint: true },
  evil:   { label: "monster voice",   stand: evilStand, move: evilWalk, sit: evilStand, tint: true },
  walker: { label: "larper", stand: stand1,    move: walk1,    sit: stand1,    tint: true },
  slimegf: {label: "slime gf gf", stand: slimegfStand, move: slimegfWalk, sit: slimegfSit, tint: true },
  bullet: {label: "lost bullet", stand: bulletStand, move: bulletWalk, sit: bulletSit, tint: true },
};
