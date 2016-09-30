// NAMESPACES

// FRONTEND: Javascript

// BACKEND: JAVA, PHP, JAVASCRIPT, Ruby... Python

// Javascript Object Notation (JSON): la forma que té JS de declarar els objectes
var Persons = {
'name' : 'Sergi',
'sn1'  : 'Tur',
'age'  : 38
}

// Namespaces -> declarem una variable (myApp al exemple) que farem servir
//               de prefixe a mode de namespace tant per variables com per funcions

//Jquery $

var myApp = {}

myApp.name = 'Sergi';

myApp.hello = function() {
    console.log('Hola mon!');
}

myApp.hello()



// VARIABLES
// //$name = 'Sergi';
//
// function fire(bool) {
//
//     // console.log('Hola ' + $name);
//     var foo
//
//     if (bool) {
//         var foo = 'bar';
//
//         console.log(foo)
//     } else {
//         console.log(foo)
//     }
//
// }
//
// // console.log($name);
//
// fire(false);

