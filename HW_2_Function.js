/*Напишите валидационный скрипт используя функции 

 1. Скрипт должен на вход принимать строку.
 2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
 3. Минимум 5 символов в строке
 4. Максимум 64 символа в строке
 5. В строке должны быть буквы
 6. Должна быть хотя бы одна буква в верхнем регистре
 7. Должна быть хотя бы одна цифра
 8. Должна быть хотя бы одна @
 9. Строка не должна быть пустой */

let str;

function isString (str) {
    let valid = false;
    typeof(str) === 'string' ? valid = true : console.log("the string must be a string type");
    return valid;
}

function isNotEmpty (str) {
    let valid = false;
    str ? valid = true :  console.log ("the string mustn't be empty");
    return valid;
}

function validLength (str) {
    let valid = false;
    if (str) {
    str.toString().length >= 5 && str.toString().length <= 64 ? valid = true : console.log ('The string must contain at least 5 and no more than 64 characters');
    } else {console.log ('The string must contain at least 5 and no more than 64 characters');}
    return valid;
}

function isContainLetters (str) {
    let valid = false;
    if (str) {
    /[a-zA-Z]/.test(str) ? valid = true : console.log ('the string must contain letters');
    } else {
        console.log ('the string must contain letters');
        }
    return valid;
}

function isContainUppercaseLetter (str) {
    let valid = false;
    /[A-Z]/.test(str) ? valid = true : console.log ('the string must contain at least one uppercase letter');
    return valid;
}

function isContainNumber (str) {
    let valid = false;
    /\d/.test(str) ? valid = true : console.log ('the string must contain at least one number');
    return valid;
}

function isContainSymbol (str) {
    let valid = false;
    /@/.test(str) ? valid = true : console.log ('the string must contain at least one "@" symbol');
    return valid;
}

function isValid (str) {
    let strValid = [];
    strValid.push(isNotEmpty(str));
    strValid.push(validLength(str));
    strValid.push(isString(str));
    strValid.push(isContainLetters(str));
    strValid.push(isContainUppercaseLetter(str));
    strValid.push(isContainNumber(str));
    strValid.push(isContainSymbol(str));

    strValid.includes(false) ? console.log("Your string doesn't meet the requirements") : console.log('Your string is valid');
}

isValid (str);
console.log(str);
