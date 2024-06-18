import { MatchDetailsDTO } from "./dto/matches";

export interface Match {
    match: MatchDetails;
}

interface MatchDetails extends MatchDetailsDTO {
    player1_name: string;
    player2_name: string;
}