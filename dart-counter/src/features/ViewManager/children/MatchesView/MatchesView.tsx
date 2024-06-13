import { FunctionComponent } from "react";
import { useGetMatchesByTournamentQuery, useGetParticipantsByTournamentIdQuery } from "../../../../services/tournaments";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { CircularProgress, Grid } from "@mui/material";
import classNames from "classnames";
import { mapMatch } from "../../../../mappers/matchMapper";

const MatchesView: FunctionComponent = () => {

    const tournamentId = useSelector((state: RootState) => state.customerJourney.tournamentId);
    const api_key = useSelector((state: RootState) => state.cridentials.password);
    const { data: matchesData, isLoading: matchesIsLoading } = useGetMatchesByTournamentQuery({
        tournamentId,
        api_key
    });
    const { data: pariticipantsData, isLoading: partinipantsIsLoading } = useGetParticipantsByTournamentIdQuery({
        tournamentId,
        api_key
    });

    const data = matchesData && pariticipantsData;
    const isLoading = matchesIsLoading && partinipantsIsLoading;

    const mappedMatch = matchesData && pariticipantsData && matchesData.map(match => mapMatch(match,pariticipantsData))

    return (
        <Grid className={classNames(
            "min-w-full", 
            {"h-screen flex items-center justify-center": isLoading}
        )}>
            {isLoading && <CircularProgress />}
            {data && mappedMatch && mappedMatch.map(match => <p>{match.match.player1_name} - {match.match.player2_name}</p>)}
        </Grid>
    )
}

export default MatchesView;