
// JSON
var Person = {

    name : "Sergi",

    Person.hello = function() {
        console.log('Hola ' + this.name);
    }

}
// Object Literal Notation: vue.js
// --> similar al JSON però amb estructura similar a una classe

var person = {

    name : "Sergi",

    hello: function() {
        console.log('Hola ' + this.name);
    },

    bye: function() {
        return 'Bye bye ' + this.name;
    }
}

console.log(person.name);
console.log(person.bye());

// The module pattern
// --> molt similar al OLN però declarant una funció anònima que executarem al final

var person = (function() {

    var name = "Sergi";

    return {
        hello: function () {
            console.log('Hola ' + name);
        },
        bye: function () {
            return 'Bye bye ' + name;
        }
    }

}) ();

var myApp = (function(context) {

    var id = 0;

    context.next = function () {
        return id++;
    };

    context.next = function () {
        return id++;
    };

}) ();


person.bye();
//Ojo, a PHP és: person->bye();