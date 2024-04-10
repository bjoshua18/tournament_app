import {Team} from '@/entity/Team';
import {TeamRequest} from "@/schemas";
import {PlayerService} from "@/services/player.service";

export class TeamService {
  static async createTeam(data: TeamRequest): Promise<Team> {
    let player1 = await PlayerService.findByEmail(data.player1.email);
    if (!player1) {
      player1 = await PlayerService.createPlayer(data.player1);
    }

    let player2 = await PlayerService.findByEmail(data.player2.email);
    if (!player2) {
      player2 = await PlayerService.createPlayer(data.player2);
    }

    const team: Team = new Team();
    team.category = data.category;
    team.players = [player1, player2];
    return team.save();
  }

  static async getTeamsByCategory(): Promise<{ [key: string]: Team[] }> {
    const teams: Team[] = await Team.find({
      order: {createdAt: 'DESC'},
      relations: {
        players: true
      }
    });

    const teamsByCategory: { [key: string]: Team[] } = {};
    teams.forEach((team: Team) => {
      if (!teamsByCategory[team.category]) {
        teamsByCategory[team.category] = [];
      }
      teamsByCategory[team.category].push(team);
    });

    return teamsByCategory;
  }
}