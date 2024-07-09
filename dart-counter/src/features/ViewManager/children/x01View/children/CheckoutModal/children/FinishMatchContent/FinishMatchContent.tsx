import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { useLazyPutMatchScoresQuery } from "../../../../../../../../services/tournaments";
import { useSelector } from "react-redux";
import { RootState, store } from "../../../../../../../../store";
import secureLocalStorage from "react-secure-storage";
import { Cridentials } from "../../../../../../../../types/cridentials";
import { goBack } from "../../../../../../../../reducers/viewMenagerReducer";
import { resetCounter } from "../../../../../../../../reducers/counterReducer";

interface IProps {
    handleClose: React.Dispatch<React.SetStateAction<boolean>>
    setDartsChoosen: React.Dispatch<React.SetStateAction<number | undefined>>
}

const FinishMatchContent: FunctionComponent<IProps> = ({handleClose, setDartsChoosen}) => {

    const [ trigger, result] = useLazyPutMatchScoresQuery();
    const cridentials = secureLocalStorage.getItem('cridentials') as Cridentials;
    const {matchId, tournamentId} = useSelector((state: RootState) => state.customerJourney)
    const game = useSelector((state: RootState) => state.counter)
    
    const continueHandler = () => {
        handleClose(false);
        setDartsChoosen(undefined);
    }

    const finishHandler = () => {
        trigger({
            api_key: cridentials.password,
            matchId,
            tournamentId,
            //TODO: add hooks for mapping data
            match: {
                winner_id: game.game.players[0].wonLegs > game.game.players[1].wonLegs ? game.game.players[0].id : game.game.players[1].id,
                scores_csv: `${game.game.players[0].wonLegs}-${game.game.players[1].wonLegs}`,
                player1_votes: game.game.players[0].wonLegs,
                player2_votes: game.game.players[1].wonLegs
            }
        }).then(({isSuccess}) => {
            if(isSuccess){
                handleClose(false);
                setDartsChoosen(undefined);
                store.dispatch(goBack())
                store.dispatch(resetCounter())
            }
        })
    }

    return (
        <>
            {
                result.isLoading ? <CircularProgress /> : 
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
                }
        </>
    )
}

export default FinishMatchContent;