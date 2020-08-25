//fake database of names
var dataBase = ['Tom','Joe','Alex','Jerry'];
var userName = prompt('What is your name ?');
var verifyName = dataBase.includes(userName);
if (verifyName!=true){
    console.log('Hello '+ userName);
    var question = prompt('Hi '+userName+'! Please key in your question.');
    var magicBall = Math.floor(Math.random()*8);
    var answer = '';
    switch (magicBall){
        case 0:
            answer = 'Better not tell you now.';
            break;
        case 1:
            answer = 'Concentrate and ask again';
            break;
        case 2:
            answer = 'Reply hazy try again';
            break;
        case 3:
            answer = 'Cannot predict now';
            break;
        case 4:
            answer = 'My reply is no.';
            break;
        case 5:
            answer = 'My sources say no';
            break;
        case 6:
            answer = 'Outlook not so good';
            break;
        case 7:
            answer = 'Signs point to yes';
            break;
    }
} else {
    console.log('Key in a valid userName');
}

console.log('The magic ball answer is: '+answer);