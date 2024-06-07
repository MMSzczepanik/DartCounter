import { FunctionComponent, useEffect } from "react";
import { useLazyGetParticipantsByTournamentIdQuery } from "../../../../../../../../services/tournaments";
import { Grid } from "@mui/material";
import ParticipantView from "./children/ParticipantView/ParticipantView";

interface IProps {
    torunamentId: number;
}

const ParticipantsView: FunctionComponent<IProps> = ({torunamentId}) => {
    const [ trigger, result ] = useLazyGetParticipantsByTournamentIdQuery();

    useEffect(()=>{
        !result.data && trigger(torunamentId)
    })

    return (
        <Grid direction='column' className=" border-[2px]">
            {result.isLoading && <p>Loading</p>}
            {result.data && result.data.map(participant => <ParticipantView parcitipant={participant}/>)}
        </Grid>
    )
}

export default ParticipantsView;