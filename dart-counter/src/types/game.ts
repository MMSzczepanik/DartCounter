import { Player } from "./player";

export interface Game {
    actualPlayer: number;
    startedPlayerId: number;
    format: number;
    score: number;
    actualLeg: number,
    players: Player[];
}