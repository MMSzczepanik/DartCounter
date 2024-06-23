import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TournamentDTO } from '../types/dto/tournaments';
import { ParticipantDTO } from '../types/dto/participant';
import { RootState } from '../store';
import { ApiKey } from '../types/apiKey';
import { MatchDTO, MatchPayloadDTO } from '../types/dto/matches';

export const tournamentsApi = createApi({
    reducerPath: 'tournamentsApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: `https://api.challonge.com/v1/`,
        prepareHeaders: (headers, {getState}) => {
            headers.set('Username', (getState() as RootState).cridentials.username);
            headers.set('Password', (getState() as RootState).cridentials.password);
        } }),
    endpoints: (builder) => ({
      getTournaments: builder.query<TournamentDTO[], ApiKey>({
        query: ({api_key}) => `tournaments.json?api_key=${api_key}`,
        transformResponse: (response: TournamentDTO[]) => 
           response.filter(tournament => tournament.tournament.started_at)
          }),
      getParticipantsByTournamentId: builder.query<ParticipantDTO[], {tournamentId: number} & ApiKey>({
        query: ({tournamentId, api_key}) => `tournaments/${tournamentId}/participants.json?api_key=${api_key}`,
      }),
      getMatchesByTournament: builder.query<MatchDTO[], {tournamentId: number} & ApiKey>({
        query: ({tournamentId, api_key}) => `tournaments/${tournamentId}/matches.json?api_key=${api_key}`,
        transformResponse: (response: MatchDTO[]) => response.filter(
          match => 
              match.match.player1_id &&
              match.match.player2_id)
      }),
      postMatchUnderway: builder.query<ParticipantDTO[], {tournamentId: number, matchId: number} & ApiKey>({
        query: ({tournamentId, matchId, api_key}) => ({
            url: `tournaments/${tournamentId}/matches/${matchId}/mark_as_underway.json?api_key=${api_key}`,
            method: 'POST'
      })}),
      putMatchScores: builder.query<void, MatchPayloadDTO & {tournamentId: number, matchId: number} & ApiKey>({
        query: ({tournamentId, matchId, api_key, match}) => ({
            url: `tournaments/${tournamentId}/matches/${matchId}.json?api_key=${api_key}`,
            method: 'PUT',
            body: {match}
        })
      })
    }),
  })

  export const {useGetTournamentsQuery, useLazyGetParticipantsByTournamentIdQuery, useGetMatchesByTournamentQuery, useGetParticipantsByTournamentIdQuery, usePostMatchUnderwayQuery, useLazyPutMatchScoresQuery } = tournamentsApi