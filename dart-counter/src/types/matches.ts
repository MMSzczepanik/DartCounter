export interface Match {
    match: {
        id: number;
        player1_id: number;
        player2_id: number;
        state: MATCH_STATE;
    }
}

export interface MatchVO {
    match: {
        id: number;
        player1_id: number;
        player2_id: number;
        player1_name: string;
        player2_name: string;
    }
}

export enum MATCH_STATE {
    OPEN = 'open',
    COMPLETE = 'complete'
}