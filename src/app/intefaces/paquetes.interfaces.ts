export class Paquetes {
    constructor(
        
        public nombrePaquete: string,
        public costoTotal: Number,
        public consultas?: string,
        public icon?:  string,
        public farmacia?: string,
        public rayosX?: string,
        public descuentos? : string,
        public extras?: string,
        public ultrasonidos?: string,
        public examenesLaboratorio?: string[],
        public CitasIncluidas?: string[],
        public consultasGinecologia?: Number  
        
        ) {
       
    }
}