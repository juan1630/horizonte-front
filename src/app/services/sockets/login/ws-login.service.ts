import { Injectable } from '@angular/core';
import { Observable  } from 'rxjs'
import * as io from 'socket.io-client';
import { URLDEV } from 'src/app/config/index.config';
// import { resolve } from 'dns';
// import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class WsLoginService {
  
  public status:boolean = false;
  private socket;
  public audio = new Audio('../../../../assets/sound/chat/mensajes_iphone.mp3');

  constructor()  { 
    
    this.socket = io( URLDEV );
    
    this.checkStatus(); 
  }
  
  checkStatus(){
    this.socket.emit('connect', (usuarios)=> {
      
      
      console.log( usuarios );
      this.status = true;
      
    });
    
    
    this.socket.on('usuarioConectado', { message: 'usuario conectado' } ,(data) => {
      console.log(data);
    });

  }
  
  
  login( usuario ){
    
    this.socket.emit('usuarioConectado', { usuario } );
    
    
    // esta linea nos ayuda con las consultas generales
    // this.enviarConsultas();
    
    
    this.socket.on('event', (data) => {
      console.log( data );
    })

  }
  
  mostarUsuario(){
    this.socket.on('usuarioEnLinea', (data) => {
        console.log(data)
      })
    }

    // prueba de consultas generales
    enviarConsultas(idConsulta){

      this.socket.emit('consultaGeneral',  { consulta: idConsulta }  );
      
    }
    
    public escucharConsulta(){
      
      return Observable.create(
        (observer) => {
          this.socket.on('consultaNueva', (resp) => {
            console.log( resp);
            observer.next( resp );
            });
        }
        )
     
    }
    
    
    public escucharMensajes(){
      

      return Observable.create(
        (observer) => {
          this.socket.on('mensajeLaboratorio', (resp) => {
            console.log( resp );
            observer.next(  resp);
          })
        }
        )

      }

      // este observable escucha a todos los usuarios conectados

      escucahrUsuaurtioConectados(){

        return Observable.create(
          (observer) => {
            this.socket.on('usuarioEnLinea', (resp) => {
              observer.next( resp );
            })
          }
          )
          
        }
        
        
    notificacionAudio(){
      
      this.audio.load();
      this.audio.play();
      
    }
    
    
    escucharMensajesLab(){
      return Observable.create(
        (observer) => {
          this.socket.on('mensajeLab', (resp) => {



            if( !resp.payload.horaEnvio  ){
              this.notificacionAudio();

            }


            console.log("Mensaje lab" ,resp );
            observer.next( resp );
          })
        }
        )
    }
    
    
    desconectarUsuario( user ){
      
      
      this.socket.emit('cerrarSesion', { user });
      
    }
    
    
    escucharUsuarioDesconectado(){
      
      return Observable.create(
        (observer) => {

          this.socket.on('usuarioDesconectado', (resp:any) => {
            observer.next( resp.userDisconect );
          })
        }
        )
      }
      
      
  enviarMensaje( data:any ){

    this.socket.emit('mensaje', { payload: data })
  }

  
  
}
