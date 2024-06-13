import { Match, MatchVO } from "../types/matches";
import { Participant } from "../types/participant";

export const mapMatch = (match: Match, players: Participant[]): MatchVO => ({
    match: {
        ...match.match,
        player1_name: players.find(player => player.participant.id === match.match.player1_id)?.participant.name ?? '',
        player2_name: players.find(player => player.participant.id === match.match.player2_id)?.participant.name ?? '',
    }
})