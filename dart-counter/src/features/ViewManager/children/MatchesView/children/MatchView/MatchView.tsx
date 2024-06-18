import { FunctionComponent } from "react";
import { Match } from "../../../../../../types/matches";
import { Grid, Typography } from "@mui/material";
import {store } from "../../../../../../store";
import { setMatchId } from "../../../../../../reducers/customerJourneyReducer";
import { goNext } from "../../../../../../reducers/viewMenagerReducer";
import { ParticipantDTO } from "../../../../../../types/dto/participant";
import { setPlayers } from "../../../../../../reducers/counterReducer";
import { MATCH_STATE } from "../../../../../../types/dto/matches";
import classNames from "classnames";

interface IProps {
    match: Match;
}

const chooseMatch = (match: Match, participants: ParticipantDTO[]) => () => {
    if(match.match.state !== MATCH_STATE.COMPLETE){
        store.dispatch(setMatchId(match.match.id))
        store.dispatch(setPlayers(participants));
        store.dispatch(goNext())
    }
}


const MatchView: FunctionComponent<IProps> = ({match}) => {

    const isMatchCompleted = match.match.state === MATCH_STATE.COMPLETE
    const formattedScore = match.match.scores_csv.replaceAll('-',':')

    const participants: ParticipantDTO[] = [{
        participant: {
            id: match.match.player1_id,
            name: match.match.player1_name
    }},{
        participant: {
            id: match.match.player2_id,
            name: match.match.player2_name
}}]

    return (<Grid onClick={chooseMatch(match, participants)} container direction="row"
         className={classNames(' text-center border-[2px] p-4 my-4 rounded-lg', 
            { 'border-blue-700 bg-blue-300': !isMatchCompleted},
            { 'border-green-700 bg-green-300': isMatchCompleted})}>
        <Grid item xs={5}>
            <Typography variant="h5" >{match.match.player1_name}</Typography>
        </Grid>
        <Grid item xs={2}>
            <Typography variant="h5">{isMatchCompleted ? formattedScore : 'VS'}</Typography>
        </Grid>
        <Grid item xs={5}>
            <Typography variant="h5" >{match.match.player2_name}</Typography>
        </Grid>
    </Grid>
)}

export default MatchView;