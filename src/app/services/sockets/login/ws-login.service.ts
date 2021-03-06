import { Injectable } from '@angular/core';
import { Observable  } from 'rxjs'
import { ObserveOnOperator } from 'rxjs/internal/operators/observeOn';
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
  roleUser: any;
  room: any;

  constructor()  {

    this.socket = io( URLDEV );

    // this.checkStatus();
  }

  checkStatus( usuarios ){
    // console.log(usuarios);
    this.socket.emit('connect', (usuarios)=> {

      this.status = true;

    });
    // this.socket.on('usuarioConectado', { message: 'usuario conectado' } ,(data) => {
    //   return data;
    // });

    // this.socket.emit('usuarioConectado', { usuarios } );
  }


  login( usuario ){

    this._idUser = usuario._id;
    this.roleUser = usuario.role;
    this.socket.emit('usuarioConectado', {Id: this._idUser, role: this.roleUser});


    // esta linea nos ayuda con las consultas generales
    // this.enviarConsultas();


    this.socket.on('event', (data) => {
      // console.log( data );
    })

  }

  mostarUsuario(){
    this.socket.on('usuarioEnLinea', (data) => {
        // console.log(data)
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
            // console.log( resp);
            observer.next( resp );
            });
        });
    }


    public escucharMensajes(){

      this.socket.on('MsgLaboratorio', response => {

      });

      return Observable.create(
        (observer) => {
          this.socket.on('mensajeLaboratorio', (resp) => {
            // console.log( resp );
            observer.next(  resp);
          })
        }
        )

      }

      // este observable escucha a todos los usuarios conectados

      escucahrUsuaurtioConectados(){


        return  Observable.create(

          (observer) => {

            this.socket.on('usuarioEnLinea', (resp) => {

              // console.log( resp );

                observer.next( resp );


            })
          })

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


    desconectarUsuario( role ){

        console.log(role);

      this.socket.emit('cerrarSesion', { role });
      this.socket.emit('disconnect', function () {
        console.log('desconectado')
      })

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



      escucahrNuevoMensajes() {


        console.log("entro aca");

        return Observable.create(
          (observable) => {
            this.socket.on('crearMensaje', (data) => {
              observable.next( data  );

            })
          }
        )
      }


  enviarMensaje(data){
     var chat = this.roleUser + "_" + this._idUser2;
    //this.socket.emit('entrarChatPrivado',{mensaje:data, room:chat, role1:this.roleUser, role2:this._idUser2 });

    this.socket.emit('enviarMensajePrivado', {  mensaje:data, room:this.room, role1:this.roleUser, role2:this._idUser2 })


  }


  // enviarMensajePrivado(data) {

  //   var chat = this._idUser + "_" + this._idUser2;
  //   this.socket.emit('entrarChatPrivado',{
  //   mensaje:data, room:chat, role1:this._idUser, role2:this._idUser2 });


  // }

  regresarUsuaurios( user  ){
    this._idUser2 = user;
    var _arrayP = [];
    _arrayP.push(this.roleUser)
    _arrayP.push(this._idUser2)
    this.room = _arrayP.sort().join('_');
    //var chat = this.roleUser + "_" + this._idUser2;
    this.socket.emit('regresarId', { user  } );

    this.socket.emit('entrarChatPrivado',{room:this.room, role1:this.roleUser, role2:this._idUser2 });

  }


}
