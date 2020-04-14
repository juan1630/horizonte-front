export class Direcciones {

    constructor( public  error: boolean,
                  public code_error: number,
                  public error_message: string,
                  public response: {
                      cp: number,
                      asentamiento: string[],
                      tipo_asentamiento: string,
                      municipio: string,
                      estado: string,
                      ciudad: string,
                      pais: string }
                    ) {
                      // fin del constructor
              }
  
  }
  