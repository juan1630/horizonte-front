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
  private _idUser;
  public audio = new Audio('../../../../assets/sound/chat/mensajes_iphone.mp3');
  private _idUser2: any;

  constructor()  {

    this.socket = io( URLDEV );

    // this.checkStatus();
  }

  checkStatus( usuarios ){
    console.log(usuarios);
    this.socket.emit('connect', (usuarios)=> {

      this.status = true;

    });
    // this.socket.on('usuarioConectado', { message: 'usuario conectado' } ,(data) => {
    //   return data;
    // });

    // this.socket.emit('usuarioConectado', { usuarios } );
  }


  login( usuario ){

    this._idUser = usuario.role;
    this.socket.emit('usuarioConectado',  usuario );


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

      this.socket.on('MsgLaboratorio', response => {

      });

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
          this.socket.emit('mensajeLab', (resp) => {



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


  enviarMensaje(data){
     var chat = this._idUser + "_" + this._idUser2;
    this.socket.emit('entrarChatPrivado',{
    mensaje:data, room:chat, role1:this._idUser, role2:this._idUser2 });
  }



  regresarUsuaurios( user  ){
    this._idUser2 = user;
    var chat = this._idUser + "_" + this._idUser2;
    this.socket.emit('regresarId', { user  } );

    this.socket.emit('entrarChatPrivado',{room:chat, role1:this._idUser, role2:this._idUser2 });

  }


}
