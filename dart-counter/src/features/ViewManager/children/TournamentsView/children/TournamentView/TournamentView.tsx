import { FunctionComponent, useState } from "react";
import { Tournament } from "../../../../../../types/tournaments";
import { Grid } from "@mui/material";
import ParticipantsView from "./children/ParticipantsView/ParticipantsView";

interface IProps {
    tournament: Tournament;
}

const TournamentView: FunctionComponent<IProps> = ({
    tournament
}) => {
    const [isOpenDetails, setOpenDetails] = useState(false);
    return (<Grid direction='column' className="content-center text-center border-[2px] border-blue-700 my-4 py-4" >
        {tournament.tournament.name}
        {
            isOpenDetails && <ParticipantsView torunamentId={tournament.tournament.id}/>
        }
        <Grid className="p-4" onClick={() => setOpenDetails(!isOpenDetails)}>
            {isOpenDetails? <p>-</p> : <p>+</p>}
        </Grid>
    </Grid>)
}
export default TournamentView;