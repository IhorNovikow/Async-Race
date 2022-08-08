import '../style/winner.css';
import { getWinners } from './getWinners';
const garage = <HTMLElement>document.querySelector('.garage');
const winners = <HTMLElement>document.querySelector('.winners');

garage.addEventListener('click', () => {
    const winnersStr = <HTMLElement>document.querySelector('.winner-str-wrapper');
    winnersStr.classList.remove('zindex');
    winnersStr.classList.add('zindexMIN');
});

winners.addEventListener('click', () => {
    const winnersStr = <HTMLElement>document.querySelector('.winner-str-wrapper');
    const ol = <HTMLElement>document.querySelector('.winner-ol');
    ol.innerHTML = '';
    getWinners(1, 10, 'id', 'ASC');
    winnersStr.classList.add('zindex');
    winnersStr.classList.remove('zindexMIN');
});
