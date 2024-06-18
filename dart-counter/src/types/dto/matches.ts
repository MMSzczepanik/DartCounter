export interface MatchDTO {
    match: MatchDetailsDTO;
}

export interface MatchDetailsDTO {
    id: number;
    player1_id: number;
    player2_id: number;
    state: MATCH_STATE;
    scores_csv: string;
    winner_id: number;
}

export enum MATCH_STATE {
    OPEN = 'open',
    COMPLETE = 'complete'
}