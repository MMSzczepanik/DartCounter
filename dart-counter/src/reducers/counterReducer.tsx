import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Game } from "../types/game";
import { ParticipantDTO } from "../types/dto/participant";

export interface CounterState {
    game: Game
}

const initialLegState = {
    actualScore: 501,
    scores: []
}

const initialState: CounterState = {
    game: {
        actualPlayer: 0,
        actualLeg: 0,
        format: 5,
        score: 501,
        startedPlayerId: 0,
        players: [
            {
                name: 'Player 1',
                id: 0,
                wonLegs: 0,
                legs: [{...initialLegState}]
            },
            {
                name: 'Player 2',
                id: 0,
                wonLegs: 0,
                legs: [{
                    ...initialLegState
                }]
            }
        ]  
    }
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      confirmScore: (state: CounterState, action: PayloadAction<{
        score: number
      }>) => {
        const isEndedLeg = (getUpdatedScores(state, action.payload.score) - state.game.score) === 0
        if(isEndedLeg){
            return ({
                game: {
                    ...state.game,
                    actualPlayer: state.game.startedPlayerId === 0 ? 1 : 0,
                    startedPlayerId: state.game.startedPlayerId === 0 ? 1 : 0,
                    actualLeg: state.game.actualLeg + 1,
                    players: state.game.players.map((player, playerIndex) => playerIndex === state.game.actualPlayer ? ({
                        ...player,
                        wonLegs:  player.wonLegs + 1,
                        legs: [...player.legs.map((leg, legIndex) => ({
                            actualScore: legIndex === state.game.actualLeg ? leg.actualScore - action.payload.score : leg.actualScore,
                            scores: legIndex === state.game.actualLeg ? [...leg.scores, action.payload.score] : leg.scores
                        })), initialLegState]
                    }) : {
                        ...player,
                        legs: [...player.legs, initialLegState]
                    })
                }
            })
        }
            return ({
                game: {
                    ...state.game,
                actualPlayer: state.game.actualPlayer === 0 ? 1 : 0,
                    players: state.game.players.map((player, playerIndex) => playerIndex === state.game.actualPlayer ? ({
                        ...player,
                        legs: player.legs.map((leg, legIndex) => ({
                            actualScore: legIndex === state.game.actualLeg ? leg.actualScore - action.payload.score : leg.actualScore,
                            scores: legIndex === state.game.actualLeg ? [...leg.scores, action.payload.score] : leg.scores
                        }))
                    }) : player)
                }
            })
      },
      setPlayers: (state: CounterState, action: PayloadAction<ParticipantDTO[]>) => ({
        game: {
            ...state.game,
            players: action.payload.map(paricipant => ({
                ...paricipant.participant,
                legs: [{...initialLegState}],
                wonLegs: 0
            }))
        }
      })
    },
  })

const getUpdatedScores = (state: CounterState, score: number) => {
    const actualscores = state.game.players[state.game.actualPlayer]
        .legs[state.game.actualLeg].scores;
    return [...actualscores, score].reduce((partialSum, a) => partialSum + a, 0);
    }

export const {confirmScore, setPlayers} = counterSlice.actions
export default counterSlice.reducer;

