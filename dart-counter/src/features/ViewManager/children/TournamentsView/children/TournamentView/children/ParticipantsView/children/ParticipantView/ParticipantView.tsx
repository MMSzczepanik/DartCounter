import { FunctionComponent } from "react";
import { Participant } from "../../../../../../../../../../types/participant";
import { Grid, Typography } from "@mui/material";

interface IProps {
    parcitipant: Participant
}

const ParticipantView: FunctionComponent<IProps> = ({parcitipant}) => 
    <Grid>
        <Typography variant="h6">{parcitipant.participant.name}</Typography>
    </Grid>

export default ParticipantView;