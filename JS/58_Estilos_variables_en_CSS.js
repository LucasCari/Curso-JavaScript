const $linkDOM = document.querySelector('.link-dom');

//Accedo al Mapa general de todos los estilos CSS en el archivo. Todas propiedades se encuentran en lowerCamelcase
console.log($linkDOM.style);
console.log($linkDOM.getAttribute('style'));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);

console.log(window.getComputedStyle($linkDOM));
//accedemos a un valor de una propiedad específica.
console.log(getComputedStyle($linkDOM).getPropertyValue('color'));

$linkDOM.style.setProperty('text-decoration', 'none');
$linkDOM.style.setProperty('display', 'block');

$linkDOM.style.width = '50%';
$linkDOM.style.textAlign = 'center';
$linkDOM.style.marginLeft = 'auto';
$linkDOM.style.marginRight = 'auto';
$linkDOM.style.padding = '1rem';
$linkDOM.style.borderRadius = '0.5rem';
console.log($linkDOM.style);
console.log($linkDOM.getAttribute('style'));


//Variables CCS - Custom PROPERTY
console.warn('Custom Property');

//declaramos las variables para simplificar su uso.
const $html = document.documentElement,
    $body = document.body;

//Asignamos a cada variable los valores que generamos en el :root(html)
let varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color'),
    varYellowColor = getComputedStyle($html).getPropertyValue('--yellow-color');
console.log(varDarkColor, varYellowColor);

//Modificamos los style utilizando las variables. 
$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

//establecemos la modificacion en el color 
$html.style.setProperty('--dark-color', 'black');
//acá actualizamos el color establecido en el :ROOT
varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color');

//Modificiamos el HTML
$body.style.setProperty('background-color', varDarkColor);
