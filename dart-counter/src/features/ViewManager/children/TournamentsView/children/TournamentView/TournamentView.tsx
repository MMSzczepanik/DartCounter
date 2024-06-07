import { FunctionComponent } from "react";
import { Tournament } from "../../../../../../types/tournaments";
import { Grid } from "@mui/material";

interface IProps {
    tournament: Tournament;
}

const TournamentView: FunctionComponent<IProps> = ({
    tournament
}) => 
    <Grid direction='row' className="content-center text-center border-[2px] border-blue-700 my-4 py-4" 
        onClick={() => console.log(tournament.tournament.id)}>
        {tournament.tournament.name}
    </Grid>

export default TournamentView;