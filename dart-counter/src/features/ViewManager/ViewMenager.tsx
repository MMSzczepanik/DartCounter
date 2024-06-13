import { FunctionComponent } from "react";
import TournamentsView from "./children/TournamentsView/TournamentsView";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import LoginView from "./children/LoginView/LoginView";
import { VIEW_TYPE } from "../../types/viewType";
import MatchesView from "./children/MatchesView/MatchesView";

const ViewMenager: FunctionComponent = () => {

    const activeView = useSelector((state: RootState) => state.viewManager.activeViewType)

    return (
        <>
            {activeView === VIEW_TYPE.LOGIN && <LoginView />}
            {activeView === VIEW_TYPE.TOURNAMENTS && <TournamentsView />}
            {activeView === VIEW_TYPE.MATCHES && <MatchesView />}
        </>
    )
}

export default ViewMenager;