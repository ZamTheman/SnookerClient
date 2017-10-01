import { Player } from '../models/player.model';

export class PlayersService{
    players: Player[] = [
        new Player('Jonas', 'some path'),
        new Player('Reijo', 'some path'),
        new Player('Kjell', 'some path'),
        new Player('Samuel', 'some path'),
        new Player('Patrik', 'some path'),
        new Player('Magnus', 'some path'),
        new Player('Emilia', 'some path'),
    ];

    GetPlayers(){
        return this.players.slice();
    }
}