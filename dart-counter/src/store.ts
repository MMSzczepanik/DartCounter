import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterReducer'
import { tournamentsApi } from './services/tournaments'
import viewMenagerReducer from './reducers/viewMenagerReducer'
import cridentialsReducer from './reducers/cridentialsReducer'
import customerJourneyReducer from './reducers/customerJourneyReducer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    viewManager: viewMenagerReducer,
    cridentials: cridentialsReducer,
    customerJourney: customerJourneyReducer,
    [tournamentsApi.reducerPath]: tournamentsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tournamentsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
