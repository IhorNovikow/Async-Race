export interface newCar {
    name: string;
    color: string;
}

export interface CreateWinerOnServ {
    id: number;
    wins: number;
    time: number;
}

export interface UpDateWinnerOnServ {
    wins: number;
    time: number;
}

export interface UpCarOnServ {
    name: string;
    color: string;
}

export type Sort = 'id' | 'wins' | 'time';

export type Order = 'ASC' | 'DESC';

export type Status = 'started' | 'stopped';

export interface DataForSpeed {
    velocity: number;
    distance: number;
}

export interface DataOnLoadCar {
    name: string;
    color: string;
    id: number;
}