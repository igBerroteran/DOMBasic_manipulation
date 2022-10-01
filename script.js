const a1 = document.querySelector('#inpID');
const a2 = document.querySelector('#inpID1');
const b2 = document.querySelector('#butID');
const c3 = document.querySelector('#pId');
const form = document.querySelector('#form');

form.addEventListener('submit', devuelve);

function devuelve(event) {
    console.log({event});
    event.preventDefault(); 
    const result = a1.value + a2.value;  
    c3.innerText = "El resultado es: " + result;
    
}
