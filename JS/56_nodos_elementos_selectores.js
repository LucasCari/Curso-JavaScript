console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('card'));
console.log(document.getElementsByName('nombre'));
//Reemplazados por querySelector. 
console.log(document.querySelector('#menu'));
console.log(document.querySelectorAll('#menu li'));
console.log(document.querySelector('.card'));
console.log(document.querySelectorAll('.card')[2]);
console.log(document.querySelectorAll('a').length);
document.querySelectorAll('a').forEach(el =>console.log(el));
//ID se sigue utilizando porque optimiza el rendimiento.
console.log(document.getElementById('menu'));
