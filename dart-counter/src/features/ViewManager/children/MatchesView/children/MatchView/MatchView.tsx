import { FunctionComponent } from "react";
import { MatchVO } from "../../../../../../types/matches";
import { Grid, Typography } from "@mui/material";

interface IProps {
    match: MatchVO;
}

const MatchView: FunctionComponent<IProps> = ({match}) => 
    <Grid container direction="row" className=' text-center border-[2px] p-4 my-4 rounded-lg border-blue-700 bg-blue-300'>
        <Grid xs={5}>
            <Typography variant="h5" >{match.match.player1_name}</Typography>
        </Grid>
        <Grid xs={2}>
            {'VS'}
        </Grid>
        <Grid xs={5}>
            <Typography variant="h5" >{match.match.player2_name}</Typography>
        </Grid>
    </Grid>

export default MatchView;