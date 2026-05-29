let a = 10;
let b = 5;

//Arithmatioc Operator
console.log(a + b);          // Addtion Operator
console.log(a - b);         // Subtraction Operator
console.log(a * b);        // Multiplication Operator
console.log(a / b);       // Division Operator
console.log(a % b);      // Remander Operator
console.log(a ** b);    // a ^ b

//Unary Operator
console.log("a + 1 = ", a++);     // First use original then change
console.log(a);                  // change value
console.log("b - 1 = ", b--);   // first use original then change
console.log(b);                // change value
console.log("--a" , --a);     // first decriease the value
console.log("++b", ++b);     // first increase the value

//Assingment Operator
a += 1;
b -= 1;
a *= 2;
b /= 2;

//Comparision Operator
console.log("22 = a" , a == 22);
console.log("22 not equal to a" , a != 22);
console.log(" 44 >= a " , a <= 44);

//Logical Operator
console.log( a > 0 && b > 0);    // AND
console.log(a > 5 || b > 5);    // OR
console.log( !(a > 20));       // Not