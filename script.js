
function alerta(){
    var Encendido = 0;    
    if(Encendido >= 1){
        Swal.fire({
            icon: 'success',
            title: 'Estado',
            text: 'Se encuentra encendido',
          })
    }

    if(Encendido <= 0){
        Swal.fire({
            icon: 'error',
            title: 'Estado',
            text: 'Se encuentra apagado',
          })
   }
}

function comida(){

    var Comida = 0;

    if(Comida >= 1){
        Swal.fire({
            icon: 'success',
            title: 'Estado',
            text: 'Comida suficiente',
          })
    }

    if(Comida <= 0){
        Swal.fire({
            icon: 'error',
            title: 'Estado',
            text: 'Necesita rellenarse',
          })
   }

}

function vigilar(){

    var Vigilar = 0;

    if(Vigilar >= 1){
        Swal.fire({
            icon: 'success',
            title: 'Estado',
            text: 'sin intrusiones',
          })
    }

    if(Vigilar <= 0){
        Swal.fire({
            icon: 'error',
            title: 'Estado',
            text: 'Intruso detectado',
          })
   }

}
