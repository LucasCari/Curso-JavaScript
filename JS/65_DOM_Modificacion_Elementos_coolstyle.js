
/*
Siempre debebos tomar un elemento como referencia. En este caso tomamos como referencia la caja donde se encuentran almacenadas las fotos.

    incertAdjacent... 

    .insetAdjacentElement(position, el);// Insertamos un elemento en este caso un NODO
    .insetAdjacentHTML(position, html); // Es una forma mas eficiente del HTML
    .insetAdjacentText(position, text);

    Positions:
    beforebegin(hermano anterior)
    afterbegin(primer hijo)
    beforeend(ultimo hijo)
    afterend(hermano siguiente)

*/
const $cards = document.querySelector('.cards'),
    $newCard = document.createElement('figure');

let $countentCard= `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption></figcaption>
`;
$newCard.classList.add('card');

$newCard.insertAdjacentHTML('beforeend', $countentCard);
$newCard.querySelector('figcaption').insertAdjacentText('afterbegin', 'Any');
$cards.insertAdjacentElement('afterbegin', $newCard);


/* $cards.prepend($newCard); //Funciona como afterbegin */
/* $cards.before($newCard); //Funciona como beforebegin */
/* $cards.append($newCard);// Funciona como beforeend */
/* $cards.after($newCard);// Funciona como afterend */


