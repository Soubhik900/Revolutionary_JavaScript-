"use strict"; //treat all js code as newer version js
// cant use no strict after this 

// Js is a dynamic language,i.e., variables can hold values of different types during runtime.

//alert(): we are using node js, not browser

let name="Soubhik";
let age=7;
let isLoggedIn=false;
let state=null;
const id = Symbol('123') // every symbol is unique
const bigNumber = 7592732244n;

console.log(typeof age);

// datatypes - Primitive and Non-primitive
//Primitive(value):-
//number=>2 to the power 53 
//string
//null
//object=> null is object 
//undefined
//bigint
//symbol=> unique
//BigInt
console.log(typeof undefined);
console.log(typeof null);

//Non-Primitive(reference):-
//Arrays
let arr=['A','B','C']; //datatype is object
//Objects
let obj={
  name:'Soubhik',
  age: 21;
}
//Function
let myFunction=Function(){
  console.log('Hello World');
}// datatype is function object
