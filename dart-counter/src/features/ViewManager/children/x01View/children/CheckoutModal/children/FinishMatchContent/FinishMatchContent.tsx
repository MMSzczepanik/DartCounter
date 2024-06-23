import { Button, Grid, Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface IProps {
    handleClose: React.Dispatch<React.SetStateAction<boolean>>
    setDartsChoosen: React.Dispatch<React.SetStateAction<number | undefined>>
}

const FinishMatchContent: FunctionComponent<IProps> = ({handleClose, setDartsChoosen}) => {
    
    const continueHandler = () => {
        handleClose(false);
        setDartsChoosen(undefined);
    }

    const finishHandler = () => {
        handleClose(false);
        setDartsChoosen(undefined);
        //TODO: Trigger action to send match score
    }

    return (
        <>
            <Grid item >
                <Typography variant='h3' className="pb-2">What are you going ???</Typography>
            </Grid>
            <Grid item className="pb-2">
                <Button variant="contained" size="large"
                    onClick={continueHandler}
                >
                    CONTINUE
                </Button>
            </Grid>
            <Grid item>
                <Button variant="contained" size="large"
                    onClick={finishHandler}
                >
                    FINISH
                </Button>
            </Grid>
        </>
    )
}

export default FinishMatchContent;