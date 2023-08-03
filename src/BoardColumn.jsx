import {Box, Grid} from "@mui/material";
import Dice from "./Dice";
import Score from "./Score";
import "./css/BoxBoardColumn.css"
import "./css/Hover.css"
import "./css/AlignItems.css"
import "./css/JustifyContent.css"

export default function BoardColumn ({turn, side, column, columnScore}){

    let col = [...column];
    if(side === "top") col = col.reverse();
   
    return(
        <>
            {side === "bot" && <Score score={columnScore}/>}
            <Grid 
                container key={crypto.randomUUID()} 
                className={turn? "Hover AlignItems JustifyContent" : "AlignItems JustifyContent"}  
                sx={{width: 1, height: 0.9}}
            >
                {col.map(elem => {
                    return(                
                        <Grid 
                            container key={crypto.randomUUID()} 
                            className="BoxBoardColumn AlignItems JustifyContent" 
                            sx={{width: 0.7, height: 1/4}}
                        >
                            <Dice value={elem}/>
                        </Grid>
                    );  
                })}
            </Grid>
            {side === "top" && <Score score={columnScore}/>}
        </>
    );
}