let a = "aditya";
let b = "solanki";
console.log(a[0]);
console.log(a.length);

//Template Literals

let str = `Throughout the heaven and earth i alone am the honor one`
console.log(typeof str);

let obj = {
    object : "pen",
    cost : 10
};
console.log(`the cost of one ${obj.object} is ${obj.cost} rupees`);

// Uppercase
c = a.toUpperCase();
console.log(c);

// Lowercase
d = b.toLowerCase();
console.log(d);

// Remove space form front and end
let e = "     hello my name is noone   ";
console.log(e.trim());

// Return part of string
let num = "01234567";
console.log(str.slice(3,6));

// Adding to String
let s = "hello";
let t = "world";
console.log(s.concat(t));

// Replace
let r = "hello";
console.log(r.replace("lo","p"));