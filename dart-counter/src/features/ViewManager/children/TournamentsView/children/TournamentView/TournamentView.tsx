import { FunctionComponent, useState } from "react";
import { TOURNAMENT_STATE, Tournament } from "../../../../../../types/tournaments";
import { Grid } from "@mui/material";
import ParticipantsView from "./children/ParticipantsView/ParticipantsView";
import classNames from "classnames";
import { useLazyGetMatchesByTournamentQuery } from "../../../../../../services/tournaments";

interface IProps {
    tournament: Tournament;
}

const TournamentView: FunctionComponent<IProps> = ({
    tournament
}) => {
    const [isOpenDetails, setOpenDetails] = useState(false);
    const [ trigger, result ] = useLazyGetMatchesByTournamentQuery();
    return (
    <Grid direction='column' className={classNames("content-center text-center border-[2px] my-4 py-4",
        tournament.tournament.state === TOURNAMENT_STATE.UNDERWAY ? 'border-blue-700 bg-blue-300' : 'border-red-700 bg-red-300'
    )} >
        <Grid onClick={() => trigger(tournament.tournament.id)}>
            {tournament.tournament.name}
        </Grid>
        {
            isOpenDetails && <ParticipantsView torunamentId={tournament.tournament.id}/>
        }
        <Grid className="p-4" onClick={() => setOpenDetails(!isOpenDetails)}>
            {isOpenDetails? <p>-</p> : <p>+</p>}
        </Grid>
    </Grid>)
}
export default TournamentView;