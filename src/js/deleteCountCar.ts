export function deleteCounter() {
    const count = <HTMLElement>document.querySelector('.counter');
    count.innerHTML = String(+count.innerHTML - 1);
}
