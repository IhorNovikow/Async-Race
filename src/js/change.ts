import { upCarOnServ } from './upCarsOnServ';

export function ChangeCar() {
    const mainContent = <HTMLElement>document.querySelector('.main-content');
    mainContent.addEventListener('click', (event) => {
        const eventTarget = <HTMLElement>event.target;
        if (eventTarget.classList.contains('main-select')) {
            const updateNameCar = <HTMLInputElement>document.querySelector('.update-name-car');
            const colorVpdate = <HTMLInputElement>document.querySelector('.color-update');
            const update = <HTMLElement>document.querySelector('.update');

            update.removeEventListener('click', ClickChangeCar);
            let newNam1 = <HTMLElement>eventTarget.parentNode;
            newNam1 = <HTMLElement>newNam1.nextElementSibling;
            const newNam = newNam1.innerHTML;
            updateNameCar.value = newNam;
            let newColor1 = <HTMLElement>eventTarget.parentNode;
            newColor1 = <HTMLElement>newColor1.parentNode;
            newColor1 = <HTMLElement>newColor1.parentNode;
            newColor1 = <HTMLElement>newColor1.nextElementSibling;
            newColor1 = <HTMLElement>newColor1.firstElementChild;
            const newColor = <string>newColor1.getAttribute('fill');
            colorVpdate.value = newColor;

            function ClickChangeCar() {
                const colorVpdate = <HTMLInputElement>document.querySelector('.color-update');
                let idElement1 = <HTMLElement>eventTarget.parentNode;
                idElement1 = <HTMLElement>idElement1.parentNode;
                idElement1 = <HTMLElement>idElement1.parentNode;
                idElement1 = <HTMLElement>idElement1.parentNode;
                const idElement = idElement1.id;
                let newNameCar1 = <HTMLElement>eventTarget.parentNode;
                newNameCar1 = <HTMLElement>newNameCar1.nextElementSibling;
                newNameCar1.innerHTML = updateNameCar.value;
                let newColorCar1 = <HTMLElement>eventTarget.parentNode;
                newColorCar1 = <HTMLElement>newColorCar1.parentNode;
                newColorCar1 = <HTMLElement>newColorCar1.parentNode;
                newColorCar1 = <HTMLElement>newColorCar1.nextElementSibling;
                newColorCar1 = <HTMLElement>newColorCar1.firstElementChild;
                newColorCar1.setAttribute('fill', colorVpdate.value);
                upCarOnServ(idElement, { name: updateNameCar.value, color: colorVpdate.value });
                updateNameCar.value = '';
                colorVpdate.value = '#FFFFFF';
                update.removeEventListener('click', ClickChangeCar);
            }
            update.addEventListener('click', ClickChangeCar);
        }
    });
}
ChangeCar();
