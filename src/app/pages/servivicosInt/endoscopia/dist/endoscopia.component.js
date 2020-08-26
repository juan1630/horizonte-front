"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EndoscopiaComponent = void 0;
var core_1 = require("@angular/core");
var endoscopia_service_1 = require("src/app/services/endoscopia/endoscopia.service");
var storage_funcion_1 = require("../../../functions/storage/storage.funcion");
var sweetAlert_1 = require("sweetAlert");
var EndoscopiaComponent = /** @class */ (function () {
    function EndoscopiaComponent(_endoscopiaService, _router, _emailService, _route) {
        this._endoscopiaService = _endoscopiaService;
        this._router = _router;
        this._emailService = _emailService;
        this._route = _route;
        this.show = 'hidden';
        this.carrito = {
            totalSin: 0,
            totalCon: 0,
            items: []
        };
    }
    EndoscopiaComponent.prototype.ngOnInit = function () {
        this.role = storage_funcion_1.getDataStorage().role;
        this.carrito = storage_funcion_1.getDataCarrito();
        this.verDatos();
    };
    EndoscopiaComponent.prototype.verDatos = function () {
        var _this = this;
        this._endoscopiaService.getEstudiosEndoscopia().subscribe(function (res) {
            _this.endoscopiaSI = res.endoscopia;
        }, function (err) {
            console.log(err);
        });
    };
    EndoscopiaComponent.prototype["delete"] = function (id) {
        var _this = this;
        this._endoscopiaService["delete"](id).subscribe(function (response) {
            sweetAlert_1["default"]("Registro Eliminado", "Este restro no se podrá ver más", "error");
            _this.verDatos();
            _this._router.navigateByUrl('/endoscopia');
        }, function (error) {
            console.log(error);
        });
    };
    // enviamos la cotizacion por el correo
    EndoscopiaComponent.prototype.enviar = function () {
        var _this = this;
        var cotizacion = {
            correo: this.email,
            carrito: this.carrito
        };
        this._emailService.envioEmail(cotizacion)
            .subscribe(function (data) {
            console.log(data);
            if (data.ok) {
                sweetAlert_1["default"]('cotización enviada', 'se envio exitosamente', 'success');
                _this.show = 'hidden';
            }
        });
    };
    EndoscopiaComponent.prototype.cerrarModal = function () {
        this.show = 'hidden';
    };
    EndoscopiaComponent.prototype.abrirInputCorreo = function () {
        this.show = 'show';
    };
    // FUNCION QUE SACA EL TOTAL SIN MEMBRESIA
    EndoscopiaComponent.prototype.sumarTotal = function (precioSin, precioCon) {
        // se le quitan los caracteres $ y , al precio con membresia
        var precioConMembresia = precioCon.replace('$', '');
        var precioConSinComa = precioConMembresia.replace(',', '');
        var precioConMembresiaNumber = parseFloat(precioConSinComa);
        // se le quitan los caracteres $ y , al precio sin membresia
        var costoSin = precioSin.replace('$', '');
        var costoSinComa = costoSin.replace(',', '');
        var costoSinNumber = parseFloat(costoSinComa);
        this.carrito.totalSin = this.carrito.totalSin + costoSinNumber;
        this.carrito.totalCon = this.carrito.totalCon + precioConMembresiaNumber;
    };
    // FUNCION QUE AGREGA AL CARRITO UN ELEMENTO NUEVO
    EndoscopiaComponent.prototype.agregarCarrito = function (event, item) {
        console.log(item);
        if (event.path[1].classList.contains('precioPublico')) {
            var estuidio = {
                nombreEstudio: item.ESTUDIO,
                precioSin: item.PRECIO_PUBLICO,
                precioCon: item.PRECIO_MEMBRESIA,
                idEstudio: item._id
            };
            this.sumarTotal(item.PRECIO_PUBLICO, item.PRECIO_MEMBRESIA);
            this.carrito.items.push(estuidio);
        }
        // else if (  event.path[1].classList.contains('precioNoche') )  {
        //   let  estuidio = {
        //     nombreEstudio: item.ESTUDIO,
        //     precioNoche: item.NOCTURNO,
        //     entrega: item.ENTREGA,
        //     idEstudio:item._id
        // }
        // this.sumarTotal( item.NOCTURNO, item.NOCTURNO );
        // this.carrito.items.push( estuidio );
        // }
        else if (event.path[1].classList.contains('precioPublicoUrgencia')) {
            var estuidio = {
                nombreEstudio: item.ESTUDIO,
                precioSin: item.PRECIO_PUBLICO_URGENCIA,
                precioCon: item.PRECIO_MEMBRESIA_URGENCIA,
                departamento: item.name,
                idEstudio: item._id
            };
            this.sumarTotal(item.PRECIO_PUBLICO_URGENCIA, item.PRECIO_MEMBRESIA_URGENCIA);
            this.carrito.items.push(estuidio);
        }
        else if (event.path[1].classList.contains('precioPublicoHospitalizacion')) {
            var estuidio = {
                nombreEstudio: item.ESTUDIO,
                precioSin: item.PRECIO_PUBLICO_HOSPITALIZACION,
                precioCon: item.PRECIO_MEMBRESIA_HOSPITALIZACION,
                departamento: item.name,
                idEstudio: item._id
            };
            this.sumarTotal(item.PRECIO_PUBLICO_HOSPITALIZACION, item.PRECIO_MEMBRESIA_HOSPITALIZACION);
            this.carrito.items.push(estuidio);
        }
        else if (event.path[1].classList.contains('precioPublicoHospitalizacionUrgencia')) {
            var estuidio = {
                nombreEstudio: item.ESTUDIO,
                precioSin: item.PRECIO_PUBLICO_HOSPITALIZACION_URGENCIA,
                precioCon: item.PRECIO_HOSPITALIZACION_URGENCIA_MEMBRESIA,
                departamento: item.name,
                idEstudio: item._id
            };
            this.sumarTotal(item.PRECIO_PUBLICO_HOSPITALIZACION_URGENCIA, item.PRECIO_HOSPITALIZACION_URGENCIA_MEMBRESIA);
            this.carrito.items.push(estuidio);
        }
        var carritoString = JSON.stringify(this.carrito);
        storage_funcion_1.gaurdarCotizacion(carritoString);
        this.carrito = storage_funcion_1.getDataCarrito();
        console.log(this.carrito);
    };
    //Aca termina la funcion de agregar los items al carrito
    EndoscopiaComponent.prototype.restarTotal = function (precioSin, precioCon) {
        var precioSinTrim = precioSin.replace('$', '');
        var precioSinComa = precioSinTrim.replace(',', '');
        // aca le quito la coma si es que trae
        var precioSinMembresiaNumber = parseFloat(precioSinComa);
        var precioConTirm = precioCon.replace('$', '');
        var precioConMembresiaSinComa = precioConTirm.replace(',', '');
        // aca le quito la coma si es que la trae
        var precioConMembresiaNumber = parseFloat(precioConMembresiaSinComa);
        this.carrito.totalCon = this.carrito.totalCon - precioConMembresiaNumber;
        this.carrito.totalSin = this.carrito.totalSin - precioSinMembresiaNumber;
    };
    EndoscopiaComponent.prototype.eliminar = function (id) {
        var _this = this;
        this.carrito.items.forEach(function (item, index) {
            // Agregar algun otro caso que se pueda dar  
            if (item.idEstudio === id) {
                _this.carrito.items.splice(index, 1);
                if (item.precioSin && item.precioCon) {
                    _this.restarTotal(item.precioSin, item.precioCon);
                }
                else if (item.precioNoche) {
                    _this.restarTotal(item.precioNoche, item.precioNoche);
                }
            }
        });
        var carritoString = JSON.stringify(this.carrito);
        storage_funcion_1.gaurdarCotizacion(carritoString);
    };
    EndoscopiaComponent.prototype.verComparacio = function (publico, membresia) {
        var ahorro = 0;
        var publicoTrim = publico.replace('$', '');
        var membresiaTrim = membresia.replace('$', '');
        var publicoTrims = publicoTrim.replace(',', '');
        var membresiaTrims = membresiaTrim.replace(',', '');
        var publicoNumber = parseFloat(publicoTrims);
        var membresiaNumber = parseFloat(membresiaTrims);
        ahorro = publicoNumber - membresiaNumber;
        sweetAlert_1["default"]({
            icon: "success",
            title: "Ahorro: " + ahorro,
            text: "Sin membresia: " + publico + " - Con membresia: " + membresia
        });
    };
    EndoscopiaComponent = __decorate([
        core_1.Component({
            selector: 'app-endoscopia',
            templateUrl: './endoscopia.component.html',
            styleUrls: ['./endoscopia.component.scss'],
            providers: [endoscopia_service_1.EndoscopiaService]
        })
    ], EndoscopiaComponent);
    return EndoscopiaComponent;
}());
exports.EndoscopiaComponent = EndoscopiaComponent;
