export interface TournamentDTO {
    tournament: {
        name: string;
        state: TOURNAMENT_STATE;
        started_at: string;
        participants_count: number;
        tournament_type: string;
        id: number;
    }
}

export enum TOURNAMENT_STATE {
    UNDERWAY = 'underway',
    PENDING = 'pending'
}