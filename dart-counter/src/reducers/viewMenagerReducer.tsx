import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { VIEW_TYPE } from "../types/viewType";

export interface ViewMenagerState {
    activeViewType: VIEW_TYPE
}

const initialState: ViewMenagerState =  {
    activeViewType: VIEW_TYPE.LOGIN
}

export const viewMenagerSlice = createSlice({
    name: 'viewManager',
    initialState,
    reducers: {
        changeView: (state: ViewMenagerState, action: PayloadAction<{
            view: VIEW_TYPE
        }>) => {
            return {
                activeViewType: action.payload.view
            }
        }
    }
})

export const {changeView} = viewMenagerSlice.actions;
export default viewMenagerSlice.reducer;