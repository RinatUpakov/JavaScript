1. Создать переменную “item_1”, присвоить значение 5
 
    let item_1;
        item_1 = 5;

2. Создать переменную “item_2”, присвоить значение 3

    let item_2;
        item_2 = 3;

3. Создать переменную “item_3”, присвоить значение item_1 + item_2

    let item_3;
        item_3 = item_1 + item_2;

4. Вывести в консоль item_1, item_2 и item_3

    console.log(item_1, ", ", item_2, ", ", item_3);

5. Создать переменную item_4, присвоить значение 'Yolochka'

    let item_4 = 'Yolochka';

6. Вывести в консоль значение item_4

    console.log (item_4);

7. Вывести в консоль сложение item_3 и item_4

    console.log(item_3 + item_4);

8. Вывести в консоль умножение item_3 на item_4

    let item_5 = item_3;

9. Создать переменные item_6, item_6_type

    let item_6,
        item_6_type;

10. Присвоить переменной item_6 значение 15, а переменной item_6_type - тип данных значения переменной item_6

    item_6 = 15,
    item_6_type = typeof item_6;

11. Вывести в консоль тип данных item_6 в виде ——  “item_6 == ”  item_6,  “item_6_type == ”  item_6_type —— 

    console.log('--', 'item_6 ==', item_6, ', item_6_type ==', item_6_type, '--');

12. Создать переменные item_7 и item_7_type, в переменную item_7 записать преобразованный в string item_6, в переменную item_7_type - тип данных в переменной item_7

    let item_7 = String(item_6),
        item_7_type = typeof(item_7);

13. Вывести в консоль тип данных item_7 в виде ——  “item_7 == ”  item_7,  “item_7_type == ”  item_7_type ——  

    console.log('--', 'item_7 ==', item_7, 'item_7_type ==', item_7_type);

14. Создать переменную “age_1” и присвоить ей значение 10, переменную “age_2” и присвоить ей значение 18, переменную “age_3” и присвоить ей значение 60

    let age_1 = 10,
        age_2 = 18,
        age_3 = 60;

15. Создать if в котором будите проверять значение переменной age_1. 
    Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
    Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
    Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
    Иначе выводите “Technical work”.

    if (age_1 < age_2) {
        console.log("You don't have access cause your age is ", age_1, ", and It's less then", age_2)
    } else if (age_1 >= age_2 && age_1 < age_3) {
        console.log('Welcome!')
    } else if (age_1 > age_3) {
        console.log ('Keep calm and look the Culture channel')
    } else console.log ('Technical work');
