import { MATCH_STATE } from "./dto/matches";

export interface Match {
    match: {
        id: number;
        player1_id: number;
        player2_id: number;
        player1_name: string;
        player2_name: string;
        winner_id: number;
        state: MATCH_STATE;
        scores_csv: string;
    }
}