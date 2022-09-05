export const charClasses = {
    None: 'Keine',
    Miliz: 'Miliz',
    Soldat: 'Soldat',
  };

export const races = {
    None: 'Keine',
    Human: 'Mensch',
    HalfHuman: 'Halb Mensch halb '
}

export const animals = {
    Goat: 'Ziege',
    Mouse: 'Maus'
}

export class Char {
    constructor(id=0){
        this.id = id
        this.name = "";
        this.charClass = charClasses.None;
        this.race = races.None;
    }
    
    withName(name = ""){
        this.name = name;
        return this;
    }
    
    withClass(charClass = charClasses.None){
        this.charClass = charClass;
        return this;
    }

    withRace(race = races.None){
        this.race = race;
        return this;
    }
}