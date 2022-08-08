import { UpCarOnServ } from './interface';
const base = 'http://localhost:3000';

const garage = `${base}/garage`;

export function upCarOnServ(id: string, body: UpCarOnServ) {
    fetch(`${garage}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
