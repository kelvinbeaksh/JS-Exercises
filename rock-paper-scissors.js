// Making sure that user only picks either rock,paper or scissors,
// if it is not either or the choices, user has to retype.
// toLowerCase - standardise whatever the user has type in, so that it will not have error, as long as user's spelling is correct
function userChoice(userinput){
    userinput = userinput.toLowerCase();
    if (userinput==='rock'||userinput==='paper'||userinput==='scissors'){
        return userinput;
    }else{
        return 'Your entry is not valid.'
    }
}
// Create a random choice generator
function computerChoice(){
    var choice = Math.floor(Math.random()*3);
    if (choice===0){
        return 'rock';
    }else if (choice === 1 ){
        return 'paper';
    }else {
        return 'scissors';
    }
}
//Performing comparison between the choices
function comparisonOfChoice(userChoice,computerChoice){
    if (userChoice===computerChoice){
        return 'It is a draw!!!';
    }else if (userChoice==='rock'){
        if(computerChoice==='scissors'){
            return 'Player wins';
        }else{
            return 'Computer wins';
        }
    }else if (userChoice==='scissors'){
        if(computerChoice==='paper'){
            return 'Player wins';
        }else{
            return 'Computer wins';
        }
    }else if (userChoice==='paper'){
        if(computerChoice==='rock'){
            return 'Player wins';
        }else{
            return 'Computer wins';
        }
    }
}
// Create the compilation to play the game
function playGame(){
    var userinput = prompt('Please enter your choice: ');
    var user = userChoice(userinput);
    var computer = computerChoice();
    var results = comparisonOfChoice(user,computer);
    console.log(results);
}

playGame();