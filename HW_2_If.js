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
