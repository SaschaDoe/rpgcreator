
    export class RandomTable {
      constructor(){
          this.title = "";
          this.role = new Role();
          /**
         * @type {RandomTableEntry[]}
         */
          this.entries = []
      }
      
      withTitle(title = ""){
          this.name = name;
          return this;
      }
      
      withRole(role = new Role(1)){
        this.role = role;
        return this;
      }

      withEntry(randomTableEntry = new RandomTableEntry()){
        this.entries.push(randomTableEntry);
        return this;
      }
  }

  export class RandomTableEntry{
    constructor(minRole=0, maxRole=0, contentText=""){
      this.minRole = minRole;
      this.maxRole = maxRole;
      this.contentText = contentText;
    }
  }

  export const diceTypes = {
    Six : 6,
    Twenty : 20
  }

  export class Role{
    constructor(multiplier = 0, diceType = diceTypes.Six, summand = 0){
      this.multiplier = multiplier;
      this.diceType = diceType;
      this.summand = summand;
    }
  }
    
    
    let classTableContent = [{role: '1', message: 'Spasst', id: 1},];

    for (let i = 0; i < 999; i++) {
      classTableContent.push({role: `${i+2}`, message: 'Spasst', id: i+2})
    };
    export function getAllTableTitles(){
      let tableTitles = [""];
      allTables.forEach(table => {
        tableTitles.push(table.title)
      });
      return tableTitles
    }
    export const allTables = [
      {forWhichGroup: "chars", title: "Rasse", explanation: "Würfle deine Rasse aus", role:"1w6", attributeName:"Rasse", contents:[
        {role: '1-3', message: 'Mensch', id: 1},
        {role: '4-5', message: 'Halb Mensch halb ...', id: 2},
        {role: '6', message: 'Anderes Fantasiewesen', id: 3},]},
      {forWhichGroup: "classes", title: "Klassen", explanation: "Würfle deine Klasse aus", role:"1w1000", attributeName:"Klasse", contents:classTableContent}
      ];

      

      export function isInsideRole(role = "", diceResult = 0){
        let roleArray = role.split("-");
        if (roleArray.length == 1){
            let roleInt = parseInt(role);
            if(roleInt == diceResult){
                return true;
            }else{
                return false;
            }
        }else{
            let roleMin = parseInt(roleArray[0]);
            let roleMax = parseInt(roleArray[1]);
            if (diceResult >= roleMin && diceResult <= roleMax){
                return true;
            }else{
                return false;
            }
        }
      }
