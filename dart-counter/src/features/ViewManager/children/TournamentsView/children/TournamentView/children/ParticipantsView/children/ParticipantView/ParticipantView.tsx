import { FunctionComponent } from "react";
import { ParticipantDTO } from "../../../../../../../../../../types/dto/participant";
import { Grid, Typography } from "@mui/material";

interface IProps {
    parcitipant: ParticipantDTO
}

const ParticipantView: FunctionComponent<IProps> = ({parcitipant}) => 
    <Grid>
        <Typography variant="h6">{parcitipant.participant.name}</Typography>
    </Grid>

export default ParticipantView;