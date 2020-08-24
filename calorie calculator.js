/* Create a weekly calorie calculator
Criterias:
1. ideal calorie 2000 calorie a day
2. Make sure the user is eating the right amount
*/
// Create an array of day for the week
var days = ['Monday','Tuesday','Wenesday','Thursday','Friday','Saturday','Sunday']
var daysLength = days.length;
//ideal calorie function
function idealCalorie (userinput1){
    var weeklyCalorie = userinput1*7;
    console.log('Your ideal weekly calorie intake should be: '+ weeklyCalorie);
    return weeklyCalorie;
}
// compare the calorie
function comparison(actualCalorie,idealCalorie){
    if (actualCalorie===idealCalorie){
        return 'You have eaten the right amount.';
    } else if (actualCalorie<idealCalorie){
        return 'You are not meeting your calorie intake';
    }else{
        return 'Your calorie intaken for the week has exceeded.';
    }
}
function calorieCalculator(){
    var userinput1 = prompt('Please key in the ideal daily calorie intake: ');
    var weeklyCalorie = idealCalorie(userinput1);
    var totalCalorie = 0;
    for (var i=0; i<daysLength; i++){
        var userinput2 = prompt('Please enter the intake calorie for '+ days[i] + ' is: ');
        var userinput2 = parseInt(userinput2);
        console.log('For '+ days[i] + ' the amount of calorie is '+ userinput2);
        totalCalorie += userinput2;
    }
    console.log('Your weekly calorie intake is '+totalCalorie);
    var results = comparison(totalCalorie,weeklyCalorie);
    console.log(results);
}
calorieCalculator();
