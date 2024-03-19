import { Children, FunctionComponent } from "react";
import Calculator from "../../components/Calculator/Calculator";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import ScoreView from "../../components/ScoreView/ScoreView";
import { Col, Grid, Row } from "react-flexbox-grid";
import { Player } from "../../types/player";

const X01View: FunctionComponent = () => {
    const {players, actualPlayer, actualLeg} = useSelector((state: RootState) => state.counter.game)

    return (
        <Grid>
            <Row>
                {Children.toArray(
                            players.map((player, key) => (
                                <Col>
                                    <ScoreView actualPlayerId={actualPlayer} actualScore={getActualScoreForPlayer(player, actualLeg)} index={key}/>
                                </Col>
                            ))
                        )
                }
            </Row>
            <Row>
        <Calculator />
        </Row>
    </Grid>
    )
}

const getActualScoreForPlayer = (player: Player, actualLeg: number) => player.legs[actualLeg].actualScore

export default X01View;