import { Grid, Typography } from "@mui/material";
import classNames from "classnames";
import { FunctionComponent } from "react";

interface IProps {
    score: number;
}

const ScoreBox: FunctionComponent<IProps> = ({score}) => 
    <Grid className={classNames('text-center border-[2px] p-4 m-4 rounded-lg',
        {'border-green-700 bg-green-300': score >= 100},
        {'border-gray-700 bg-gray-300': score < 100}
    )}>
        <Typography variant="h6">
            {score}
        </Typography>
    </Grid>

export default ScoreBox;