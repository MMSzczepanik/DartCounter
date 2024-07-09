import { Grid } from "@mui/material";
import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../../../store";

interface IProps {
    playerIndex: number;
}

const ScoresHistory: FunctionComponent<IProps> = ({ playerIndex }) => {

    const game = useSelector((state: RootState) => state.counter.game);

    const actualScores = game.players[playerIndex].legs[game.actualLeg].scores

    //TODO: Adjust styles for scores
    return (
        <Grid container direction="row">
            {
                actualScores.map(score => <p>{score}</p>)
            }
        </Grid>
    )
}

export default ScoresHistory;