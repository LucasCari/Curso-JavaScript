//Con create elemente cramos nuevas etiquetas las cuales no están utilizadas en el arbol del DOM sino que están solo creadas.
const $figure = document.createElement('figure'),
    $img = document.createElement('img'),
    $figcaption = document.createElement('figcaption'),
    $figcaptionText = document.createTextNode('Animals'),
    $cards = document.querySelector('.cards'),
    $figure2 = document.createElement('figure');



//Appenchild - nos pemite agregar hijos al nodo que deseemos. 
//agrego los atributos a la imagen. 
$img.setAttribute('src', 'https://placeimg.com/200/200/animals');
$img.setAttribute('alt', 'Animals');

//Agrego el texto al figcaption
$figcaption.appendChild($figcaptionText);

//Agregamos img y figcaption a la figura.
$figure.appendChild($img);
$figure.appendChild($figcaption);
$figure.classList.add("card");

//Agregagos una figura a la section cards
$cards.appendChild($figure);

//Otra forma no tan correcta de hacerlo
$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>Peolple</figcaption>
`;

$figure2.classList.add('card');
$cards.appendChild($figure2);

//ESTACIONES DEL AÑO
//Creamos un arreglo, con las estaciones. 
const estaciones = ['Primavera', 'Verano','Otoño', 'Invierno'],
//creamos una ul 
    $ul = document.createElement('ul');

document.write('<h3>Estaciones del Año</h3>');
//agregamos al body la ul
document.body.appendChild($ul);

//Reecorremos el arreglo, lo separamos y por cada el(elemento) imprimimos su valor en un nuevo li.
estaciones.forEach(el => {
    const $li = document.createElement('li');
    $li.textContent = el;
    //agregamos al UL los li que separamos con forEach.
    $ul.appendChild($li);
});

//INNER HTML:: a diferencia del metodo anterior aqui solo escribimos en el HTML, no estamos creando un nodo nuevo. 

const continentes = ['Africa', 'America', 'Asia', 'Europa', 'Oceanía'],
    $ul2 = document.createElement('ul');

document.write('<h3>Continentes del mundo</h3>');
document.body.appendChild($ul2);

//para poder realizarlo correctamente debemos inicializar la propiedad innetHTML como nula. 
$ul2.innerHTML = '';
//Por cada elemento de la lista, al innerHTML le sumamos el valor que obtenemos del recorrido forEach
continentes.forEach((el) => ($ul2.innerHTML +=`<li>${el}</li>` ));

//OPTIMIZAMOS EL RENDIMIENTO Y CONSUMO DE RECURSOS. 
const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
],
    $ul3 = document.createElement('ul'),
    //Creamos un fragmento donde se guardará toda la información del recorrido.
    $fragment = document.createDocumentFragment();

    //Ejecutamos el recorrido y lo separamos en LI.
    meses.forEach(el => {
        const $li = document.createElement('li');
        $li.textContent = el;
        //Cada elemento es guardado en un fragmento de la memoria.
        $fragment.appendChild($li);
    });

    document.write('<h3>Meses del Año</h3>');
    //Transcribimos los valores del $fragment a la UL3
    $ul3.appendChild($fragment),
    //Ingresamos una sola vez al DOM e insertamos todo el contenido. 
    document.body.appendChild($ul3);
