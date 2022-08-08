export function CreateElement(element: string, _class: string): HTMLElement {
    const c = <HTMLElement>document.createElement(`${element}`);
    c.classList.add(`${_class}`);
    return c;
}
