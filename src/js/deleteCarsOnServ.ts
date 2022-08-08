const base = 'http://localhost:3000';

const garage = `${base}/garage`;

export function deleteCarOnServ(id: string) {
    fetch(`${garage}/${id}`, { method: 'DELETE' });
}
