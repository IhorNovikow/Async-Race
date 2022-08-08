export function addCountCar(): void {
    const count = <HTMLElement>document.querySelector('.counter');
    count.innerHTML = String(+count.innerHTML + 1);
}
