import { FunctionComponent } from "react";
import { useGetMatchesByTournamentQuery, useGetParticipantsByTournamentIdQuery } from "../../../../services/tournaments";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { CircularProgress, Grid } from "@mui/material";
import classNames from "classnames";
import { mapMatch } from "../../../../mappers/matchMapper";
import MatchView from "./children/MatchView/MatchView";
import secureLocalStorage from "react-secure-storage";
import { Cridentials } from "../../../../types/cridentials";

const MatchesView: FunctionComponent = () => {

    const tournamentId = useSelector((state: RootState) => state.customerJourney.tournamentId);
    const cridentials = secureLocalStorage.getItem('cridentials') as Cridentials;
    const { data: matchesData, isLoading: matchesIsLoading } = useGetMatchesByTournamentQuery({
        tournamentId,
        api_key: cridentials.password
    });
    const { data: pariticipantsData, isLoading: partinipantsIsLoading } = useGetParticipantsByTournamentIdQuery({
        tournamentId,
        api_key: cridentials.password
    });

    const data = matchesData && pariticipantsData;
    const isLoading = matchesIsLoading && partinipantsIsLoading;

    const mappedMatch = matchesData && pariticipantsData && matchesData.map(match => mapMatch(match,pariticipantsData))

    return (
        <Grid className={classNames(
            "min-w-full", 
            {"h-screen flex items-center justify-center shadow-md": isLoading}
        )}>
            {isLoading && <CircularProgress />}
            {data && mappedMatch && mappedMatch.map((match, key) => <MatchView match={match} key={key} />)}
        </Grid>
    )
}

export default MatchesView;