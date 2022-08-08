import { deleteCounter } from './deleteCountCar';
import { deleteCarOnServ } from './deleteCarsOnServ';
import { deleteWinerOnServ } from './createWiner';

export function deleteCar() {
    const mainContent = <HTMLElement>document.querySelector('.main-content');
    mainContent.addEventListener('click', (event) => {
        const eventTarget = <HTMLElement>event.target;
        if (eventTarget.classList.contains('main-remove')) {
            let idElement1 = <HTMLElement>eventTarget.parentNode;
            idElement1 = <HTMLElement>idElement1.parentNode;
            idElement1 = <HTMLElement>idElement1.parentNode;
            idElement1 = <HTMLElement>idElement1.parentNode;
            const idElement = idElement1.id;
            deleteCarOnServ(idElement);
            deleteWinerOnServ(idElement);
            let deleteCar = <HTMLElement>eventTarget.parentNode;
            deleteCar = <HTMLElement>deleteCar.parentNode;
            deleteCar = <HTMLElement>deleteCar.parentNode;
            deleteCar = <HTMLElement>deleteCar.parentNode;
            deleteCar.remove();
            deleteCounter();
        }
    });
}
deleteCar();
