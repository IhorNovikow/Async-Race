import { loadWiner } from './loadWiner';
import { Sort, Order, CreateWinerOnServ } from './interface';

const base = 'http://localhost:3000';
const garage = `${base}/winners`;

export function getWinners(page: number, limit: number, sort: Sort, order: Order) {
    fetch(`${garage}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`)
        .then((response) => {
            const winnerCounter = <HTMLElement>document.querySelector('.winner-counter');
            winnerCounter.innerHTML = `${response.headers.get('X-Total-Count')}`;
            return response.json();
        })
        .then((data: CreateWinerOnServ[]) => {
            console.log(data);

            data.forEach((el) => {
                fetch(`http://localhost:3000/garage/${el.id}`)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        loadWiner(data.name, data.color, data.id, el.time, el.wins);
                        return data;
                    });
            });
        });
}

getWinners(1, 10, 'id', 'ASC');
