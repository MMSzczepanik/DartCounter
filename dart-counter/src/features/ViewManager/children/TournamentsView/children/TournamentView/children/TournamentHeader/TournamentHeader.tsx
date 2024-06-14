import { FunctionComponent } from "react";
import { TournamentDTO } from "../../../../../../../../types/dto/tournaments";
import { Grid, Typography } from "@mui/material";

interface IProps {
    tournament: TournamentDTO;
}

const TournamentHeader: FunctionComponent<IProps> = ({tournament}) => 
    <Grid container direction='column' className="content-center text-center">
        <Typography variant="h4">{tournament.tournament.name}</Typography>
        <Grid container className='text-center px-2'>
            <Grid xs={4}>
                <Typography variant="h6">{tournament.tournament.participants_count} players</Typography>
            </Grid>
            <Grid xs={4}>
            <   Typography variant="h6">{tournament.tournament.tournament_type}</Typography>
            </Grid>
            <Grid xs={4}>
                <Typography variant="h6">{new Date(tournament.tournament.started_at).toLocaleDateString()}</Typography>
            </Grid>
        </Grid>
    </Grid>

export default TournamentHeader;