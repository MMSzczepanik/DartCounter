import { FunctionComponent, useEffect } from "react";
import TournamentView from "./children/TournamentView/TournamentView";
import { CircularProgress, Grid } from "@mui/material";
import { useGetTournamentsQuery } from "../../../../services/tournaments";
import { RootState, store } from "../../../../store";
import { goBack } from "../../../../reducers/viewMenagerReducer";
import { useSelector } from "react-redux";
import classNames from "classnames";

const TournamentsView: FunctionComponent = () => {
    const api_key = useSelector((state: RootState) => state.cridentials.password)
    const { data, error, isLoading } = useGetTournamentsQuery({api_key});

    useEffect( () => {
        if(error){
            store.dispatch(goBack())
        }
    })

    return (
        <Grid className={classNames(
                "min-w-full", 
                {"h-screen flex items-center justify-center": isLoading}
            )}>
            {isLoading && <CircularProgress />}
            {data && data.map((tournament, key) => <TournamentView tournament={tournament} key={key}/>)}
            {error && <p>Error</p>}
        </Grid>
    )
}

export default TournamentsView;
