import { add100cars } from './add100Cars';
import { loadCarsOnServ } from './loadCarsOnServ';

const createCsrds = <HTMLElement>document.querySelector('.create-csrds');

createCsrds.addEventListener('click', () => {
    add100cars();
    const page2 = <HTMLElement>document.querySelector('.counter-str');
    const page = page2.innerHTML;
    loadCarsOnServ(Number(page), 7);
    const count = <HTMLElement>document.querySelector('.counter');
    count.innerHTML = String(+count.innerHTML + 100);
});
