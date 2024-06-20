import { FunctionComponent, useState } from "react";
import DigitButton from "../DigitButton/DigitButton";
import { useDispatch, useSelector } from "react-redux";
import { confirmScore } from "../../../../../../reducers/counterReducer";
import { Grid, Typography } from "@mui/material";
import { AVAILABLE_SCORE } from "../../../../../../config/scores";
import classNames from "classnames";
import { RootState } from "../../../../../../store";
import CheckoutModal from "../CheckoutModal/CheckoutModal";

const Calculator: FunctionComponent = () => {

const dispatch = useDispatch();

const [score, setScore] = useState('');
const [isModalOpen, setModalOpen] = useState<boolean>(false);

const game = useSelector((state: RootState) => state.counter.game);

const isFinishGame = game.players[game.actualPlayer].legs[game.actualLeg].actualScore === Number.parseInt(score)

const isAvailableScore = () => (AVAILABLE_SCORE.includes(Number.parseInt(score)) &&
     game.players[game.actualPlayer].legs[game.actualLeg].actualScore >= Number.parseInt(score)) || score === '';

return <Grid container direction='column' alignItems='stretch' justifyContent='center'>
    <CheckoutModal open={isModalOpen} handleClose={setModalOpen}/>
    <Grid >
        <Typography variant='h4' className={classNames("border-solid h-20  border-[4px] px-4 py-4",
            {"border-blue-700" : isAvailableScore()},
            {"border-red-700 bg-red-200" : !isAvailableScore()}
        )}>{score}</Typography>
    </Grid>
    <Grid container direction='row'>
            <DigitButton sign={1}
                onClick={() => setScore(score + '1')}
            />
            <DigitButton sign={2} 
                onClick={() => setScore(score + '2')}
            />
            <DigitButton sign={3} 
                onClick={() => setScore(score + '3')}
            />
    </Grid>
    <Grid container direction='row'>
            <DigitButton sign={4} 
                onClick={() => setScore(score + '4')}
            />
            <DigitButton sign={5} 
                onClick={() => setScore(score + '5')}
            />
            <DigitButton sign={6} 
                onClick={() => setScore(score + '6')}
            />
    </Grid>
    <Grid container direction='row'>
            <DigitButton sign={7} 
                onClick={() => setScore(score + '7')}    
        />
            <DigitButton sign={8} 
                onClick={() => setScore(score + '8')}
            />
            <DigitButton sign={9} 
                onClick={() => setScore(score + '9')}
            />
    </Grid>
    <Grid container direction='row'>
            <DigitButton sign={'Del'} 
                onClick={() => setScore('')}
            />

            <DigitButton sign={0} 
                onClick={() => setScore(score + '0')}
            />

            <DigitButton sign={'+'} 
                disabled={!isAvailableScore()}
                onClick={() => {
                    !isFinishGame && dispatch(confirmScore({
                    score: Number(score)
                }))
                setScore('')
                isFinishGame && setModalOpen(true);
            }}
            />
    </Grid>
    <Grid container>
            <DigitButton sign={'C'} 
                onClick={() => setScore(score.slice(0, -1))}
                disabled={score.length === 0}
            />
    </Grid>
</Grid>
}


export default Calculator