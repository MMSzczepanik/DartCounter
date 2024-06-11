import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CridentialsState {
    username: string;
    password: string;
}

const initialState: CridentialsState =  {
    username: '',
    password: ''
}

export const cridentialsSlice = createSlice({
    name: 'cridentials',
    initialState,
    reducers: {
        setCridentials: (state: CridentialsState, action: PayloadAction<CridentialsState>) => {
            return {
                ...action.payload
            }
        }
    }
})

export const {setCridentials} = cridentialsSlice.actions;
export default cridentialsSlice.reducer;