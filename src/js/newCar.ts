import { addCountCar } from './addCountCar';
import { createCarOnServ } from './createCarOnServ';

const buttonCreate = <HTMLElement>document.querySelector('.create');

buttonCreate.addEventListener('click', () => {
    const nameCar = <HTMLInputElement>document.querySelector('.name-car');
    const colorCreate = <HTMLInputElement>document.querySelector('.color-create');

    createCarOnServ({ name: nameCar.value, color: colorCreate.value });

    nameCar.value = '';
    colorCreate.value = '#FFFFFF';
    addCountCar();
});
