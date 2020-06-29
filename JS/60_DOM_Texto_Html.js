const $whatIsDOM = document.getElementById('que-es');

let text = `
    <p> El Modelo de los Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es una API para      documentos HTML y XML.
    </P>
    <p>
        Éste preveé una representación estructural del documento, permitiendo modificar su contenido y presentación presentación visual mediante código JS.
    </P>
    <p> 
        <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </P>
`;
//accedemos al documento HTML y cambiamos el valor mediante JS
//reemplaza respetando las indentaciones y saltos de linea. No respeta etiquetas
$whatIsDOM.innerText = text;
//reemplaza eliminandp las indentaciones. No respeta las etiquetas.
$whatIsDOM.textContent = text;
//reemplaza con texto HTML respetando etiquetas (en este caso envuelve los 3 parrafos con un parrado con id=que-es)
$whatIsDOM.innerHTML = text;
//Reemplaza sintactica y correctamente el archivo HTML (elimina el párrafo principal y lo reemplaza con los otros tres párrafos.)
$whatIsDOM.outerHTML = text;
