import { FunctionComponent, useEffect } from "react";
import TournamentView from "./children/TournamentView/TournamentView";
import { CircularProgress, Grid } from "@mui/material";
import { useGetTournamentsQuery } from "../../../../services/tournaments";
import { store } from "../../../../store";
import { goBack } from "../../../../reducers/viewMenagerReducer";
import classNames from "classnames";
import secureLocalStorage from "react-secure-storage";
import { Cridentials } from "../../../../types/cridentials";

const TournamentsView: FunctionComponent = () => {
    const cridentials = secureLocalStorage.getItem("cridentials") as Cridentials;
    const { data, error, isLoading } = useGetTournamentsQuery({api_key: cridentials.password});

    useEffect( () => {
        if(error){
            store.dispatch(goBack())
            secureLocalStorage.removeItem("cridentials");
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
