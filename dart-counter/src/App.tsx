import { Grid } from "@mui/material";
import ViewMenager from "./features/ViewManager/ViewMenager";

function App() {
  return (
    <Grid container className="p-4 bg-slate-300">
      <ViewMenager />
    </Grid>
  );
}

export default App;
