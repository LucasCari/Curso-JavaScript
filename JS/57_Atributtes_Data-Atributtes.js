//Los data Atribute son atributos que nosotros creamos utilizando data-(+ el nombre que nosotros querramos.)

console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));

//capturamos el href de input name, pero traemos toda la dirección del live server
console.log(document.querySelector('.link-dom').href);
//Con getAttribute capturamos solo la URL del link. (es una captura mas puntuál de la informacion solicitada);
console.log(document.querySelector('.link-dom').getAttribute('href'));

//cambiamos el atributo 
document.documentElement.lang = 'es';
console.log(document.documentElement.lang);
document.documentElement.setAttribute('lang', 'es-MX');
console.log(document.documentElement.lang);

//Todas las variables donde se guarden elementos del DOM debe anteponerse $ (para diferenciar cual es una variable de lógica y cual corresponde a valres del HTML)
const $linkDOM = document.querySelector('.link-dom');

$linkDOM.setAttribute('target', '_black');
//Por cuestiones de seguridad marcamos una no dependencia entre nuesta página y la que vamos a ABRIR
$linkDOM.setAttribute('rel', 'noopener'); 

//Modificicamos la url a la que nos redireccionará el link
$linkDOM.setAttribute('href', 'https://youtube.com/jonmircha');

//comprobamos si en nuestro html tenemos un atributo 
console.log($linkDOM.hasAttributes('rel'));
//lo eliminamos
$linkDOM.removeAttribute('rel');
console.log($linkDOM.hasAttribute('rel'));


//DATA-ATTRIBUTE
console.warn('data-attribute');

console.log($linkDOM.getAttribute('data-description'));
//JS guarda todos los data- en un mapa, al cual accederemos con .dataset
console.log($linkDOM.dataset);
//Podemos acceder a uno en particular, utilizando el .dataset(.)+palabra
console.log($linkDOM.dataset.description);
//establecemos nuevos valores
$linkDOM.setAttribute('data-description', 'Modelo de objeto del documento');
console.log($linkDOM.dataset.description);

$linkDOM.dataset.description = 'Sucribete al canal';
console.log($linkDOM.dataset.description);

//Agrego un atributo.
$linkDOM.setAttribute('data-id', '1');