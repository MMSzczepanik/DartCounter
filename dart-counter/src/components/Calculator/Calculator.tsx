import { FunctionComponent } from "react";
import DigitButton from "../DigitButton/DigitButton";
import { Col, Grid, Row } from "react-flexbox-grid";

const Calculator: FunctionComponent = () => 
<Grid>
    <Row >
        <Col>
            <DigitButton digit={1} />
        </Col>
        <Col>
            <DigitButton digit={2} />
        </Col>
        <Col>
            <DigitButton digit={3} />
        </Col>
    </Row>
    <Row>
        <Col>
            <DigitButton digit={4} />
        </Col>
        <Col>
            <DigitButton digit={5} />
        </Col>
        <Col>
            <DigitButton digit={6} />
        </Col>
    </Row>
    <Row>
        <Col>
            <DigitButton digit={7} />
        </Col>
        <Col>
            <DigitButton digit={8} />
        </Col>
        <Col>
            <DigitButton digit={9} />
        </Col>
    </Row>
</Grid>


export default Calculator