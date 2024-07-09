export interface MatchDTO {
    match: MatchDetailsDTO;
}

export interface MatchDetailsDTO {
    id: number;
    player1_id: number;
    player2_id: number;
    state: MATCH_STATE;
    scores_csv: string;
    round: number;
    winner_id: number;
}

export interface MatchPayloadDTO {
    match: MatchDetailsPayloadDTO
}

export interface MatchDetailsPayloadDTO {
    scores_csv: string;
    winner_id: number;
    player1_votes: number;
    player2_votes: number;
}

export enum MATCH_STATE {
    OPEN = 'open',
    COMPLETE = 'complete'
}