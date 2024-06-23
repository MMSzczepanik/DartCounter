import { Button, Grid, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { useLazyPutMatchScoresQuery } from "../../../../../../../../services/tournaments";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../../../store";

interface IProps {
    handleClose: React.Dispatch<React.SetStateAction<boolean>>
    setDartsChoosen: React.Dispatch<React.SetStateAction<number | undefined>>
}

const FinishMatchContent: FunctionComponent<IProps> = ({handleClose, setDartsChoosen}) => {

    const [ trigger, result] = useLazyPutMatchScoresQuery();
    const api_key = useSelector((state: RootState) => state.cridentials.password)
    const {matchId, tournamentId} = useSelector((state: RootState) => state.customerJourney)
    const game = useSelector((state: RootState) => state.counter)
    
    const continueHandler = () => {
        handleClose(false);
        setDartsChoosen(undefined);
    }

    const finishHandler = () => {
        handleClose(false);
        setDartsChoosen(undefined);
        trigger({
            api_key,
            matchId,
            tournamentId,
            //TODO: add hooks for mapping data
            match: {
                winner_id: game.game.players[0].wonLegs > game.game.players[1].wonLegs ? game.game.players[0].id : game.game.players[1].id,
                scores_csv: `${game.game.players[0].wonLegs}-${game.game.players[1].wonLegs}`,
                player1_votes: game.game.players[0].wonLegs,
                player2_votes: game.game.players[1].wonLegs
            }
        })
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