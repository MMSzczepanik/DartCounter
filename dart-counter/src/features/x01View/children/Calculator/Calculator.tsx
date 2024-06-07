import { FunctionComponent, useState } from "react";
import DigitButton from "../DigitButton/DigitButton";
import { useDispatch } from "react-redux";
import { confirmScore } from "../../../../reducers/counterReducer";
import { Grid } from "@mui/material";

const Calculator: FunctionComponent = () => {

const dispatch = useDispatch();

const [score, setScore] = useState('');
const [openModal, setOpenModal] = useState(false);

return <Grid container direction='column' alignItems='stretch' justifyContent='center'>
    <Grid >
        <p className="border-solid border-blue-200 border-[4px] px-4 py-4">{score}</p>
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
                onClick={() => {
                    dispatch(confirmScore({
                    score: Number(score)
                }))
                setScore('')
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