export interface PedidosVistaLab {
    ok:      boolean;
    message: string;
    pedido:  Pedido;
}


export interface Pedido {
    estadoPedido: string;
    estudios:     Estudio[];
    _id:          string;
    nombre:       string;
    edad:         number;
    sexo:         string;
    total:        number;
    __v:          number;
}

export interface Estudio {
    nombreEstudio: string;
    precioSin:     string;
    precioCon:     string;
    entrega:       string;
    idEstudio:     string;
}
