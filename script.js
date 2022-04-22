for(let i = 0; i < 1; i) {
    let age = parseInt(prompt('Please enter your age'));
    if (!isNaN(age)) {
        isAgeCorrect(age);
        i++;
    } else {
        console.log('Incorrect input, please enter your correct age');
         i = 0;
    }
}  

function isAgeCorrect (age) {
    let age_2 = 18,
        age_3 = 60;

        if (age < age_2) {
            alert("You don't have access cause your age is ", age, ", and It's less then", age_2);
        } else if (age >= age_2 && age < age_3) {
            alert('Welcome!');
        } else if (age > age_3) {
            alert ('Keep calm and look the Culture channel');
        } else alert ('Technical work');
}