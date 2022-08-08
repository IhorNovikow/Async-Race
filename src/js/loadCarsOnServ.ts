import { createCar } from './createCar';
import { DataOnLoadCar } from './interface';

const base = 'http://localhost:3000';
const garage = `${base}/garage`;

export function loadCarsOnServ(page: number, limit: number) {
    fetch(`${garage}?_page=${page}&_limit=${limit}`)
        .then((response) => {
            const counter = <HTMLElement>document.querySelector('.counter');
            const servCount = <string>response.headers.get('X-Total-Count');
            counter.innerHTML = servCount;
            return response.json();
        })
        .then((data: DataOnLoadCar[]) => {
            const mainContent = <HTMLElement>document.querySelector('.main-content');
            mainContent.innerHTML = '';
            data.forEach((el) => {
                createCar(el.name, el.color, String(el.id));
            });
        });
}

loadCarsOnServ(1, 7);
