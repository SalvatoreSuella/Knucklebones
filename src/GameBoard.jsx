import {Box, Grid} from "@mui/material";
import BoardColumn from "./BoardColumn";

export default function GameBoard({turn, side, columns, columnScores, addDice}){
    
    return(
        <>
            {columns.map((column, idx) => {
                return(
                    <Grid
                        item container xs={4} 
                        key={crypto.randomUUID()}
                        onClick={() => addDice(idx, side)}
                        sx={{alignItems: side==="top"? "start" : "end"}
                        }   
                    >
                        <BoardColumn turn={turn} side={side} column={column} columnScore={columnScores[idx]}/>
                    </Grid>
                );
            })}
        </>
    );
}