import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Tournament } from '../types/tournaments';
import { Participant } from '../types/participant';
import { Match } from '../types/matches';
import { RootState } from '../store';
import { ApiKey } from '../types/apiKey';

export const tournamentsApi = createApi({
    reducerPath: 'tournamentsApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: `https://api.challonge.com/v1/`,
        prepareHeaders: (headers, {getState}) => {
            headers.set('Username', (getState() as RootState).cridentials.username);
            headers.set('Password', (getState() as RootState).cridentials.password);
        } }),
    endpoints: (builder) => ({
      getTournaments: builder.query<Tournament[], ApiKey>({
        query: ({api_key}) => `tournaments.json?api_key=${api_key}`,
        transformResponse: (response: Tournament[]) => 
           response.filter(tournament => tournament.tournament.started_at)
          }),
      getParticipantsByTournamentId: builder.query<Participant[], {tournamentId: number} & ApiKey>({
        query: ({tournamentId, api_key}) => `tournaments/${tournamentId}/participants.json?api_key=${api_key}`,
      }),
      getMatchesByTournament: builder.query<Match[], {tournamentId: number} & ApiKey>({
        query: ({tournamentId, api_key}) => `tournaments/${tournamentId}/matches.json?api_key=${api_key}`,
        transformResponse: (response: Match[]) => response.filter(match => match.match.player1_id && match.match.player2_id)
      }),
    }),
  })

  export const {useGetTournamentsQuery, useLazyGetParticipantsByTournamentIdQuery, useLazyGetMatchesByTournamentQuery } = tournamentsApi