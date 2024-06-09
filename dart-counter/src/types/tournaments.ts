export interface Tournament {
    tournament: {
        name: string;
        state: TOURNAMENT_STATE;
        started_at: Date;
        id: number;
    }
}

export enum TOURNAMENT_STATE {
    UNDERWAY = 'underway',
    PENDING = 'pending'
}