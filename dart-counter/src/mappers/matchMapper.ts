import { Match } from "../types/matches";
import { ParticipantDTO } from "../types/dto/participant";
import { MatchDTO } from "../types/dto/matches";

export const mapMatch = (match: MatchDTO, players: ParticipantDTO[]): Match => ({
    match: {
        ...match.match,
        player1_name: players.find(player => player.participant.id === match.match.player1_id)?.participant.name ?? '',
        player2_name: players.find(player => player.participant.id === match.match.player2_id)?.participant.name ?? '',
    }
})