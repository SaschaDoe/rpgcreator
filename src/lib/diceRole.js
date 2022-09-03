
// 2W6+1 into 2 * Rand(1-6) + 1
export function roleDice(input=""){
    input = input.toLowerCase();
    let indexOfW = input.indexOf("w");
    let indexOfPlus = input.indexOf("+");
    let indexOfMinus = input.indexOf("-");
    let numberOfDices = parseInt(input.substring(0,indexOfW));
    let typeOfDice = 6;
    let diceRoleResult = "";

    if (indexOfMinus === -1 && indexOfPlus === -1){
        typeOfDice = parseInt(input.substring(indexOfW+1));
    }else if (indexOfMinus != 1){
        typeOfDice = parseInt(input.substring(indexOfW+1, indexOfMinus));
    }else if (indexOfPlus != 1){
        typeOfDice = parseInt(input.substring(indexOfW+1, indexOfPlus));
    }
    
    for (let i = numberOfDices; i > 0; i--){
        let roledNumber = Math.floor(Math.random() * typeOfDice)+1;
        diceRoleResult += roledNumber
    }            
        
    let delta = 0;
    if (indexOfMinus != -1){
        delta = parseInt(input.substring(indexOfMinus+1));
    }

    if (indexOfPlus != -1){
        delta = parseInt(input.substring(indexOfPlus+1));
    }

    return parseInt(diceRoleResult)

}