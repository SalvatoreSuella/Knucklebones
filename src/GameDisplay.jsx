import { Box, Grid } from "@mui/material";
import {initializePlayers, d6, sum, sumColumns, compareFn} from "./utils"
import PlayerSide from "./PlayerSide";
import WinDisplay from "./WinDisplay";
import { useState } from "react";

export default function GameDisplay({player1Name = "Player1", player2Name = "Player2"}){
    //Modal State
    const [open, setOpen] = useState({show : false, winnerName: "", finalScore: 0});

    //Dice State
    const [dice, setDice] = useState(() => d6())

    //Players State
    const[player1, setPlayer1] = useState(() => initializePlayers(player1Name, true));
    const[player2, setPlayer2] = useState(() => initializePlayers(player2Name, false));

    const handleGameBoard = (i,side) => {

        let newPlayer = side === "bot"? {...player1}:{...player2}
        let opponentPlayer = side !== "bot"? {...player1}:{...player2}

        const setNewPlayer = side === "bot"? setPlayer1 : setPlayer2
        const setOpponentPlayer = side !== "bot"? setPlayer1 : setPlayer2


        if(newPlayer.turn && !opponentPlayer.isFull && !newPlayer.isFull && !newPlayer.isColumnFull[i]){

            
            addDice(newPlayer, i);
            setColumnsScore(newPlayer, i);
            setTotalScore(newPlayer);
            setIsFull(newPlayer);
            toogleTurn(newPlayer);
            setNewPlayer(newPlayer);
            
            setDice(d6());
            
            if(opponentPlayer.columns[i].findIndex( e => e === dice) !== -1){
                removeOpponentDice(opponentPlayer, i);
                setColumnsScore(opponentPlayer, i);
                setTotalScore(opponentPlayer);
            }

            toogleTurn(opponentPlayer);
            setOpponentPlayer(opponentPlayer);

            isEndGame(newPlayer, opponentPlayer);
        }


    }

    const addDice = (player, i) => {
        let j = player.columns[i].findIndex( e => e === 0);
        player.columns[i][j] = dice;
        if(player.columns[i].findIndex( e => e === 0) === -1) player.isColumnFull[i] = true;     
    }

    const removeOpponentDice = (opponent, i) => {
        opponent.columns[i] =
                            opponent.columns[i].map( elem => {
                                if(elem !== dice) return elem
                                return 0;
                            })

        if(opponent.columns[i].findIndex( e => e === 0) !== -1) opponent.isColumnFull[i] = false;
        opponent.columns[i].sort(compareFn);      
    }
    
    const setColumnsScore = (player, i) => {
        player.columnScores[i] = sumColumns(player.columns[i])
    }

    const setTotalScore = (player) => {
        player.totalScore = sum(player.columnScores)
    }

    const setIsFull = (player) => {
        player.isFull = player.isColumnFull.every( bol => bol === true);
    }

    const toogleTurn = (player) =>{
        player.turn = !player.turn
    }

    const isEndGame = (player, opponent) => {
        if(player.isFull) {
            if(player.totalScore >= opponent.totalScore)
                setOpen({show: true, winnerName: player.name, finalScore: player.totalScore })  
            else
                setOpen({show: true, winnerName: opponent.name, finalScore: opponent.totalScore })  
        }
    }

    const restart = () =>{
        setPlayer1(initializePlayers(player1Name, true));
        setPlayer2(initializePlayers(player2Name, false));
        setOpen({show : false, winnerName: "", finalScore: 0});
    }

return(
    <Box sx={{height: 1}}>
        <Grid container sx={{height: 1}}>
            <WinDisplay open={open} restart={restart}/>
            <PlayerSide side="top" player={player2} dice={player2.turn? dice : 0} addDice={handleGameBoard}/>
            <PlayerSide side="bot" player={player1} dice={player1.turn? dice : 0} addDice={handleGameBoard}/>
        </Grid>
    </Box>  
);

}