import { getWiner, createWinerOnServ } from './createWiner';
import { getWinners } from './getWinners';
import { CreateWinerOnServ } from './interface';

export function addNewWiner(id: string, time: number) {
    let counter = 0;
    const winnerStrWrapper = <HTMLElement>document.querySelector('.winner-str-wrapper');
    const ourWiner = winnerStrWrapper.querySelectorAll('.inf-winner');
    ourWiner.forEach((el) => {
        if (el.id === id) {
            getWiner(id, Number(time.toFixed(2)));
            counter++;
        }
        const data: CreateWinerOnServ = {
            id: Number(id),
            wins: 1,
            time: Number(time.toFixed(2)),
        };
        if (counter === 0) {
            createWinerOnServ(data);
        }
        getWinners(1, 10, 'id', 'ASC');
    });
}
