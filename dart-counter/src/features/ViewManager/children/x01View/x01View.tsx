import { Children, FunctionComponent } from "react";
import Calculator from "./children/Calculator/Calculator";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import ScoreView from "./children/ScoreView/ScoreView";
import { Player } from "../../../../types/player";
import { Grid } from "@mui/material";

const X01View: FunctionComponent = () => {
    const {players, actualPlayer, actualLeg} = useSelector((state: RootState) => state.counter.game)

    return (
        <Grid container direction={'row'} justifyContent='center' spacing={3}>
            <Grid container direction='row' xs={8}>
                {Children.toArray(
                            players.map((player, key) => (
                                    <ScoreView actualPlayerId={actualPlayer} actualScore={getActualScoreForPlayer(player, actualLeg)} player={player} index={key}/>
                            ))
                        )
                }
            </Grid>
            <Grid xs={4}>
                <Calculator />
            </Grid>
    </Grid>
    )
}

const getActualScoreForPlayer = (player: Player, actualLeg: number) => player.legs[actualLeg].actualScore

export default X01View;