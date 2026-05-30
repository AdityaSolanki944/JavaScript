// Password to enter 

let rightNum = 40;
let playerNum = prompt("Enter the password");

while(playerNum != rightNum){
    playerNum = prompt("your password is wrong! Try again");
}

console.log("Congratulation you can enter!")