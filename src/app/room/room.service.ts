import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { RoomDTO } from './interfaces/dtos/room.dto';
import { GameParameters } from './interfaces/gameParameters';

@Injectable({
    providedIn: 'root'
})
export class RoomService {
    public socket: Socket;
    private readonly baseUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) {
        this.socket = io(this.baseUrl, {
            query: {
                deviceIdentifier: localStorage.getItem('pkmnRndmDraftDeviceId'),
            },
        });
    }

    getAllRooms(): Observable<RoomDTO[]> {
        const url = `${this.baseUrl}/rooms`;
        return this.http.get<RoomDTO[]>(url);
    }

    createRoom(gameParameters: GameParameters) {
        this.socket.emit('createRoom', JSON.stringify({ ...gameParameters }));
    }

    joinRoom(roomId: string) {
        this.socket.emit('joinRoom', JSON.stringify({ roomId }));
    }

    startGame(roomId: string) {
        this.socket.emit('startGame', JSON.stringify({ roomId }));
    }

    nextPick(roomId: string, pickedPokemonName: string) {
        this.socket.emit('nextPick', JSON.stringify({ roomId, pickedPokemonName }));
    }

    isPlayerOwner(roomId: string) {
        this.socket.emit('isPlayerOwner', JSON.stringify({ roomId }));
    }

    updateNickname(pseudo: string) {
        this.socket.emit('updatePseudo', JSON.stringify({ pseudo }));
    }

    quitRoom() {
        this.socket.emit('quitRoom');
    }
}