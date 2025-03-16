//Memory types

//Stack for primitive datatype
//original value was copied and used, hence no change in original value
let myName="Soubhik";
let anotherName=myName;
anotherName="Jeet";

console.log(myName);
console.log(anotherName);


//Heap for non-primitive datatype
//original value was referenced, hence change in original value occurs
let user1={
    email: "hr@gmail.com",
    upi: "hr@ptym"

}

let user2=user1;
user2.email="pq@gmail.com"

console.log(user1.email);
console.log(user2.email);



