import { PlayerDTO } from './player.dto';

export interface RoomDTO {
    id: string;
    size: number;
    players: Partial<PlayerDTO>[];
    name: string;
}