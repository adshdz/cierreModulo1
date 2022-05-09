
const autos = require('./autos.js');

// cierre del modulo     

var persona = {
    nombre:"juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 10
}

let concesionaria = {
    autos: autos,
    buscarAuto:  function(patente){
       for (let i = 0; i < autos.length; i++){
          if (autos[i].patente === patente){
             return autos[i];
          }
          else if ((i + 1) == autos.length){
             return null;
          }
       }
    },
    venderAuto: function(patente){
       let auto = this.buscarAuto(patente)
          if(auto != null){
             auto.vendido=true;
       }
    },
     autosParaLaVenta: function(autos){
       let paLaVenta = this.autos.filter(function(autos){
          return (autos.vendido === false);
       })
       return paLaVenta;
    } ,
 autosNuevos: function(autos){
        let disponibles = this.autosParaLaVenta(autos);
         let nuevos = disponibles.filter(function(autos){
        return (autos.km<100);
         })
         return nuevos;
     },
     listaDeVentas : function(){
       let vendidos = this.autos.filter(function(autos){
         return (autos.vendido === true);});
           let listaVentas = vendidos.map(function(elem){
               return elem.precio;
                     });
       return listaVentas;},
       totalDeVentas:function(){
    let ventasDetalle = this.listaDeVentas()
    if (ventasDetalle.length !== 0) {ventas = this.listaDeVentas().reduce(function(acum,num){
       return acum + num
    })} else {
       ventas = 0
    }
    return ventas
     },
     puedeComprar: function (auto, persona) {
         if ((persona.capacidadDePagoTotal >= auto.precio) && (persona.capacidadDePagoEnCuotas >= (auto.precio/auto.cuotas))
        ) {
            return true
            }  else {
       return false
    }
       },
 autosQuePuedeComprar: function (persona) {
     let autosDisponibles = this.autosParaLaVenta() ;
     let autosParaComprar = autosDisponibles.filter(function (autos) {
         return (concesionaria.puedeComprar(autos, persona) === true )
     })
     return autosParaComprar
 },
 }