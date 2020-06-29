const $card = document.querySelector('.card');

console.log($card);
//devuelve el nombre de la clase
console.log($card.className);
//Devuelve un classTokenList, y nos devuelve la informacion en el dom de la clase, si la tiene.
console.log($card.classList);
//comprobamos si tiene la class indicada. (.contains('classnName)). Nos devuelve true o false (Boolean)
console.log($card.classList.contains('rotate-45'));

//Agregamos una Class
$card.classList.add('rotate-45');
console.log($card.classList.contains('rotate-45'));

//removemos la Class
$card.classList.remove('rotate-45');
console.log($card.classList.contains('rotate-45'));

//Analiza si tiene la Class la quita, pero si no la tiene la agrega, funciona como un interruptor.
$card.classList.toggle('rotate-45');
//Analiza que Class tiene asignada y la reemplaza por otra.
$card.classList.replace('rotate-45', 'rotate-135');

//modificar varias clases al mismo tiempo
//agregar
$card.classList.add('opacity-80', 'sepia');
//quitar
$card.classList.remove('opacity-80', 'sepia');
//interruptor
$card.classList.toggle('opacity-80', 'sepia');




