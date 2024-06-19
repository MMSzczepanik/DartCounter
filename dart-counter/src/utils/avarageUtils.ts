import { Leg } from "../types/leg";

export const getAvarage = (legs: Leg[]) => {
    const sumOfScores = legs.flatMap(leg => leg.scores).reduce((a,b) => a + b, 0);
    const sumOfDarts = legs.flatMap(legs => legs.darts).reduce((a,b) => a + b, 0 );
    const avarage = sumOfScores/sumOfDarts
    return isNaN(avarage) ? undefined : avarage.toFixed(2);
}