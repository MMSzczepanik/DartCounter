export interface MatchDTO {
    match: {
        id: number;
        player1_id: number;
        player2_id: number;
        state: MATCH_STATE;
    }
}

export enum MATCH_STATE {
    OPEN = 'open',
    COMPLETE = 'complete'
}