import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import * as moment from 'moment';

import { WsLoginService } from 'src/app/services/sockets/login/ws-login.service';
import { getDataStorage } from '../../../functions/storage/storage.funcion';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @Output() public cerrarChat = new EventEmitter<any>();
 // @Input() public roleNotificacion   : string ;

  public mesages = [];

  public horaEnvio = moment().format('h:mm:ss');
  public usuario = {
    RFC: "",
    curp: "",
    fechaREgistro: "",
    img: "",
    nombre: "",
    password:"" ,
    role: "",
    turno:"" ,
    __v: 0,
    _id: ""
  }
  
  public payload = {
    message: '',
    horaEnvio: this.horaEnvio
  };
  
  message = '';
  
  public usuarioConectados = [];
  
  
  
  constructor(
    private wsloginService: WsLoginService
    ) { }
    
    ngOnInit(): void {
      
      this.usuario = getDataStorage();

      this.obtenerMensajes();
      

      
      // this.wsloginService.escucharMensajesLab()
      // .subscribe( (message) => {
      //   console.log(  message);
        
      //   this.mesages.push( message.payload );
        
      // });


      // escucahmos el mensaje de los usuarios
    this.wsloginService.escucahrUsuaurtioConectados()
    .subscribe( (arg) => {


      console.log('entro aqui')

      console.log( arg  );

      this.usuarioConectados = arg 
      console.log( this.usuarioConectados  );

    });


    
    
    // escuchamos si algun usuario se desconecta

    this.wsloginService.escucharUsuarioDesconectado()
    
    .subscribe( (arg) =>  {
      
      
      
      this.usuarioConectados.forEach(  (user:any, index) => {
        
        if(  user.usuario._id === arg.user._id  ){
          
          
          this.usuarioConectados.splice(index, 1);
        }
        
        
      })
      
      console.log(this.usuarioConectados);
      
       });

       

       
      }
      
      
      obtenerMensajes() {

        this.wsloginService.escucahrNuevoMensajes()
          .subscribe(arg => {


            console.log(arg);

            this.mesages = arg;

          } ) ;
        
      }
      
      // enviarMensaje() {
        //   this.wsloginService.enviarMensajePrivado( this.mesages );

        // }
        
        

        enviarData(){
          
      // this.wsloginService.enviarMensaje( this.payload );
      // this.payload.message = '';
   
      this.obtenerMensajes();
      this.wsloginService.enviarMensaje(this.message);

  }


  cerrarVentanachat(){


      this.cerrarChat.emit({ estado: true  });

  }


  
  verUsaurio(  user ){

   
    this.obtenerMensajes()
    this.wsloginService.regresarUsuaurios(  user );
  } 


}
