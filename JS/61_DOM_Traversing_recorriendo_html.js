//Cada linea del archivo es un NODO-

const $cards = document.querySelector('.cards');
//accedemos al conjunto de tarjetas
console.log($cards);
//accedemos a los hijos
console.log($cards.children);
//accedemos solo a uno de los hijos.
console.log($cards.children[2]);

//Primer hijo con formato html en la section. 
console.log($cards.firstElementChild);

//Ultimo hijo con formato html en la section
console.log($cards.lastElementChild);
console.log($cards.lastChild); //sale enter (porque es el ultimo caracter)

//accedemos a los hermanos directos
//anterior
console.log($cards.previousElementSibling);
//posterior
console.log($cards.nextElementSibling);

//Va a buscar el padre mas sercano del tipo de selector que nosotros le demos. 
console.log($cards.closest('body'));
console.log($cards.children[3].closest('section'));

