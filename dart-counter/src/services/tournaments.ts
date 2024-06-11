import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_KEY, USERNAME } from '../env';
import { Tournament } from '../types/tournaments';
import { Participant } from '../types/participant';
import { Match } from '../types/matches';
import { RootState } from '../store';

export const tournamentsApi = createApi({
    reducerPath: 'tournamentsApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: `https://api.challonge.com/v1/`,
        prepareHeaders: (headers, {getState}) => {
            headers.set('Username', (getState() as RootState).cridentials.username);
            headers.set('Password', (getState() as RootState).cridentials.password);
        } }),
    endpoints: (builder) => ({
      getTournaments: builder.query<Tournament[], void>({
        query: () => `tournaments.json?api_key=${API_KEY}`,
        transformResponse: (response: Tournament[]) => 
           response.filter(tournament => tournament.tournament.started_at)
          }),
      getParticipantsByTournamentId: builder.query<Participant[], number>({
        query: (tournamentId) => `tournaments/${tournamentId}/participants.json?api_key=${API_KEY}`,
      }),
      getMatchesByTournament: builder.query<Match[], number>({
        query: (tournamentId) => `tournaments/${tournamentId}/matches.json?api_key=${API_KEY}`,
        transformResponse: (response: Match[]) => response.filter(match => match.match.player1_id && match.match.player2_id)
      }),
    }),
  })

  export const {useGetTournamentsQuery, useLazyGetParticipantsByTournamentIdQuery, useLazyGetMatchesByTournamentQuery } = tournamentsApi