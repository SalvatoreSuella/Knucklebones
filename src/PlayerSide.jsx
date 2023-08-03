import {Grid} from "@mui/material";
import GameBoard from "./GameBoard";
import PlayerDisplay from "./PlayerDisplay";
import "./css/AlignItems.css"
import "./css/JustifyContent.css"
import "./css/AlignText.css"

export default function PlayerSide({side, player, dice, addDice}){
    
return(
    <>
        <Grid
            item container 
            className="AlignItems JustifyContent AlignText" 
            xs={3} md={3.5} sx={{minHeight: 1/2}}
        >
            {side === "bot" &&
                <PlayerDisplay 
                    dice={dice} 
                    side={side} 
                    name={player.name} 
                    totalScore={player.totalScore}
                />
            } 
        </Grid>

        <Grid item container className="JustifyContent AlignText" xs={6} md={5} sx={{minHeight: 1/2}}>
            <GameBoard  
                turn={player.turn}
                side={side}
                columns={player.columns} 
                columnScores={player.columnScores} 
                isColumnFull={player.isColumnFull}
                addDice={addDice}
            />        
        </Grid>

        <Grid 
            item container 
            className="AlignItems JustifyContent AlignText" 
            xs={3} md={3.5} sx={{minHeight: 1/2}}
        >
            {side === "top" &&
                <PlayerDisplay
                    dice={dice} 
                    side={side} 
                    name={player.name} 
                    totalScore={player.totalScore}
                /> 
            } 
        </Grid>
    </>     
);
}