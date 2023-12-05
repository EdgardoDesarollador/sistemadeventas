/*
let btnClick = document.getElementById('btnClick');
btnClick.addEventListener('click', () =>{

let numero = parseInt(prompt('Ingrese un numero'));
for(let i=1; i<=10; i++){
        console.log(`${numero} * ${i} = ${numero * i}`);
};

});
*/

/*
let btnClick = document.getElementById('btnClick');
btnClick.addEventListener('click', () =>{

let cadena = prompt('Ingrese una frase en minuscula');
alert(cadena.toUpperCase());//MAYUSCULA
alert(cadena.toLowerCase());//Minuscula

console.log(cadena[0].toUpperCase());

console.log(cadena.length);


for(let i=0; i<cadena.length; i++){
    console.log(cadena[i]);
}

});

*/

/*
let btnClick = document.getElementById('btnClick');
btnClick.addEventListener('click', () =>{

let cadena = prompt('Ingrese una palabra');
let letra = prompt('Ingrese la letra a contar');
let cantidad = 0;

for(let i=0; i<cadena.length; i++){
    if(cadena[i].toLowerCase() === letra.toLowerCase()){
        cantidad++;
    }
}

console.log(`La palabra: ${cadena} tiene: ${cantidad} letras : ${letra}`);
});
*/

/*

let suma = document.getElementById('btnSuma');
btnSuma.addEventListener('click', () =>{
    let num1 = parseFloat(prompt('Ingrese el primer numero'));
    let num2 = parseFloat(prompt('Ingrese el segundo numero'));
    alert(`${num1}+${num2} = ${num1+num2}`);
});

let resta = document.getElementById('btnResta');
btnResta.addEventListener('click', ()=>{
    let num1 = parseFloat(prompt('Ingrese el primer numero'));
    let num2 = parseFloat(prompt('Ingrese el segundo numero'));
    alert(`${num1}-${num2} = ${num1-num2}`);
    });

    let multiplicacion = document.getElementById('btnMulti');
    btnMulti.addEventListener('click', ()=>{
        let num1 = parseFloat(prompt('Ingrese el primer numero'));
        let num2 = parseFloat(prompt('Ingrese el segundo numero'));
        alert(`${num1}*${num2} = ${num1*num2}`);
        });

        let division = document.getElementById('btnDivi');
        btnDivi.addEventListener('click', ()=>{
            let num1 = parseFloat(prompt('Ingrese el primer numero'));
            let num2 = parseFloat(prompt('Ingrese el segundo numero'));
            alert(`${num1}/${num2} = ${num1/num2}`);
            });

*/

//Recibir cadena y remplazar todas las letras a por un * 

/*
let button = document.getElementById('btnClick');
btnClick.addEventListener('click', () =>{
let cadena  = prompt('Ingrese una cadena');
let nuevacadena ='' ;

for(let i=0; i<cadena.length; i++){
    if(cadena[i].toLowerCase() === 'a'){
        nuevacadena += '*';
    }else{
        nuevacadena+= cadena[i];
    }
}
console.log(nuevacadena);


});
*/

//pedir cadena y elegir que letra a remplazar y elegir porque remplazar.

/*
let button = document.getElementById('btnClick');
btnClick.addEventListener('click', () =>{
let cadena = prompt('Ingrese una cadena de texto');
let letra = prompt('Ingrese la letra del texto a remplazar');
let asignacion = prompt('Ingrese la letra, numero o carcater a colocar');
let newcadena = '';

for(let i=0; i<cadena.length; i++){
    if(cadena[i].toLowerCase() === letra){
        newcadena+= asignacion
    }else{
        newcadena+=cadena[i];
    }
}
console.log(newcadena);

});
*/

/*
//Hacer un programa que reciba una cadena en minuscula y luego pida que letra es la unica que va a pasar a mayuscula.
let letra = document.getElementById('btnClick');
btnClick.addEventListener('click', () =>{
    let texto = prompt('Ingrese un texto en minuscua');
    let mayus = prompt('Ingrese la letra a cambiar a mayuscula');
    let cadena = '';

    for(let i=0; i<texto.length; i++){
        if(texto[i].toLowerCase() === mayus){
            cadena+=mayus.toUpperCase()
        }else{
            cadena+=texto[i];
        }
    }

    console.log(cadena);
})
*/

/*
//Hacer un programa que reciba una cadena luego que pida que letra regresara.
alert('Programa para regresar una letra');
let letra = document.getElementById('btnClick');
btnClick.addEventListener('click', () =>{
    let text = prompt('Ingrese un texto');
    let letra = prompt('Ingrese la letra que desea regresar del texto');
    let contador = 0;

    for(let i=0; i<text.length; i++){
        if(text[i].toLowerCase() === letra){
            contador++;
        }else{
            contador = text[i];
        }
    }

    console.log(contador);
})

*/


//Hacer un programa que reciba una cadena y remplace todas las letras 'o' por un 0 y las letras a las convierta a mayuscula.
/*
alert('Programa para remplaxar la o por un 0 ');
let texto = document.getElementById('btnClick');
btnClick.addEventListener('click', () =>{
    alert
    let text = prompt('Ingrese el texto');
    let textnew = '';

    for(let i=0; i<text.length; i++){
        if(text[i].toLowerCase() === 'o'){
            textnew += '0';

        }if(text[i].toLowerCase() === 'a'){
            textnew += 'a'.toUpperCase();

        }else{
            textnew += text[i]
        }
    }
    console.log(textnew);
});
*/


//Hacer un programa que pida una cadena y regrese la cadena separa cada letra por un guion.
/*
alert('Programa para separar letras');
let texto = document.getElementById('btnClick');
btnClick.addEventListener('click', ()=> {
    let text = prompt('Ingrese un texto');
    let textnew = text.split('');
    console.log(textnew.join('-'));
})
*/
//Hacer un programa que pida una cadena y que regrese la cadena sin la letra que el usuario especifique.
alert('Programa para eliminar letra');
let texto = document.getElementById('btnClick');
    btnClick.addEventListener('click', ()=> {
        let text = prompt('Ingrese un texto');
        let letra = prompt('ingrese una letra a eliminar del texto');
        let textnew = '';

        for(let i=0; i<text.length; i++){
            if(text[i].toLowerCase() === letra){
                textnew += '';
            }else{
                textnew += text[i];
            }

        }
        console.log(textnew);
    });

