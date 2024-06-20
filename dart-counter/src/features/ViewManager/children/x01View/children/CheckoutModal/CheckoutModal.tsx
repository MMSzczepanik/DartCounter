import { Button, Grid, Modal, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { store } from "../../../../../../store";
import { endLeg } from "../../../../../../reducers/counterReducer";

interface IProps {
    open: boolean;
    handleClose: React.Dispatch<React.SetStateAction<boolean>>

}

const dispatchEndLeg = (dart: number, handleClose: React.Dispatch<React.SetStateAction<boolean>>) => {
    store.dispatch(endLeg({
        dart
    }))
    handleClose(false);
}

const CheckoutModal: FunctionComponent<IProps> = ({ open, handleClose }) => {
    return (
        <Modal 
            open={open}
        >
            <Grid container className="h-screen flex items-center justify-center content-center text-center">
                <Grid direction='column' className="flex items-center justify-center content-center text-center border-solid border-[4px] border-blue-700 bg-blue-200 p-20">
                    <Grid item>
                        <Typography variant='h3' className="pb-2"> CHECKOUT </Typography>
                    </Grid>
                    <Grid item direction='row' className="flex flex-row justify-between">
                        <Grid item xs={4}>
                            <Button variant="contained" size="large"
                                onClick={() => dispatchEndLeg(1, handleClose)}
                            >
                                1st
                            </Button>
                        </Grid>
                        <Grid item xs={4} className="px-2">
                            <Button variant="contained" size="large"
                                onClick={() => dispatchEndLeg(2, handleClose)}
                            >
                                2nd
                            </Button>
                        </Grid>
                        <Grid item xs={4} className="px-3">  
                            <Button variant="contained" size="large"
                                onClick={() => dispatchEndLeg(3, handleClose)}
                            >
                                3rd
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Modal>
    )
}

export default CheckoutModal;