import { FunctionComponent } from "react";
import { useGetTournamentsQuery } from "../../services/tournaments";
import TournamentsView from "./children/TournamentsView/TournamentsView";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const ViewMenager: FunctionComponent = () => {

    const { data, error, isLoading } = useGetTournamentsQuery();
    const activeView = useSelector((state: RootState) => state.viewManager.activeViewType)
    console.log(activeView);

    return (
        <>
            {isLoading && <p>Loading</p>}
            {data && <TournamentsView tournaments={data} />}
            {error && <p>Error</p>}
        </>
    )
}

export default ViewMenager;