import { FunctionComponent } from "react";
import { Participant } from "../../../../../../../../../../types/participant";
import { Grid } from "@mui/material";

interface IProps {
    parcitipant: Participant
}

const ParticipantView: FunctionComponent<IProps> = ({parcitipant}) => 
    <Grid>
        {parcitipant.participant.name}
    </Grid>

export default ParticipantView;