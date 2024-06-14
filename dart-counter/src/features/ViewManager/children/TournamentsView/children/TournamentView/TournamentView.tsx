import { FunctionComponent, useState } from "react";
import { TOURNAMENT_STATE, TournamentDTO } from "../../../../../../types/dto/tournaments";
import { Grid, Typography } from "@mui/material";
import ParticipantsView from "./children/ParticipantsView/ParticipantsView";
import classNames from "classnames";
import { store } from "../../../../../../store";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { changeView } from "../../../../../../reducers/viewMenagerReducer";
import { VIEW_TYPE } from "../../../../../../types/viewType";
import { setTournamentId } from "../../../../../../reducers/customerJourneyReducer";
import TournamentHeader from "./children/TournamentHeader/TournamentHeader";

interface IProps {
    tournament: TournamentDTO;
}

const chooseTournament = (torunament: TournamentDTO) => {
    store.dispatch(setTournamentId(torunament.tournament.id))
    store.dispatch(changeView({view: VIEW_TYPE.MATCHES}))
}

const TournamentView: FunctionComponent<IProps> = ({
    tournament
}) => {
    const [isOpenDetails, setOpenDetails] = useState(false);
    return (
    <Grid direction='column' className={classNames("content-center text-center border-[2px] my-4 py-4 rounded-lg",
        tournament.tournament.state === TOURNAMENT_STATE.UNDERWAY ? 'border-blue-700 bg-blue-300' : 'border-red-700 bg-red-300'
    )} >
        <Grid onClick={() => chooseTournament(tournament)} className="mb-2">
            <TournamentHeader tournament={tournament}/>
        </Grid>
        {
            isOpenDetails && <ParticipantsView torunamentId={tournament.tournament.id}/>
        }
        <Grid className="p-4" onClick={() => setOpenDetails(!isOpenDetails)}>
            {isOpenDetails? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}
        </Grid>
    </Grid>)
}
export default TournamentView;