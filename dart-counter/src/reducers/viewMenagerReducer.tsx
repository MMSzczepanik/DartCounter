import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { VIEW_TYPE } from "../types/viewType";

const VIEW_QUEUE: VIEW_TYPE[] = [VIEW_TYPE.LOGIN, VIEW_TYPE.TOURNAMENTS, VIEW_TYPE.MATCHES, VIEW_TYPE.COUNTER]

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
        },
        goNext: (state: ViewMenagerState) => ({
            activeViewType: VIEW_QUEUE[VIEW_QUEUE.findIndex(view => view === state.activeViewType)+1]
        }),
        goBack: (state: ViewMenagerState) => ({
            activeViewType: VIEW_QUEUE[VIEW_QUEUE.findIndex(view => view === state.activeViewType)-1]
        })
    }
})

export const {changeView, goBack, goNext} = viewMenagerSlice.actions;
export default viewMenagerSlice.reducer;