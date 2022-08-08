import '../style/animation.css';
import { fnStartedOrDrive } from './fnStartedOrDrive';

const mainContent = <HTMLElement>document.querySelector('.main-content');
mainContent.addEventListener('click', (event: MouseEvent) => {
    const EventTarget = <HTMLElement>event.target;
    if (EventTarget.classList.contains('main-A')) {
        let idCar1 = <HTMLElement>EventTarget;
        idCar1 = <HTMLElement>idCar1.parentNode;
        idCar1 = <HTMLElement>idCar1.parentNode;
        idCar1 = <HTMLElement>idCar1.parentNode;
        const idCar = Number(idCar1.id);

        EventTarget.setAttribute('disabled', 'true');
        const A = <HTMLElement>EventTarget.nextElementSibling;
        A.removeAttribute('disabled');
        fnStartedOrDrive(idCar, 'started', EventTarget);
    }
});
