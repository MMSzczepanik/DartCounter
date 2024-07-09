import { Children, FunctionComponent, useEffect } from "react";
import Calculator from "./children/Calculator/Calculator";
import { useSelector } from "react-redux";
import { RootState, store } from "../../../../store";
import ScoreView from "./children/ScoreView/ScoreView";
import { Player } from "../../../../types/player";
import { CircularProgress, Grid } from "@mui/material";
import classNames from "classnames";
import { usePostMatchUnderwayQuery } from "../../../../services/tournaments";
import { goBack } from "../../../../reducers/viewMenagerReducer";
import secureLocalStorage from "react-secure-storage";
import { Cridentials } from "../../../../types/cridentials";

const X01View: FunctionComponent = () => {
    const {players, actualPlayer, actualLeg} = useSelector((state: RootState) => state.counter.game);
    const cridentials = secureLocalStorage.getItem('cridentials') as Cridentials;
    const {tournamentId, matchId} = useSelector((state: RootState) => state.customerJourney);
    const { data, error, isLoading } = usePostMatchUnderwayQuery({
        tournamentId,
        matchId,    
        api_key: cridentials.password
    });

    useEffect( () => {
        if(error){
            store.dispatch(goBack())
        }
    })
    
    return (
        <Grid container direction={'row'} justifyContent='center' className={classNames(
            {"h-screen flex items-center justify-center": isLoading}
            )}>
            {isLoading && <CircularProgress />}
            {data && 
                <Grid container>
                    <Grid container item direction='column' xs={9}>
                        {Children.toArray(
                                    players.map((player, key) => (
                                            <ScoreView actualPlayerId={actualPlayer} actualScore={getActualScoreForPlayer(player, actualLeg)} player={player} index={key}/>
                                    ))
                                )
                        }
                    </Grid>
                    <Grid xs={3}>
                        <Calculator />
                    </Grid>
                </Grid>
            }
    </Grid>
    )
}

const getActualScoreForPlayer = (player: Player, actualLeg: number) => player.legs[actualLeg].actualScore

export default X01View;