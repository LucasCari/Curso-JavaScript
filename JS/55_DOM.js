console.warn('****Elementos del Documento*****');

console.log(window.document);
console.log(document);

//Cada parte del HTLM es un nodo para el JS
console.log(document.head);
console.log(document.body);

//solo nos trae el tipo de documento
console.log(document.documentElement);

console.log(document.doctype);

console.log(document.charset);
console.log(document.title);
//imprimimos los links de la página.
console.log(document.links);
//imprimimos imagenes 
console.log(document.images);
//Imprimimos los formularios
console.log(document.forms);
//hojas de estilo
console.log(document.styleSheets);
//scripts, numero de etiquetas scripst en el documento. 
console.log(document.scripts);
//mapeo de la selección 
setTimeout(() => {
    console.log(document.getSelection().toString());
}, 3000);

//Escribimos en el documento 
document.write('Hola mundo desde el dom');

