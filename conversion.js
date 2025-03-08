
//number to string conversion
let score=33;

console.log(typeof score);
// another way : console.log(typeof(score));

let string_score= String(score);
console.log(typeof string_score);
console.log(string_score); //output : 33




//string to number
let str="33";
console.log(typeof str);
let num_str=Number(str);
console.log(typeof num_str);
console.log(num_str); //output : 33




//string to number - part 2
let str2="33abc";
console.log(typeof str2);
let num_str2=Number(str2);//33abc not pure number
console.log(typeof num_str2);
console.log(num_str2); //output: NaN




//null to number
let value=null;
console.log(typeof value);
let num_value=Number(value);
console.log(typeof num_value);
console.log(num_value); //output: 0




//undefined to number
let value2=undefined;
console.log(typeof value2);
let num_value2=Number(value2);
console.log(typeof num_value2);
console.log(num_value2);//output NaN




//boolean to number
let value3=true;
console.log(typeof value3);
let num_value3=Number(value3);
console.log(typeof num_value3);
console.log(num_value3);// output: 1




//Number to boolean
let isLoggedIn = 1;
let boolean_isLoggedIn =Boolean(isLoggedIn);
console.log(boolean_isLoggedIn); //output : true and false for 0




//Empty String to boolean
let isLoggedIn2 = "";
let boolean_isLoggedIn2 =Boolean(isLoggedIn2);
console.log(boolean_isLoggedIn2);// output : false




//String to boolean
let isLoggedIn3 = "Soubhik";
let boolean_isLoggedIn3 =Boolean(isLoggedIn3);
console.log(boolean_isLoggedIn3);//output : true
