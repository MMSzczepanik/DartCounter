import { KeyboardBackspaceOutlined } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { RootState, store } from "../../store";
import { getStepConfig } from "../../config/steps";
import { changeView, goBack } from "../../reducers/viewMenagerReducer";
import secureLocalStorage from "react-secure-storage";
import { VIEW_TYPE } from "../../types/viewType";
import LogoutIcon from '@mui/icons-material/Logout';

interface IProps {
    title: string;
}

const goBackHandler = () => {
    store.dispatch(goBack())
}

const logoutHandler = () => {
    secureLocalStorage.removeItem("cridentials");
    store.dispatch(changeView({view: VIEW_TYPE.LOGIN}));
}

const TopHeader: FunctionComponent<IProps> = ({title}) => {

    const activeView = useSelector((state: RootState) => state.viewManager.activeViewType)


    return (
        <Grid container className="bg-slate-200 content-center text-center shadow-md min-w-full py-1 flex items-center justify-center">
            <Grid item xs={2}>
                <img src={'/rabbit.svg'} className='h-24 w-24'/>
            </Grid>
            <Grid item xs={8}>
                    <Typography variant="h4">{title}</Typography>
            </Grid>
                <Grid item xs={2}>
                {getStepConfig[activeView].goBack && <Button size={"large"} startIcon={<KeyboardBackspaceOutlined />} onClick={goBackHandler}>
                        Back                   
                    </Button>}
                {
                getStepConfig[activeView].logout && <Button size={"large"} startIcon={<LogoutIcon />} onClick={logoutHandler}>Logout</Button>
                }
            </Grid>
        </Grid>
    )
}

export default TopHeader;