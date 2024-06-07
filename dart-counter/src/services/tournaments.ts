import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_KEY, USERNAME } from '../env';
import { Tournament } from '../types/tournaments';
import { Participant } from '../types/participant';

export const tournamentsApi = createApi({
    reducerPath: 'tournamentsApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: `https://api.challonge.com/v1/`,
        prepareHeaders: (headers) => {
            headers.set('Username', USERNAME);
            headers.set('Password', API_KEY);
        } }),
    endpoints: (builder) => ({
      getTournaments: builder.query<Tournament[], void>({
        query: () => `tournaments.json?api_key=${API_KEY}`,
      }),
      getParticipantsByTournamentId: builder.query<Participant[], number>({
        query: (tournamentId) => `tournaments/${tournamentId}/participants.json?api_key=${API_KEY}`,
      }),
    }),
  })

  export const {useGetTournamentsQuery, useLazyGetParticipantsByTournamentIdQuery } = tournamentsApi