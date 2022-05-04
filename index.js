
const autos = require('./autos.js');

// cierre del modulo     

var persona = {
    nombre:"juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 1000
}

let concesionaria = {
  
   autos: autos,
   persona: persona,
   buscarAuto: function(parm){
    let encontrarAuto = autos.filter(function(e){
        return e.patente == parm;
            });
        
            return encontrarAuto == ![]?null:encontrarAuto;
        },
  
   venderAuto: function(param){
   return this.buscarAuto(param).vendido == true;
      },
      autosParaLaVenta: function(){
      let autosDisponibles = autos.filter(function(element){
         return element.vendido == false;
      });
      return autosDisponibles;
      },
      autosNuevos: function(){
        return this.autosParaLaVenta().filter(function(element){
         return element.km <= 100;
      });
       },
       listaDeVentas : function(){
           let listaPrecios = autos.map(function(elem){
               return elem.precio;
           })
       return listaPrecios;
        },

        totalDeVentas: function(){
            return this.listaDeVentas().reduce(function(acum, elemento){
                return acum + elemento;
            })
        },

        puedeComprar: function(persona1, carro1){
        return  persona1.capacidadDePagoTotal>= carro1.precio?true:false
        },
        autosQuePuedeComprar: function(){
            let autosPosibilidaCompra =[]
                let valorPagar = persona.capacidadDePagoTotal;
                let nuevoArray2 = autos.filter(function(e){
                    return e.precio <= valorPagar;
                });
        
                return nuevoArray2;
        },}


console.log(concesionaria.autosQuePuedeComprar());
