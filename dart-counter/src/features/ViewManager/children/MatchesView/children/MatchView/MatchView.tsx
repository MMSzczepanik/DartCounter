import { FunctionComponent } from "react";
import { Match } from "../../../../../../types/matches";
import { Grid, Typography } from "@mui/material";
import {store } from "../../../../../../store";
import { setMatchId } from "../../../../../../reducers/customerJourneyReducer";
import { changeView } from "../../../../../../reducers/viewMenagerReducer";
import { VIEW_TYPE } from "../../../../../../types/viewType";
import { ParticipantDTO } from "../../../../../../types/dto/participant";
import { setPlayers } from "../../../../../../reducers/counterReducer";

interface IProps {
    match: Match;
}

const chooseMatch = (match: Match, participants: ParticipantDTO[]) => () => {
    store.dispatch(setMatchId(match.match.id))
    store.dispatch(setPlayers(participants));
    store.dispatch(changeView({view: VIEW_TYPE.COUNTER}))
}


const MatchView: FunctionComponent<IProps> = ({match}) => {

    const participants: ParticipantDTO[] = [{
        participant: {
            id: match.match.player1_id,
            name: match.match.player1_name
    }},{
        participant: {
            id: match.match.player2_id,
            name: match.match.player2_name
}}]

    return (<Grid onClick={chooseMatch(match, participants)} container direction="row" className=' text-center border-[2px] p-4 my-4 rounded-lg border-blue-700 bg-blue-300'>
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
)}

export default MatchView;