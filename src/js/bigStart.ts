import { fnStartedOrDrive } from './fnStartedOrDrive';

const RaceRace = <HTMLElement>document.querySelector('.race');
RaceRace.addEventListener('click', (event) => {
    const allID = document.querySelectorAll('.main-content-wrapper');
    allID.forEach((el) => {
        const eventTarget = <HTMLElement>event.target;
        fnStartedOrDrive(Number(el.id), 'started', eventTarget);
        const nextFromTarget = <HTMLElement>eventTarget.nextElementSibling;
        nextFromTarget.removeAttribute('disabled');
    });
});
