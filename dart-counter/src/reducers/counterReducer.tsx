import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Game } from "../types/game";
import { ParticipantDTO } from "../types/dto/participant";
import { Leg } from "../types/leg";

export interface CounterState {
    game: Game
}

const initialLegState: Leg = {
    actualScore: 501,
    darts: 0,
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
      }>) => ({
                game: {
                    ...state.game,
                actualPlayer: state.game.actualPlayer === 0 ? 1 : 0,
                    players: state.game.players.map((player, playerIndex) => playerIndex === state.game.actualPlayer ? ({
                        ...player,
                        legs: player.legs.map((leg, legIndex) => ({
                            actualScore: legIndex === state.game.actualLeg ? leg.actualScore - action.payload.score : leg.actualScore,
                            scores: legIndex === state.game.actualLeg ? [...leg.scores, action.payload.score] : leg.scores,
                            darts: legIndex === state.game.actualLeg ? leg.darts+3 : leg.darts
                        }))
                    }) : player)
                }
            }),
      endLeg: (state: CounterState, action: PayloadAction<{
        dart: number
      }>) => ({
        game: {
            ...state.game,
            actualPlayer: state.game.startedPlayerId === 0 ? 1 : 0,
            startedPlayerId: state.game.startedPlayerId === 0 ? 1 : 0,
            actualLeg: state.game.actualLeg + 1,
            players: state.game.players.map((player, playerIndex) => playerIndex === state.game.actualPlayer ? ({
                ...player,
                wonLegs:  player.wonLegs + 1,
                legs: [...player.legs.map((leg, legIndex) => ({
                    actualScore: legIndex === state.game.actualLeg ? 0 : leg.actualScore,
                    scores: legIndex === state.game.actualLeg ? [...leg.scores, leg.actualScore] : leg.scores,
                    darts: legIndex === state.game.actualLeg ? leg.darts + action.payload.dart : leg.darts
                })), initialLegState]
            }) : {
                ...player,
                legs: [...player.legs, initialLegState]
            })
        }
    }),
      setPlayers: (state: CounterState, action: PayloadAction<ParticipantDTO[]>) => ({
        game: {
            ...state.game,
            players: action.payload.map(paricipant => ({
                ...paricipant.participant,
                legs: [{...initialLegState}],
                wonLegs: 0
            }))
        }
      }),
      resetCounter: () => initialState
    },
  })

export const {confirmScore, setPlayers, endLeg, resetCounter} = counterSlice.actions
export default counterSlice.reducer;

