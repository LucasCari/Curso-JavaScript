const $cards = document.querySelector('.cards'),
    $newCard = document.createElement('figure');
    //creavos una variable a clonar 
    $cloneCard = $cards.cloneNode(true)


//Se utiliza inneHTML solo por comidad ya que no es objeto de estudio en la sesión. 
$newCard.innerHTML= `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
`;
$newCard.classList.add('card');
//reemplazaremos las tajetas, primero colocamos la nueva y seguido la ubicacion de la que quitaremos
//$cards.replaceChild($newCard, $cards.children[2]);

//insertamos una targeta antes del NODO que le indiquemos.
//$cards.insertBefore($newCard, $cards.firstElementChild);

//Eliminamos un hijo
//$cards.removeChild($cards.lastElementChild);

//Realizamos una copia de toda una sección. 
document.body.appendChild($cloneCard);