// function funcao(param1, param2) {
// //     var args = Array.prototype.slice.call(arguments, funcao.length)
// //     console.log(args);
// // }
// //
// // funcao(1,2,3,4,5,6);

// ESSA SERIA A MANERIA DE PERGAMOS PARAMATROS ADICIONAIS /\

// Essa É A NOVA MANEIRA COM O ES6

function funcao(param1, param2, ...otherParams) {
    console.log(otherParams);
}

funcao(1,2,3,4,5,6);

// Exemplo do rest parameter sendo usado com arrays

let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8, ...array1];

console.log(array2);

// Exemplo com string

let string = "Felipe Gonçalves";

let stringArray = [...string];

console.log(stringArray);

