
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
      {title: "Rasse", explanation: "Würfle deine Rasse aus", role:"1w6", attributeName:"Rasse", contents:[
        {role: '1-3', message: 'Mensch', id: 1},
        {role: '4-5', message: 'Halb Mensch halb ...', id: 2},
        {role: '6', message: 'Anderes Fantasiewesen', id: 3},]},
      {title: "Klassen", explanation: "Würfle deine Klasse aus", role:"1w1000", attributeName:"Klasse", contents:classTableContent}
      ];

      for (let i = 0; i < 10; i++) {
        allTables.push({title: "Klassen"+i, explanation: "Würfle deine Klasse aus", role:"1w1000", attributeName:"Klasse", contents:classTableContent})
      }; 
