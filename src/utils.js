const initializePlayers = (name, turn) => {
    return(
        {
            name : name,
            totalScore: 0,
            columns: [[0, 0, 0],[0, 0, 0],[0, 0, 0]],
            columnScores: [0, 0, 0],
            isColumnFull: [false, false, false],
            isFull : false,
            turn: turn
        }   
    );
}

function compareFn(a,b) {
    if(a === 0) return 1;
    if(b === 0) return -1;
    return 0;
}

function d6(){
    return Math.floor(Math.random() * 6) + 1;
}

function sum(array) {
   return (
        array.reduce((accumulator, currentValue) => accumulator + currentValue, 0) 
    )
}

function sumColumns(array){
    let sum = 0;
    const map = mapDiceInColumn(array);
    map.forEach((value, key) => {
        key !== 1 ? sum += (key * value) * value : sum += Math.pow(value, 2);
    });
    
    return sum;
}

export function mapDiceInColumn(arr){
    return arr.reduce((map, dice = 0) => {
      const diceCount = map.get(dice) ?? 0
      return map.set(dice, diceCount + 1)
    }, new Map())
  }

export {initializePlayers, compareFn, d6, sumColumns, sum}