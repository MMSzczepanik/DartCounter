import { FunctionComponent, useEffect } from "react";
import { Tournament } from "../../../../types/tournaments";
import TournamentView from "./children/TournamentView/TournamentView";
import { Grid } from "@mui/material";
import { useGetTournamentsQuery } from "../../../../services/tournaments";
import { store } from "../../../../store";
import { changeView } from "../../../../reducers/viewMenagerReducer";
import { VIEW_TYPE } from "../../../../types/viewType";

const TournamentsView: FunctionComponent = () => {
    const { data, error, isLoading } = useGetTournamentsQuery();

    useEffect( () => {
        if(error){
            store.dispatch(changeView({view: VIEW_TYPE.LOGIN}))
        }
    })

    return (
        <Grid className="min-w-full">
            {isLoading && <p>Loading</p>}
            {data && data.map((tournament, key) => <TournamentView tournament={tournament} key={key}/>)}
            {error && <p>Error</p>}
        </Grid>
    )
}

export default TournamentsView;
