import { FunctionComponent, useEffect } from "react";
import { useLazyGetParticipantsByTournamentIdQuery } from "../../../../../../../../services/tournaments";
import { CircularProgress, Grid } from "@mui/material";
import ParticipantView from "./children/ParticipantView/ParticipantView";
import secureLocalStorage from "react-secure-storage";
import { Cridentials } from "../../../../../../../../types/cridentials";

interface IProps {
    torunamentId: number;
}

const ParticipantsView: FunctionComponent<IProps> = ({torunamentId}) => {
    const cridentials = secureLocalStorage.getItem('cridentials') as Cridentials;
    const [ trigger, result ] = useLazyGetParticipantsByTournamentIdQuery();

    useEffect(()=>{
        !result.data && trigger({
            tournamentId: torunamentId,
            api_key: cridentials.password})
    })

    return (
        <Grid direction='column' className=" border-y-[2px] border-blue-700 ">
            {result.isLoading && <CircularProgress />}
            {result.data && result.data.map(participant => <ParticipantView parcitipant={participant}/>)}
        </Grid>
    )
}

export default ParticipantsView;