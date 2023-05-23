import HttpService from "@/services/HttpService";

export interface Room{
    name: string;
    description: string;
    points: number;
    connectedUsers: string;
    idOwner: number;
    idSuite: number;
    idTeam: number;
}

export default class RoomService{

    static getUserRooms(idUser:number): Promise<Room[]> {
        return HttpService.get('rooms/?filter=idOwner='+idUser);
    }

    static getAll(): Promise<Room[]> {
        return HttpService.get('rooms');
    }

    static add(room: Room): Promise<any> {
        console.log("room : " + room.name + " " + room.description + " " + room.points + " " + room.connectedUsers);
        return HttpService.post('rooms', room, {'Content-Type': 'application/json'});
    }

    static delete(id: number): Promise<Room> {
        return HttpService.delete('rooms'+id);
    }
}
