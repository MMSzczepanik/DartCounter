import { Grid } from "@mui/material";
import classNames from "classnames";
import { FunctionComponent } from "react";
import { Player } from "../../../../../../types/player";

interface Props {
    index: number;
    actualPlayerId: number,
    actualScore: number,
    player: Player;
}

const ScoreView: FunctionComponent<Props> = ({
    actualScore, actualPlayerId, index, player
}) => {
    const isActualPlayer = actualPlayerId === index;
    return (
    <Grid container direction='row' className={'text-center text-4xl'
    }>
        <Grid item xs={7} className={classNames(
        'content-center text-center border-[2px] border-blue-700',
        {
            'border-solid bg-blue-300' : !isActualPlayer
        },
        {
            'border-solid  bg-blue-500' : isActualPlayer
        }, 'text-4xl px-5 py-5')}> 
            {player.name}
        </Grid>
        <Grid item  xs={4} className={classNames(
        'content-center text-center border-[2px] border-blue-700',
        {
            'border-solid bg-blue-300' : !isActualPlayer
        },
        {
            'border-solid  bg-blue-500' : isActualPlayer
        }, 'text-4xl px-5 py-5')}>
            {actualScore}
        </Grid>
        <Grid item  xs={1} className={classNames(
        'content-center text-center border-[2px] border-blue-700',
        {
            'border-solid bg-blue-300' : !isActualPlayer
        },
        {
            'border-solid  bg-blue-500' : isActualPlayer
        }, 'text-4xl px-5 py-5')}>
            {
                player.wonLegs
            }
        </Grid>
    </Grid>
    )
}

export default ScoreView;