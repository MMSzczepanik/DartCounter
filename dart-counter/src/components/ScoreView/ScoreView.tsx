import classNames from "classnames";
import { FunctionComponent } from "react";

interface Props {
    index: number;
    actualPlayerId: number,
    actualScore: number
}

const ScoreView: FunctionComponent<Props> = ({
    actualScore, actualPlayerId, index
}) => {
    const isActualPlayer = actualPlayerId === index;
    return <div className={classNames({
        'border-solid border-black border-2' : !isActualPlayer
    },
    {
        'border-double border-blue border-4' : isActualPlayer
    })}>
        {actualScore}
    </div>
}

export default ScoreView;