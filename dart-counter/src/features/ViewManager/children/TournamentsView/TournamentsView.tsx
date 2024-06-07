import { FunctionComponent } from "react";
import { Tournament } from "../../../../types/tournaments";
import TournamentView from "./children/TournamentView/TournamentView";
import { Grid } from "@mui/material";

interface IProps {
    tournaments: Tournament[];
}

const TournamentsView: FunctionComponent<IProps> = ({tournaments}) => 
    <Grid item direction='column' className="min-w-full">
        {tournaments.map((tournament, key) => <TournamentView tournament={tournament} key={key}/>)}
    </Grid>

export default TournamentsView;
