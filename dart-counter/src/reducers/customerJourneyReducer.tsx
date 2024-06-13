import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CustomerJourneyState {
    tournamentId: number;
    matchId: number;
}

const initialState: CustomerJourneyState =  {
    tournamentId: 0,
    matchId: 0
}

export const customerJourneySlice = createSlice({
    name: 'customerJourney',
    initialState,
    reducers: {
        setTournamentId: (state: CustomerJourneyState, action: PayloadAction<number>) => {
            return {
                ...state,
                tournamentId: action.payload
            }
        },
        setMatchId: (state: CustomerJourneyState, action: PayloadAction<number>) => {
            return {
                ...state,
                matchId: action.payload
            }
        },
    }
})

export const {setTournamentId, setMatchId} = customerJourneySlice.actions;
export default customerJourneySlice.reducer;