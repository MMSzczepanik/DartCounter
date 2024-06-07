import { FunctionComponent } from "react";
import X01View from "../x01View/x01View";
import { useGetTournamentsQuery } from "../../services/tournaments";
import TournamentsView from "./children/TournamentsView/TournamentsView";

const ViewMenager: FunctionComponent = () => {

    const { data, error, isLoading } = useGetTournamentsQuery();

    return (
        <>
            {isLoading && <p>Loading</p>}
            {data && <TournamentsView tournaments={data} />}
            {error && <p>Error</p>}
        </>
    )
}

export default ViewMenager;