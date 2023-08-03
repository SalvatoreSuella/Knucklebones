import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Score from "./Score";
import DiceTray from "./DiceTray";

const theme = createTheme();

theme.typography.h4 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.4rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.6rem',
  },
};

export default function PlayerDisplay({name, totalScore, side, dice}){

    return(
        <>
            {side === "bot"?
            <>
                <ThemeProvider theme={theme}>
                    <Typography variant="h4">{name}</Typography>
                    <Score score={totalScore} />
                </ThemeProvider>

                <DiceTray dice={dice} /> 
            </>
            :
            <>
                <DiceTray dice={dice} />

                <ThemeProvider theme={theme}>
                    <Score  score={totalScore} />
                    <Typography variant="h4">{name}</Typography>
                </ThemeProvider>
            </>
            }
        </>
    );
}
    
    

