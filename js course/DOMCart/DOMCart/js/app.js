//se puede llamar a un elemento del documento de 2 formas, 
//by css
let heading = document.getElementById('heading');
//cambiar atributos del css etc

heading.style.backgroundColor = "#333";
heading.style.color = "#FFF";
//cambiar el texto
heading.textContent = 'cambiando texto';
//otra forma
heading.innerText = 'otro texto';


//la otra manera es con query selector
//id
const learningheading = document.querySelector('#learn');

learningheading.textContent = "nuevo titulo";
console.log(learningheading);
//por clase

let tituloq = document.querySelector('.tagline');

tituloq.textContent= "otro titulo";
//tag
let heading2 = document.querySelector('h2');
console.log(heading2);
//tambien seleccionar otras clases o tags dentro de clases

let bagraun = document.querySelector('.card h2');



let link;

link = document.querySelector('#primary a:first-child');
link = document.querySelector('#primary a:last-child');
link = document.querySelector('#primary a:nth-child(2)');

console.log(link);

var links = document.getElementsByClassName('link');
//esto retorna una lista de todos los tags links

console.log(links);

//tambien podemos cambiar los atributos de la clase

links[0].style.color = 'red';
links[0].textContent = 'New text';
links[0].style.background = 'black';

//una manera de get elementos dentro de una clase o tag es

var links = document.querySelector('#primary').getElementsByClassName('link');
console.log(links);

//ooooooooooooo
var links = document.querySelector('.menu').getElementsByClassName('link');
console.log(links);

//convert to array
console.log('');
var arraylink = Array.from(links);

arraylink.forEach(function(links)  {
    console.log(links);
});


//aqui selecciona todos los elementos de clase card, por el ALL

var cards = document.querySelectorAll('.card');
console.log(cards);

//aqui selecciona  el primer elemento clase car dque encuentra
var cards = document.querySelector('.card');
console.log(cards);


var cards = document.querySelectorAll('.card h4');
console.log(cards);

//impar
const oddlinks = document.querySelectorAll('#primary a:nth-child(odd)');

oddlinks.forEach(function(odd){
    odd.style.backgroundColor='red';
    odd.style.color='white';
    
});
//par
const evenlinks = document.querySelectorAll('#primary a:nth-child(even)');

evenlinks.forEach(function(even){
    even.style.backgroundColor='blue';
    even.style.color='white';
    
});

//parent to children ordenado
//listar un conjunto de elementos de manera ordenada
const navigation = document.querySelector('#primary');


let element;
element = navigation.children;
element = navigation.children[0];
element = navigation.children[0].nodeName;
//tambien podemos cambiar atributos asi
navigation.children[0].textContent = 'nuevo texto';
console.log(element);
//se puede elegir un hijo de un hijo

const coursesList = document.querySelector('#courses-list');
let elemento;

elemento = coursesList.children[1].children[1].children[0].lastElementChild;
elemento = coursesList.children[1].children[1].children[0].firstElementChild;
console.log(elemento);

//from children to parent

let variabli = document.querySelector('.add-to-cart');
//al igual que childre, de puede subir cuantas veces se quiera
let variabl = variabli.parentElement;
variabl = variabli.parentElement.parentElement;
variabl = variabli.parentElement.parentElement.parentElement;
//tambien podemos subir y bajar
variabl = variabli.parentElement.children[0];
console.log(variabl);

//siblings
//previous
variabl = variabli.previousElementSibling.previousElementSibling;
//next
variabl = variabli.previousElementSibling.nextElementSibling;
console.log(variabl);

//ahora mira
const courseName = variabli.parentElement.querySelector('h4');
        //next element
        variabl =  courseName.nextElementSibling.nextElementSibling;


        console.log(variabl);
        console.log(variabli.parentElement);

////////////////////crear elemento

        const newLink =  document.createElement('a');

        //agregar clase
        newLink.className = 'link';
        //agregar href
        newLink.href = '#';
        //add text
        //el texto es un hijo del tag
        newLink.appendChild(document.createTextNode('El nuevo Link'));

        //ahora agregamos el elemento al html

        document.querySelector('#primary').appendChild(newLink);

        console.log(newLink);

///////////////////replace element
console.log('');
// //tomare el anterior

const oldlist = document.querySelector('#secondary');


const oldlink = oldlist.lastElementChild;

// // console.log(oldlink);



oldlist.replaceChild(newLink, oldlink);


let plac;
plac = document.querySelector('#search-course');
console.log(plac);
plac.placeholder = 'algo'

let cartc = document.querySelector('#cart-content');
    cartc.children[1].children[0].remove(); 
let cartco = cartc.children[1]; 

console.log(cartco);


//other attributes
let algos = document.querySelector('.link');
algos.classList.add('nueva-class'); 
algos.classList.remove('link'); 
algos.id = 'new id';
algos.removeAttribute('id')

//tambien podemos obtener attributes de esto

let uno = algos.getAttribute('href');
uno = algos.getAttribute('class');
//y setear
uno = algos.setAttribute('href','http://alguito.com')
uno = algos.setAttribute('data-link','algomas')
uno = algos.hasAttribute('data-link');//para saber si tiene un atributo
uno = algos.removeAttribute('data-link');

console.log(algos);


// document.getElementById('clear-cart').addEventListener('click', unafun);
// document.getElementById('clear-cart').addEventListener('dblclick', unafun);
// document.getElementById('clear-cart').addEventListener('mouseenter', unafun);
// document.getElementById('clear-cart').addEventListener('mouseleave', unafun);
// document.getElementById('clear-cart').addEventListener('mouseover', unafun);
// document.getElementById('clear-cart').addEventListener('mouseup', unafun);
// document.getElementById('clear-cart').addEventListener('mousedown', unafun);
// document.getElementById('clear-cart').addEventListener('mousedown', unafun);
let heading22 = document.querySelector('#heading');
heading22.addEventListener('mousemove',unafun);

function unafun(w){
    
    console.log(`Event is: ${w.type}`);
}


// let sc2 = document.querySelector('#search');
// sc2.addEventListener('submit', unafun);
//no dejar que corra, parar
// function unafun(w){
//     w.preventDefault();
//     console.log(`Event is: ${w.type}`);
//     console.log(`Value: ${w.value}`);
// }


//event listeners con inputs
//keydown
//keyup
//keypress
let sc2 = document.querySelector('#search-course');
// sc2.addEventListener('focus', unafun);
// sc2.addEventListener('blur', unafun);
sc2.addEventListener('copy', unafun);
// sc2.addEventListener('paste', unafun);
//no dejar que corra, parar
function unafun(w){
    // w.preventDefault();
    // alert('no me copie copion chivato');
    console.log(`Event is: ${w.type}`);
    // console.log(`Value: ${w.value}`);
}

//bubbling
// e.stopPropagation();

//delegation

document.body.addEventListener('click', removeProductFromCart);

function removeProductFromCart(e){
    if(e.target.classList.contains('remove')){
        e.target.parentElement.parentElement.remove();

    }
    else{
        console.log(e.target);
    }
}



//local storage
//manera simple
// localStorage.setItem('names', 'juan');
//casi lo mismo con session storage
// sessionStorage.setItem('names', 'pedro');

//manera eficiente con arrays
const localStorageContent = localStorage.getItem('names');
let names;

if (localStorageContent === null){
    names = [];
}
else{
    names = JSON.parse( localStorageContent );
}


names.push('juansito');
names.push('pedrito');
names.push('armandito');

localStorage.setItem('names', JSON.stringify( names ) );

