import { addNewWiner } from './addNewWiner';
import { Status, DataForSpeed, DataOnLoadCar } from './interface';

const base = 'http://localhost:3000';
const garage = `${base}/engine`;

export const fnStartedOrDrive = (n: number, a: Status, eventTarget: HTMLElement) => {
    fetch(`${garage}?id=${n}&status=${a}`, { method: 'PATCH' })
        .then((response) => {
            return response.json();
        })
        .then((data: DataForSpeed) => {
            const mainContainer = <HTMLElement>document.querySelector('.main-content');
            const parentImg = mainContainer.querySelectorAll(`.main-content-wrapper`);
            const speed = data.distance / data.velocity / 1000;
            let ourImg: HTMLElement;
            parentImg.forEach((el) => {
                if (Number(el.id) === n) {
                    ourImg = <HTMLElement>el.querySelector('.svg-card');

                    ourImg.classList.add('transform_left1280');
                    ourImg.style.animationDuration = `${speed}s`;
                    ourImg.style.animationPlayState = 'running';
                }
            });

            const eventTargetNextElement = <HTMLElement>eventTarget.nextElementSibling;
            eventTargetNextElement.addEventListener('click', (event: MouseEvent) => {
                const parentImg = mainContainer.querySelectorAll(`.main-content-wrapper`);
                let ourImg: HTMLElement;
                parentImg.forEach((el) => {
                    if (Number(el.id) === n) {
                        ourImg = <HTMLElement>el.querySelector('.svg-card');
                        const winerNane = <HTMLElement>document.querySelector('.winner-name');
                        winerNane.innerHTML = '';
                        ourImg.style.animationPlayState = 'paused';
                        ourImg.classList.remove('transform_left1280');
                        fetch(`http://localhost:3000/engine?id=${n}&status=stopped`, { method: 'PATCH' });
                        eventTarget.removeAttribute('disabled');
                        const ourEventTarget = <HTMLElement>event.target;
                        ourEventTarget.setAttribute('disabled', 'true');
                    }
                });
            });
            fetch(`${garage}?id=${n}&status=drive`, { method: 'PATCH' })
                .then((response) => {
                    return response.json();
                })
                .then(() => {
                    const ourWinnerInStr = <HTMLElement>document.querySelector('.winner-name');
                    if (!ourWinnerInStr.innerHTML) {
                        fetch(`http://localhost:3000/garage/${n}`)
                            .then((response) => {
                                return response.json();
                            })
                            .then((data: DataOnLoadCar) => {
                                const newWinnerInStr1 = <HTMLElement>document.querySelector('.winner-name');
                                newWinnerInStr1.innerHTML = `winner: ${data.name}, id = ${n}, time = ${speed.toFixed(
                                    2
                                )}`;
                            });

                        addNewWiner(String(n), speed);
                    }
                })
                .catch(() => {
                    const parentImg = mainContainer.querySelectorAll(`.main-content-wrapper`);
                    let ourImg: HTMLElement;
                    parentImg.forEach((el) => {
                        if (Number(el.id) === n) {
                            ourImg = <HTMLElement>el.querySelector('.svg-card');
                            ourImg.style.animationPlayState = 'paused';
                        }
                    });
                });
        });
};
