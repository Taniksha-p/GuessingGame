const max=prompt("enter maximum number");

const random = Math.floor(Math.random()*max)+1;
console.log(random);
let guess=prompt("guess the number");
while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    if(guess=="random"){
        console.log("congrats you are right");
        break;
    } else if(guess<random) guess=prompt("your guess was too small!!please try agian");
    else{
        guess=prompt("guess was too large!!please try again");
       
    }
}