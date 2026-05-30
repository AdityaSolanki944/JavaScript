// For Loop
for(let i = 1; i<=5; i++){
    console.log(i);
}

// while Loop
let a = 1;
while(a<= 15){
    console.log(a);
    a++;
}

// do while loop
let b = 1;
do{
    console.log(b);
    b++;
} while(b<=6);

// for of Loop
let str = "aditya";
for(let val of str){
    console.log(val);
}

// for in loop
let student = {
    name : "adi" ,
    age : 20 ,
    roll : 2 
};
for(let key in student){
    console.log(key , student[key]);
}