
/*
 Los eventos son los mecanismos que tenemos en JS para poder controlar las acciones de los usuarios y definir los comprtamientos del documento en cierto momento o cuando se realicen ciertas acciones.  
 */

//Event Handler
 function holaMundo() {
     alert('Hola Mundo');
     //Cuando una funcion es la que desencadena un evento accedemos a él a través de EVENT
     console.log(event)
 }

 const $eventoSemantico = document.getElementById('evento-semantico'),
    $evenoMultiple = document.getElementById('evento-multiple');

//Fórmula para poder ejecutar un manejador semántico.
//una vez que le asignamos un evento semántico, sólo podra realizar un sólo evento. Es decir que por cada evento solo podemos asignar una función. 
$eventoSemantico.onclick = holaMundo
$eventoSemantico.onclick = (e) =>{
     alert('Hola mundo:: Manejador de Eventos Semántico');
     console.log(e);
     console.log(event); 
}

//al evento no se coloca el prefijo 'on'
$evenoMultiple.addEventListener('click', holaMundo);

$evenoMultiple.addEventListener('click', (e) =>{
    alert('Manejador de Eventos Múltiples');
    console.log(e);
    console.log(e.type);//tipo de evento
    console.log(e.target);//Imprime la linea de HTML que desencadena el evento.
});