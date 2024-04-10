import {Player} from "@/entity/Player";
import {PlayerRequest} from "@/schemas";

export class PlayerService {
  static async findByEmail(email: string): Promise<Player | null> {
    try {
      const player: Player | null = await Player.findOne({where: {email}});
      console.log('player:', player)
      return player;
    } catch (error) {
      throw new Error(`Error finding player by email: ${error}`);
    }
  }

  static async createPlayer(data: PlayerRequest): Promise<Player> {
    try {
      const player: Player = new Player();
      player.name = data.name;
      player.lastname = data.lastname;
      player.phone = data.phone;
      player.email = data.email;
      player.shirtSize = data.shirtSize;
      player.availability = data.availability;
      return player.save();
    } catch (error) {
      throw new Error(`Error creating player: ${error}`);
    }
  }
}