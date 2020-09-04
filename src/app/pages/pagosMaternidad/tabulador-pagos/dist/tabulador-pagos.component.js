"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TabuladorPagosComponent = void 0;
var core_1 = require("@angular/core");
var sweetAlert_1 = require("sweetAlert");
var moment = require("moment");
var TabuladorPagosComponent = /** @class */ (function () {
    function TabuladorPagosComponent(route, maternidadSevice) {
        this.route = route;
        this.maternidadSevice = maternidadSevice;
        this.pagosDB = [];
        this.acumulado = 0;
        this.pago = {
            concepto: '',
            cantidad: '',
            atendio: '',
            fecha: ''
        };
    }
    TabuladorPagosComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
        this.usuarioMaquina = JSON.parse(localStorage.getItem('usuario'));
    };
    TabuladorPagosComponent.prototype.verPagos = function () {
        var _this = this;
        this.maternidadSevice.verPagos(this.id)
            .subscribe(function (data) {
            _this.acumulado = 0;
            _this.pagosDB = data.data.pagos;
            _this.anticipo = data.data.aticipo;
            _this.pagosDB.forEach(function (pagos) {
                if (pagos.cantidad == null || pagos.cantidad == '' || pagos.cantidad == undefined) {
                    console.log(pagos.cantidad);
                    return;
                }
                _this.acumulado += parseFloat(pagos.cantidad);
                if (_this.acumulado === 13500) {
                    return;
                }
            });
            console.log(_this.acumulado);
        });
    };
    TabuladorPagosComponent.prototype.registrarPago = function (pagosForm) {
        var _this = this;
        this.pago.atendio = this.usuarioMaquina.nombre;
        this.pago.fecha = moment().format('MMMM Do YYYY, h:mm:ss a');
        console.log(pagosForm);
        if (this.pago.cantidad === null || this.pago.cantidad == undefined || this.pago.cantidad === '' || parseFloat(this.pago.cantidad) < 0) {
            alert('Pago no valido, ingresa un monto valido');
            this.pago.cantidad = '';
            return;
        }
        if (this.pago.concepto.length < 5) {
            alert('Ingresa un concepto valido');
            return;
        }
        this.maternidadSevice.addPago(this.pago, this.id)
            .subscribe(function (data) {
            if (data.ok) {
                sweetAlert_1["default"]('Pago agregado', 'succcess', 'succcess');
                _this.verPagos();
                _this.pago.cantidad = '';
                _this.pago.concepto = '';
                pagosForm.reset();
                return;
            }
        });
    };
    TabuladorPagosComponent = __decorate([
        core_1.Component({
            selector: 'app-tabulador-pagos',
            templateUrl: './tabulador-pagos.component.html',
            styleUrls: ['./tabulador-pagos.component.scss']
        })
    ], TabuladorPagosComponent);
    return TabuladorPagosComponent;
}());
exports.TabuladorPagosComponent = TabuladorPagosComponent;
