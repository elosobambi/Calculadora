class Calculadora {
    constructor(operadorDataAnteriorTexto, operadorDataActualTexto) {
        this.operadorDataAnteriorTexto = operadorDataAnteriorTexto;
        this.operadorDataActualTexto = operadorDataActualTexto;
        console.clear();
    }


    limpiarAll(){
        this.operadorActual ='';
        this.operadorAnterior ='';
        this.operacion = undefined;
    }

    borrarSimple(){
    }

    elegirNumeros(numero){
        if(numero === '.' && this.operadorActual.includes('.')) return
        if(this.operadorActual === undefined){
            this.operadorActual = ' ';
        }
            this.operadorActual = this.operadorActual.toString() + numero.toString(); 
        }

    igual(){

    }

    elegirOperaciones(){

    }

    actualizarPantalla(){
        this.operadorDataActualTexto.innerText = this.operadorActual

    }
  
}

const operadorDataAnteriorTexto = document.querySelector('[data-anterior-operador]');
const operadorDataActualTexto = document.querySelector('[data-actual-operador]');
const botonesNumeros = document.querySelectorAll('[data-numero]');
const botonesOperadores = document.querySelectorAll('[data-operacion]');
const botonIgual = document.querySelector('[data-igual]');
const botonBorrarTodo = document.querySelector(['data-borrar-todo']);
const botonBorrarSimple = document.querySelector(['data-borrar-simple']);

const calculadora = new Calculadora (operadorDataAnteriorTexto, operadorDataActualTexto)

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () =>{
        calculadora.elegirNumeros(boton.innerText)
        calculadora.actualizarPantalla()
    })
});

