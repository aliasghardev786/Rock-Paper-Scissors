let userNum=0;
let compNum=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userScore=document.querySelector("#user-score");
let compScore=document.querySelector("#computer-score");

 
choices.forEach((ch) => {
    ch.addEventListener("click",()=>{
        let userChoice=ch.getAttribute("id");
        playGame(userChoice);
    })
});


let genCompChoice=()=>{
    let options=["rock","paper","scissors"];
    let ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
}

let drawGame=()=>{
    msg.innerText= "Game Draw. Play Again!";
    msg.style.backgroundColor="black";
}

   
 let playGame=(userChoice)=>{
    let compChoice=genCompChoice();
    if (userChoice === compChoice) {
        drawGame();
    }else{
        let userWin=true;
        if (userChoice === "rock") {
          userWin = compChoice === "paper"?false:true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors"?false:true;
        }else{
            userWin = compChoice === "rock"?false:true;
        }
        showWinner(userWin,compChoice,userChoice);
    }
 };

 let showWinner=(userWin,compChoice,userChoice)=>{
    if (userWin) {
        userNum++;
        userScore.innerText=userNum;
        msg.innerText= `You Win! your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor="green";
        
    }else{
         compNum++;
         compScore.innerText=compNum;
         msg.innerText= `You Lose!${compChoice} beats your ${userChoice} `;
         msg.style.backgroundColor="red";
        
    }
};