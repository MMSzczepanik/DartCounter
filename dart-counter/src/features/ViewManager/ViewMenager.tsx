import { FunctionComponent } from "react";
import TournamentsView from "./children/TournamentsView/TournamentsView";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import LoginView from "./children/LoginView/LoginView";
import { VIEW_TYPE } from "../../types/viewType";
import MatchesView from "./children/MatchesView/MatchesView";
import X01View from "./children/x01View/x01View";
import TopHeader from "../TopHeader/TopHeader";
import { Grid } from "@mui/material";
import { getStepConfig } from "../../config/steps";

const ViewMenager: FunctionComponent = () => {

    const activeView = useSelector((state: RootState) => state.viewManager.activeViewType)

    return (
        <Grid container direction='column'>
            <Grid item>
                {getStepConfig[activeView].header && <TopHeader title={'TOURNAMENT'}/>}
            </Grid>
            <Grid container className="p-4">
                {activeView === VIEW_TYPE.LOGIN && <LoginView />}
                {activeView === VIEW_TYPE.TOURNAMENTS && <TournamentsView />}
                {activeView === VIEW_TYPE.MATCHES && <MatchesView />}
                {activeView === VIEW_TYPE.COUNTER && <X01View />}
            </Grid>
        </Grid>
    )
}

export default ViewMenager;