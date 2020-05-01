export class Ambulancia {
    constructor(
        public _id: string,
        public destino: string,
        public precioDia: string,
        public precioRedondoDia: string,
        public precioNoche: string,
        public precioRedondoNoche: string,
    ){}
}