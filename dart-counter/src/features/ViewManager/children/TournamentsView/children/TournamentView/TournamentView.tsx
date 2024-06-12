import { FunctionComponent, useState } from "react";
import { TOURNAMENT_STATE, Tournament } from "../../../../../../types/tournaments";
import { Grid, Typography } from "@mui/material";
import ParticipantsView from "./children/ParticipantsView/ParticipantsView";
import classNames from "classnames";
import { useLazyGetMatchesByTournamentQuery } from "../../../../../../services/tournaments";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../store";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

interface IProps {
    tournament: Tournament;
}

const TournamentView: FunctionComponent<IProps> = ({
    tournament
}) => {
    const api_key = useSelector((state: RootState) => state.cridentials.password)
    const [isOpenDetails, setOpenDetails] = useState(false);
    const [ trigger ] = useLazyGetMatchesByTournamentQuery();
    return (
    <Grid direction='column' className={classNames("content-center text-center border-[2px] my-4 py-4 rounded-lg",
        tournament.tournament.state === TOURNAMENT_STATE.UNDERWAY ? 'border-blue-700 bg-blue-300' : 'border-red-700 bg-red-300'
    )} >
        <Grid onClick={() => trigger({
            tournamentId: tournament.tournament.id,
            api_key
            })} className="mb-2">

            <Typography variant="h4">{tournament.tournament.name}</Typography>
        </Grid>
        {
            isOpenDetails && <ParticipantsView torunamentId={tournament.tournament.id}/>
        }
        <Grid className="p-4" onClick={() => setOpenDetails(!isOpenDetails)}>
            {isOpenDetails? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}
        </Grid>
    </Grid>)
}
export default TournamentView;