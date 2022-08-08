import { CreateWinerOnServ, UpDateWinnerOnServ } from './interface';
export function createWinerOnServ(data: CreateWinerOnServ): void {
    fetch(`http://localhost:3000/winners`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export function upDateWinerOnServ(id: string, data: UpDateWinnerOnServ): void {
    fetch(`http://localhost:3000/winners/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export function getWiner(id: string, time: number) {
    fetch(`http://localhost:3000/winners/${id}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const win = data.wins + 1;
            if (data.time < time) {
                time = data.time;
            }
            const a: UpDateWinnerOnServ = {
                wins: win,
                time: time,
            };
            upDateWinerOnServ(id, a);
            return data;
        });
}

export function deleteWinerOnServ(id: string) {
    fetch(`http://localhost:3000/winners/${id}`, { method: 'DELETE' })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });
}
