export interface CarritoLaboratorios {

    totalCon: number;
    totalSin: number;
    items: Items[];

}



export interface Items {
    entrega: string;
    idEstudio: string;
    nombreEstudio: string;
    precioSin?: number;
    precioCon?: number;
    precioNoche?: number;
    precioUrgeniciaPublico: number;
    precioUrgenciaMembresia: number;

}