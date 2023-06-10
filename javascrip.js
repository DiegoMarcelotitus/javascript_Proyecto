inicio_sistema();
eventos_sistema()


class Prestamo{

    constructor( monto,cuotas,nombre){

        this.nombre = nombre;
        this.monto = Number.parseInt(monto);
        this.cuotas = cuotas;
        this.monto_final = 0; 

    }


    calcular_cuotas(){
        
        let interes = 0;

        if(this.cuotas == 1 ){
           interes= this.monto * 0.10;
            this.monto_final = this.monto  + interes;
        }
        else if( this.cuotas == 3){
           interes= this.monto * 0.35;
            this.monto_final = this.monto / 3 + interes;
        }
        else if( this.cuotas == 6){
            interes=this.monto * 0.60;
            this.monto_final = this.monto /6 + interes;
        }
        else if( this.cuotas == 12){
           interes= this.monto * 100;
            this.monto_final = this.monto /12 + interes;
            
        }

    }

    
    get_datos(){

        console.log("<-- Prestamo titus -->");
        console.log("Titular: ", this.nombre);
        console.log("Monto: ", this.monto);
        console.log("Cuotas: ", this.cuotas);
        console.log("Pagarias en : ",this.cuotas,"cuotas de ", this.monto_final);
        console.log("");

    }
    get_resultado(){
        return this.monto_final;
    }
    

}


function filtrar_prestamos( prestamo){
    
    return prestamo.nombre == nombre
}
///aca renderiza los elementos de pantalla
function inicio_sistema(){
    document.getElementById('app').innerHTML+= `<h1>Bienvenidos Prestamos Titus</h1>`;
    document.getElementById('app').innerHTML+= `<p>Ingresar un Monto</p>`;
    document.getElementById('app').innerHTML+= `<input id="Monto">`;
    document.getElementById('app').innerHTML+= `<p>Ingresar Cantidad de Cuota</p>`;
    document.getElementById('app').innerHTML+= `<input id="Cuotas">`;
    document.getElementById('app').innerHTML+='<p>Ingrese su Nombre</p>';
    document.getElementById('app').innerHTML+= `<input id="Nombre">`;
    document.getElementById('app').innerHTML+= `<p>Monto total</p>`;
    document.getElementById('app').innerHTML+= `<input  placeholder="INGRESE UN VALORES PARA MOSTRAR UN RESULTADO OK" disabled=true id="monto_final">`;

    document.getElementById('app').innerHTML+='<button  id="btn"> Calcular </button>';

    
 }
 function eventos_sistema(){

    document.getElementById('btn').addEventListener('click',()=>{
     // traigo el valor de el html 
    let monto_del_html= document.getElementById("Monto").value;
    let cuotas_del_html= document.getElementById("Cuotas").value;
    let nombre_del_html= document.getElementById("Nombre").value;
    let monto_final_html= document.getElementById("monto_final").value;
     if((!Number.parseInt(cuotas_del_html)>0)&& (!Number.parseInt(monto_del_html>0))){ 

        alert('no pusiste monto');
        alert('no pusiste cantidad de cuotas');
        return;
    
     }
    
      let programa = new Prestamo(monto_del_html,cuotas_del_html,nombre_del_html,monto_final_html); 
      programa.calcular_cuotas();
      programa.get_datos();
        document.getElementById("monto_final").value=programa.get_resultado();
    });
  }







