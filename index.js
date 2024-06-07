const minNum = 1;
const maxNum = 100;
const answer = Math.floor( Math.random() * (maxNum - minNum + 1)) + minNum 

let attempt = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`guess a number between ${minNum} - ${maxNum}`)
    guess = Number(guess)

  if(isNaN(guess)){
    window.alert("please enter a valid number")
  }
  else if(guess < minNum || guess >maxNum){
    window.alert("please enter a valid number")
  }
  else{
    attempt++
    if(guess < answer){
        window.alert("wrong too low try again:")
    }
    else if (guess > answer){
        window.alert("wrong too high try again:")
    }
    else{
        window.alert(`correct  the answer was ${answer} and it took you ${attempt} attemps`)
        running = false
    }
  }
    



   
}
