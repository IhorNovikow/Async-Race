import { loadCarsOnServ } from './loadCarsOnServ';

const buttonLeft = <HTMLElement>document.querySelector('.button-left');
const buttonRight = <HTMLElement>document.querySelector('.button-right');
const mainPagination = <HTMLElement>document.querySelector('.main-pagination');

mainPagination.addEventListener('click', (event) => {
    if (event.target === buttonRight) {
        const page1 = <HTMLElement>document.querySelector('.counter-str');
        const page2 = <string>page1.innerHTML;
        const page: number = +page2;
        const mainContent = <HTMLElement>document.querySelector('.main-content');
        mainContent.innerHTML = '';
        loadCarsOnServ(page + 1, 7);
        const counterStr = <HTMLElement>document.querySelector('.counter-str');
        counterStr.innerHTML = String(+counterStr.innerHTML + 1);
        buttonLeft.removeAttribute('disabled');
    } else if (event.target === buttonLeft) {
        const page1 = <HTMLElement>document.querySelector('.counter-str');
        const page2 = page1.innerHTML;
        const page: number = +page2;
        const mainContent = <HTMLElement>document.querySelector('.main-content');
        mainContent.innerHTML = '';
        loadCarsOnServ(page - 1, 7);
        const counterStr = <HTMLElement>document.querySelector('.counter-str');
        counterStr.innerHTML = String(+counterStr.innerHTML - 1);
        if (counterStr.innerHTML === '1') {
            buttonLeft.setAttribute('disabled', 'disabled');
        }
    }
});
