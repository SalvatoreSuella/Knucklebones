import {Grid} from "@mui/material";
import "./css/AlignItems.css"
import "./css/JustifyContent.css"
import "./css/DiceTray.css"
import Dice from "./Dice";
export default function DiceTray({dice}){
    
    return(
        <Grid 
            container sx={{ width: 1/2, aspectRatio: 1/1}}
            className="DiceTray JustifyContent AlignItems"
        >
            <Grid 
                container sx={{height: 1/2}}
                className="JustifyContent AlignItems"
            >
                <Dice value={dice} type="black"/>
            </Grid>
            
        </Grid>
    );
}