function getComputerChoice(){
    const choices = ['rock','paper','scissor'];
    const getchoice = Math.floor(Math.random()*choices.length);
    const compchoice = choices[getchoice];
    const Comp = document.querySelector(".comp");
    Comp.textContent = `comptr: ${compchoice};`
    return compchoice;
}



function playgame() {
    let humanscore = 0;
    let compuetrscore = 0;
    
    const Result = document.querySelector(".result");
    const Score = document.querySelector(".score");
    const Winner = document.querySelector(".winner");
    
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            Result.textContent = "its a tie";
        } else if (
            (humanChoice === "rock" && computerChoice === "scissor") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissor" && computerChoice === "paper")
        ) {
            Result.textContent = "you win";
            humanscore = humanscore + 1; // ✅ edited increment
        } else {
            Result.textContent = "you lose";
            compuetrscore = compuetrscore + 1; // ✅ edited increment
        }
        Score.textContent = `player: ${humanscore} computer: ${compuetrscore}`;

        if (humanscore === 5 || compuetrscore === 5) {
            const winner = humanscore === 5 ? "You win the game!" : "Computer wins the game!";
            Winner.textContent = winner;

    
            document.querySelectorAll("button").forEach(btn => {
            btn.disabled = true;
         });
       }
    }
    

    document.querySelectorAll("button").forEach(button =>{
        button.addEventListener("click",() =>{
            const playerSelection = button.value;
            const computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
        });
    });

    

    



    
}

playgame();
