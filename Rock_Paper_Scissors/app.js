let userScore = 0;
let  computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if(letter === 'r') return 'Rock';
    if(letter === 'p') return 'PAPER';
    return 'SCISSORS';
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(user)}(user) beats ${convertToWord(computer)}(comp). YOU WIN!`
    document.getElementById(user).classList.add('green-glow')
    setTimeout(function() { document.getElementById(user).classList.remove('green-glow') }, 300)

}

function lose(user, computer) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(computer)} beats ${convertToWord(user)}. YOU LOSE!`
    document.getElementById(user).classList.add('red-glow')
    setTimeout(function() { document.getElementById(user).classList.remove('red-glow') }, 300)
}

function draw(user, computer) {
    
    result_p.innerHTML = `${convertToWord(computer)} equals ${convertToWord(user)}. DRAW!`
    document.getElementById(user).classList.add('grey-glow')
    setTimeout(function() { document.getElementById(user).classList.remove('grey-glow') }, 300)
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "pr":
        case "rs":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, computerChoice);
            break;    

        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, computerChoice);
            break;   


    }

}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })
    
    paper_div.addEventListener('click', function() {
        game("p");
    })
    
    scissors_div.addEventListener('click', function() {
        game("s");
    })
}

main();