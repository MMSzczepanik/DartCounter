import { FunctionComponent, useState } from "react";
import DigitButton from "../DigitButton/DigitButton";
import { Col, Grid, Row } from "react-flexbox-grid";
import { useDispatch } from "react-redux";
import { confirmScore } from "../../reducers/counterReducer";

const Calculator: FunctionComponent = () => {

const dispatch = useDispatch();

const [score, setScore] = useState(
    ''
)

return <Grid>
    <Row>
        <p className="border-solid border-blue-200 border-[4px] px-4 py-4">{score}</p>
    </Row>
    <Row >
        <Col>
            <DigitButton sign={1}
                onClick={() => setScore(score + '1')}
            />
        </Col>
        <Col>
            <DigitButton sign={2} 
                onClick={() => setScore(score + '2')}
            />
        </Col>
        <Col>
            <DigitButton sign={3} 
                onClick={() => setScore(score + '3')}
            />
        </Col>
    </Row>
    <Row>
        <Col>
            <DigitButton sign={4} 
                onClick={() => setScore(score + '4')}
            />
        </Col>
        <Col>
            <DigitButton sign={5} 
                onClick={() => setScore(score + '5')}
            />
        </Col>
        <Col>
            <DigitButton sign={6} 
                onClick={() => setScore(score + '6')}
            />
        </Col>
    </Row>
    <Row>
        <Col>
            <DigitButton sign={7} 
                onClick={() => setScore(score + '7')}    
        />
        </Col>
        <Col>
            <DigitButton sign={8} 
                onClick={() => setScore(score + '8')}
            />
        </Col>
        <Col>
            <DigitButton sign={9} 
                onClick={() => setScore(score + '9')}
            />
        </Col>
    </Row>
    <Row>
        <Col>
            <DigitButton sign={'Del'} 
                onClick={() => setScore('')}
            />
        </Col>
        <Col>
            <DigitButton sign={0} 
                onClick={() => setScore(score + '0')}
            />
        </Col>
        <Col>
            <DigitButton sign={'+'} 
                onClick={() => {
                    dispatch(confirmScore({
                    score: Number(score)
                }))
                setScore('')
            }}
            />
        </Col>
    </Row>
</Grid>
}


export default Calculator