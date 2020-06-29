//La etiqueta template nos permite realizar el renderizado y copia de un modelo del nodo del HTML sin ocupar los recursos del DOM.
//Debemos crear el Template vacio en el HTML y lugo completaremos la información desde el JS 

const $cards = document.querySelector('.cards'),
    $template = document.getElementById('template-card').content,
    $fragment = document.createDocumentFragment(),
     cardContent =[
        {
            title: 'Tecnología',
            img: 'https://placeimg.com/200/200/tech',
        },
        {
            title: 'Animals',
            img: 'https://placeimg.com/200/200/animals',
        },
        {
            title: 'Arquitectura',
            img: 'https://placeimg.com/200/200/arch',
        },
        {
            title: 'Gente',
            img: 'https://placeimg.com/200/200/people',
        },
        {
            title: 'Naturaleza',
            img: 'https://placeimg.com/200/200/nature',
        },
        {
            title: 'Tecnología',
            img: 'https://placeimg.com/200/200/tech',
        },
        {
            title: 'Animals',
            img: 'https://placeimg.com/200/200/animals',
        },
        {
            title: 'Arquitectura',
            img: 'https://placeimg.com/200/200/arch',
        },
        {
            title: 'Gente',
            img: 'https://placeimg.com/200/200/people',
        },
        {
            title: 'Naturaleza',
            img: 'https://placeimg.com/200/200/nature',
        },
        {
            title: 'Tecnología',
            img: 'https://placeimg.com/200/200/tech',
        },
        {
            title: 'Animals',
            img: 'https://placeimg.com/200/200/animals',
        },
        {
            title: 'Arquitectura',
            img: 'https://placeimg.com/200/200/arch',
        },
        {
            title: 'Gente',
            img: 'https://placeimg.com/200/200/people',
        },
        {
            title: 'Naturaleza',
            img: 'https://placeimg.com/200/200/nature',
        }
     ];

     cardContent.forEach(el => {
         //Recorremos el Cardcontent y asigmanos los valores
         $template.querySelector('img').setAttribute('src', el.img);
         $template.querySelector('img').setAttribute('alt', el.title);
         $template.querySelector('figcaption').textContent = el.title;
         //Clonamos el nodo para poder imprimir todas las tarjetas. TRUE indica que va a copiar toda la estructura(etiquetas) interna.
         let $clone = document.importNode($template, true);
         $fragment.appendChild($clone);
     })

     $cards.appendChild($fragment);
