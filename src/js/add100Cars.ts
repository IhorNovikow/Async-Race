import { typeAuto, typeBody } from './typeAuto';
import { createCarOnServ } from './createCarOnServ';
import { newCar } from './interface';

export function add100cars() {
    function getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    for (let i = 0; i < 100; i += 1) {
        const a = `${typeAuto[getRandomInt(0, typeAuto.length)]} ${typeBody[getRandomInt(0, typeBody.length)]}`;
        const newCar: newCar = {
            name: a,
            color: '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase(),
        };
        createCarOnServ(newCar);
    }
}
