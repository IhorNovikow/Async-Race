import { createCar } from './createCar';
import { newCar } from './interface';

const base = 'http://localhost:3000';
const garage = `${base}/garage`;

export async function createCarOnServ(body: newCar) {
    fetch(garage, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            createCar(data.name, data.color, data.id);
        });
}
