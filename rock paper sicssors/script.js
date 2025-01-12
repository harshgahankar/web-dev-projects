let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".img")
let userScorePara = document.querySelector("#user-score")
let compScorePara = document.querySelector("#comp-score")
let text = document.querySelector("#text-box")


choices.forEach((img)=>{
    img.addEventListener("click" , ()=>{
        const userChoice = img.getAttribute("id");
        playGame(userChoice);
    })
})
const drawGame = () => {
    text.innerText = "the match is draw"
    text.style.backgroundColor = "#020202";
}

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        text.innerText = `you win , your ${userChoice} beats ${compChoice}`;
        console.log(userChoice);
        userScore++;
       userScorePara.innerText = userScore;
       text.style.backgroundColor = "green";
       
    }else{
        text.innerText = `you loss ,${compChoice} beats your ${userChoice}`;
        console.log(compChoice);
        compScore++;
       compScorePara.innerText = compScore;
       text.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    console.log("the users choice was",userChoice);
    console.log(userChoice); //prints the user choice
    const compChoice = gen();   // computers choice
    console.log("the comp choice was", compChoice)
    console.log(compChoice); // prints the comp choice

    if(userChoice === compChoice){
        drawGame();  // draws the game
    }else{
        userWin = true;
        if( userChoice === "rock"){
            // paper or sicssors
           userWin = compChoice === "paper" ? false : true ;
        } else if( userChoice === " paper"){
            // rock or sicssors 
            userWin = compChoice === "scissors" ? false : true ;
        }else {
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

const gen = () =>{
    const opts= ["rock","paper","sicssors"];
    const idx = Math.floor(Math.random()*3);
    return opts[idx];
}
