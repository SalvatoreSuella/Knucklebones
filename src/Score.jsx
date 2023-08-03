import {Box, Typography} from "@mui/material";
export default function Score({score}){
    return(
        <Box sx={{width: 1}}>
            <Typography variant="h4">
                {score}
            </Typography>
        </Box>
    );
}