import { FunctionComponent, useEffect } from "react";
import { useLazyGetParticipantsByTournamentIdQuery } from "../../../../../../../../services/tournaments";
import { CircularProgress, Grid } from "@mui/material";
import ParticipantView from "./children/ParticipantView/ParticipantView";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../../../store";

interface IProps {
    torunamentId: number;
}

const ParticipantsView: FunctionComponent<IProps> = ({torunamentId}) => {
    const api_key = useSelector((state: RootState) => state.cridentials.password)
    const [ trigger, result ] = useLazyGetParticipantsByTournamentIdQuery();

    useEffect(()=>{
        !result.data && trigger({
            tournamentId: torunamentId,
            api_key})
    })

    return (
        <Grid direction='column' className=" border-[2px]">
            {result.isLoading && <CircularProgress />}
            {result.data && result.data.map(participant => <ParticipantView parcitipant={participant}/>)}
        </Grid>
    )
}

export default ParticipantsView;