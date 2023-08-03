import d1 from "../src/DiceImages/1.svg"
import d2 from "../src/DiceImages/2.svg"
import d3 from "../src/DiceImages/3.svg"
import d4 from "../src/DiceImages/4.svg"
import d5 from "../src/DiceImages/5.svg"
import d6 from "../src/DiceImages/6.svg"

import invD1 from "../src/DiceImages/inv1.svg"
import invD2 from "../src/DiceImages/inv2.svg"
import invD3 from "../src/DiceImages/inv3.svg"
import invD4 from "../src/DiceImages/inv4.svg"
import invD5 from "../src/DiceImages/inv5.svg"
import invD6 from "../src/DiceImages/inv6.svg"

const diceImages= [d1, d2, d3, d4, d5, d6];
const invDiceImages= [invD1, invD2, invD3, invD4, invD5, invD6];

export default function Dice({value, type = "white"}){
    return(
    <>
        {value !== 0 && type === "black" && <img  style={{minHeight: "50%" ,height: "70%", width: "70%"}} src={invDiceImages[value-1]} ></img>}
        {value !== 0 && type === "white" && <img  style={{minHeight: "50%" ,height: "70%", width: "70%"}} src={diceImages[value-1]} ></img>}
    </>
    );  
}