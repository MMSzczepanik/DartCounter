import { Button, Grid, Typography } from "@mui/material"
import { FunctionComponent } from "react"

interface IProps {
    dispatchEndLeg: (dart: number) => void
}



const DartsContent: FunctionComponent<IProps> = ({dispatchEndLeg}) => {

    const confirmDarts = (darts: number) => {
        dispatchEndLeg(darts);
    }
    

    return (
        <>
                    <Grid item>
                        <Typography variant='h3' className="pb-2"> CHECKOUT </Typography>
                    </Grid>
                    <Grid item direction='row' className="flex flex-row justify-between">
                        <Grid item xs={4}>
                            <Button variant="contained" size="large"
                                onClick={() => confirmDarts(1)}
                            >
                                1st
                            </Button>
                        </Grid>
                        <Grid item xs={4} className="px-2">
                            <Button variant="contained" size="large"
                                onClick={() => confirmDarts(2)}
                            >
                                2nd
                            </Button>
                        </Grid>
                        <Grid item xs={4} className="px-3">  
                            <Button variant="contained" size="large"
                                onClick={() => confirmDarts(3)}
                            >
                                3rd
                            </Button>
                        </Grid>
                    </Grid>
        </>
    )
}

export default DartsContent;