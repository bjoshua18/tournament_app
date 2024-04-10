export type PlayerRequest = {
  name: string;
  lastname: string;
  phone: string;
  email: string;
  shirtSize: string;
  availability: string;
}

export type TeamRequest = {
  category: string;
  player1: PlayerRequest;
  player2: PlayerRequest;
}