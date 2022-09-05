import {Char, charClasses, races} from "./objects/char.js"
import { writable } from "svelte/store";

const CharsStore = writable([
    {char: new Char(0).withName("Char Name 2").withRace(races.Human).withClass(charClasses.Miliz), isClicked: false},
    {char: new Char(1).withName("Char Name 3").withRace(races.HalfHuman).withClass(charClasses.Soldat), isClicked: false},
]);

export default CharsStore;

export let allSummaryData = writable({
    chars:
    [
        {char: new Char(0).withName("Char Name 1").withRace(races.Human).withClass(charClasses.Miliz), isClicked: false},
        {char: new Char(1).withName("Char Name 2").withRace(races.HalfHuman).withClass(charClasses.Soldat), isClicked: false},
    ],
    world:
    [
        {id: 0, name: "Welt1", race: "Planetx", isClicked: false},
        {id: 1, name: "Welt1", race: "Planety", isClicked: false},
    ]
});