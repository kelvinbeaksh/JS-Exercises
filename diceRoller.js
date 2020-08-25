function diceRoller(){
    switch (Math.floor(Math.random()*7)) {
    case 6:
        console.log('Fantastic it is a 6!!!');
        break;
    case 5:
        console.log('Great roll it is a 5.');
        break;
    case 4:
        console.log('Good roll it is a 4');
        break;
    case 3:
        console.log('Not too bad it is a 6');
        break;
    case 2:
        console.log('Can be better it is a 6');
        break;
    case 1:
        console.log('Better luck next time, it is a 1');
        break;
    default:
        console.log('Re-roll your dice');
    }
}

diceRoller();