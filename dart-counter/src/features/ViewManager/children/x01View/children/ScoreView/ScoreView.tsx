import { Grid, Typography } from "@mui/material";
import classNames from "classnames";
import { FunctionComponent } from "react";
import { Player } from "../../../../../../types/player";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../store";
import { getAvarage } from "../../../../../../utils/avarageUtils";

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
    const legs = useSelector((state: RootState) => state.counter.game.players[index].legs);
    const avarage = getAvarage(legs);

    return (
    <Grid container direction='row' className={'text-center text-4xl'
    }>
        <Grid container xs={7} direction='row' className={classNames(
        'content-center text-center border-[2px] flex items-center justify-center border-blue-700',
        {
            'border-solid bg-blue-300' : !isActualPlayer
        },
        {
            'border-solid  bg-blue-500' : isActualPlayer
        }, 'px-5 py-5')}> 
            <Grid item xs={10}>
                <Typography variant="h2">{player.name}</Typography>
            </Grid>
            {avarage && <Grid item xs={2}>
                <Typography variant="h5">{`(${avarage})`}</Typography>
            </Grid>}
        </Grid>
        <Grid item  xs={4} className={classNames(
        'content-center text-center border-[2px] border-blue-700',
        {
            'border-solid bg-blue-300' : !isActualPlayer
        },
        {
            'border-solid  bg-blue-500' : isActualPlayer
        }, 'text-4xl px-5 py-5')}>
            <Typography variant="h1">{actualScore}</Typography>
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