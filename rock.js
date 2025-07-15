function getComputerChoice(){
    const choices = ['rock','paper','scissor'];
    const getchoice = Math.floor(Math.random()*choices.length);
    const compchoice = choices[getchoice];
    console.log("comp:",compchoice)
    return compchoice;
}

function getHumanChoice() {
    const choice = prompt("choose any ").toLowerCase();
    console.log("user:",choice)
    return choice
}

function playgame() {
    let humanscore = 0;
    let compuetrscore = 0;
    let Round = 0;
    
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log("You win!");
            humanscore = humanscore + 1; // ✅ edited increment
        } else {
            console.log("You lose!");
            compuetrscore = compuetrscore + 1; // ✅ edited increment
        }
    }

    while(Round < 5){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        Round++;
    }

    console.log("human", humanscore);
    console.log("comp:", compuetrscore);
}

playgame();
