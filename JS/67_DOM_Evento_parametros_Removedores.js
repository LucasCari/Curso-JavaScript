
/*
 Los eventos son los mecanismos que tenemos en JS para poder controlar las acciones de los usuarios y definir los comprtamientos del documento en cierto momento o cuando se realicen ciertas acciones.  
 */

//Event Handler
 function holaMundo() {
     alert('Hola Mundo');
     //Cuando una funcion es la que desencadena un evento accedemos a él a través de EVENT
     console.log(event)
 }

 function saludar(nombre= 'Desconocid@ ') {
     alert(`Hola ${nombre}`);
 }

 const $eventoSemantico = document.getElementById('evento-semantico'),
    $eventoMultiple = document.getElementById('evento-multiple'),
    $eventoRemover = document.getElementById('evento-remover');

//Fórmula para poder ejecutar un manejador semántico.
//una vez que le asignamos un evento semántico, sólo podra realizar un sólo evento. Es decir que por cada evento solo podemos asignar una función. 
$eventoSemantico.onclick = holaMundo
$eventoSemantico.onclick = (e) =>{
     alert('Hola mundo:: Manejador de Eventos Semántico');
     console.log(e);
     console.log(event); 
}

//al evento no se coloca el prefijo 'on'
$eventoMultiple.addEventListener('click', holaMundo);

$eventoMultiple.addEventListener('click', (e) =>{
    alert('Manejador de Eventos Múltiples');
    console.log(e);
    console.log(e.type);//tipo de evento
    console.log(e.target);//Imprime la linea de HTML que desencadena el evento.
});

//la función manejadora es la arrow function, y es la que tambien desencadenará la función saludar, la cual debe llevar el activador () para que funcione. 
$eventoMultiple.addEventListener('click', ()=>{
    saludar();
    saludar('Lucas');
    });

    //Si necesitamos pasarle parametros a una función manejadora, debemos envolver dichos paramentos en una funcion anónima o una arrow function y luego ejecutarla con el escuchador.

//REMOVEMOS EVENTOS (solo funciona con las funciones multiples.)
const removerDobleClick = (e)=>{
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener('dblclick', removerDobleClick);
    $eventoRemover.disabled = true;
}

$eventoRemover.addEventListener('dblclick', removerDobleClick);

