<h1 align= "center">Javascript</h1>
<h2 align= "center">Задание 1</h2>

### Файл с выполненным заданием: [js_HW_1.txt](https://github.com/RinatUpakov/JavaScript/blob/7ca85d358cefb12e9cb04edb763b37670ea09413/HW_1.js)

___

1. Создать переменную “item_1”, присвоить значение 5
 
    ```javascript
    let item_1;
    item_1 = 5;

2. Создать переменную “item_2”, присвоить значение 3

    ```javascript
    let item_2;
    item_2 = 3;

3. Создать переменную “item_3”, присвоить значение item_1 + item_2

    ```javascript
    let item_3;
    item_3 = item_1 + item_2;

4. Вывести в консоль item_1, item_2 и item_3

    ```javascript
    console.log(item_1, ", ", item_2, ", ", item_3);

5. Создать переменную item_4, присвоить значение 'Yolochka'

    ```javascript
    let item_4 = 'Yolochka';

6. Вывести в консоль значение item_4

    ```javascript
    console.log (item_4);

7. Вывести в консоль сложение item_3 и item_4

    ```javascript
    console.log(item_3 + item_4);

8. Вывести в консоль умножение item_3 на item_4

    ```javascript
    let item_5 = item_3;

9. Создать переменные item_6, item_6_type

    ```javascript
    let item_6, item_6_type;

10. Присвоить переменной item_6 значение 15, а переменной item_6_type - тип данных значения переменной item_6

    ```javascript
    item_6 = 15, item_6_type = typeof item_6;

11. Вывести в консоль тип данных item_6 в виде ——  “item_6 == ”  item_6,  “item_6_type == ”  item_6_type —— 

    ```javascript
    console.log('--', 'item_6 ==', item_6, ', item_6_type ==', item_6_type, '--');

12. Создать переменные item_7 и item_7_type, в переменную item_7 записать преобразованный в string item_6, в переменную item_7_type - тип данных в переменной item_7

    ```javascript
    let item_7 = String(item_6), 
        item_7_type = typeof(item_7);

13. Вывести в консоль тип данных item_7 в виде ——  “item_7 == ”  item_7,  “item_7_type == ”  item_7_type ——  

    ```javascript
    console.log('--', 'item_7 ==', item_7, 'item_7_type ==', item_7_type);

14. Создать переменную “age_1” и присвоить ей значение 10, переменную “age_2” и присвоить ей значение 18, переменную “age_3” и присвоить ей значение 60

    ```javascript
    let age_1 = 10,
        age_2 = 18, 
        age_3 = 60;

15. Создать if в котором будите проверять значение переменной age_1. 
    Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
    Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
    Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
    Иначе выводите “Technical work”.

    ```javascript
    if (age_1 < age_2) {
        console.log("You don't have access cause your age is ", age_1, ", and It's less then", age_2)
    } else if (age_1 >= age_2 && age_1 < age_3) {
        console.log('Welcome!')
    } else if (age_1 > age_3) {
        console.log ('Keep calm and look the Culture channel')
    } else console.log ('Technical work');

____

<h2 align= "center">Задание 2 вариант 1</h2>

### Файл с выполненным заданием: [JS_Validator_func.js](https://github.com/RinatUpakov/JavaScript/blob/e56c71f32bf8e453b0ef4be8960e34b9d1969aa1/HW_2_Function.js)

____

Напишите валидационный скрипт используя функции 
 1. Скрипт должен на вход принимать строку.
 2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
 3. Минимум 5 символов в строке
 4. Максимум 64 символа в строке
 5. В строке должны быть буквы
 6. Должна быть хотя бы одна буква в верхнем регистре
 7. Должна быть хотя бы одна цифра
 8. Должна быть хотя бы одна @
 9. Строка не должна быть пустой

___

```javascript
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
```
____

<h2 align= "center">Задание 2 вариант 2</h2>

### Файл с выполненным заданием: [JS_Validator_func_2.js](https://github.com/RinatUpakov/JavaScript/blob/0700ef87fab562769fc5455193896d98ed07a49a/HW_2_If.js)

____

 Напишите валидационный скрипт используя функции 
 1. Скрипт должен на вход принимать строку.
 2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
 3. Минимум 5 символов в строке
 4. Максимум 64 символа в строке
 5. В строке должны быть буквы
 6. Должна быть хотя бы одна буква в верхнем регистре
 7. Должна быть хотя бы одна цифра
 8. Должна быть хотя бы одна @
 9. Строка не должна быть пустой

___

```javascript
function validator(str) {
    if (typeof(str)== 'string') {
        if ((str.length >= 5) && (str.length <= 64)) {
            if (/[a-zA-Z]/.test(str)) {
                if (/[A-Z]/.test(str)) {
                    if (/[0-9]/.test(str)) {
                        if (/@/.test(str)) {
                            console.log ('the string meets all the requirements')
                        } else console.log ('the string must contain at least one "@" symbol')
                    } else console.log('the string must contain at least one number')
                } else console.log('the string must contain at least one uppercase letter')
            } else console.log('the string must contain letters')
        } else console.log('The string must contain at least 5 and no more than 64 characters')
    } else console.log('please enter some string');
}

validator('qwertQ1@');
```

____

<h2 align= "center">Дополнительное задание</h2>

### Файлы с выполненным заданием: 
### скрипт: [script.js](https://github.com/RinatUpakov/JavaScript/blob/0700ef87fab562769fc5455193896d98ed07a49a/script.js)
### страница с подключенным скриптом: [script_page.html](https://github.com/RinatUpakov/JavaScript/blob/0700ef87fab562769fc5455193896d98ed07a49a/script_page.html)
____

Задания с разным количеством звездочек

1*:
Преобразовать написанный код в задании 1.15 в функцию, принимающую на вход возраст.
Пример: const checkAge = function(age) {
Ваши преобразования
}
Вывести в консоль результат работы функции с возрастами 17, 18, 61

2*:
Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

3**:
Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

4***:
Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
___

Страница с подключенным скриптом:
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
</head>
<body>
    <script src="script.js"></script>
</body>
</html>
```

Скрипт:
```js
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
```
