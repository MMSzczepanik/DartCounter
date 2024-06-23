import { Grid, Modal } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { store } from "../../../../../../store";
import { endLeg } from "../../../../../../reducers/counterReducer";
import DartsContent from "./children/DartsContent/DartsContent";
import FinishMatchContent from "./children/FinishMatchContent/FinishMatchContent";

interface IProps {
    open: boolean;
    handleClose: React.Dispatch<React.SetStateAction<boolean>>
}

const CheckoutModal: FunctionComponent<IProps> = ({ open, handleClose }) => {

    const [isDartsChoosen, setDartsChoosen] = useState<number>();

    const dispatchEndLeg = (dart: number) => {
        setDartsChoosen(dart);
        store.dispatch(endLeg({
            dart
        }))
    }

    return (
        <Modal 
            open={open}
        >
            <Grid container className="h-screen flex items-center justify-center content-center text-center">
                <Grid direction='column' className="flex items-center justify-center content-center text-center border-solid border-[4px] border-blue-700 bg-blue-200 p-20">
                    {
                        isDartsChoosen ? <FinishMatchContent handleClose={handleClose} setDartsChoosen={setDartsChoosen}/> : <DartsContent dispatchEndLeg={dispatchEndLeg}/>
                    }
                </Grid>
            </Grid>
        </Modal>
    )
}

export default CheckoutModal;