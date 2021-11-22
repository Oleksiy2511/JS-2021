// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
// let number1 =+prompt('enter first number');
// let number2 =+prompt('enter second number');
// if (number1===number2){document.write('рівні числа')}
// if (number1>number2){document.write(number1)}
// if (number1<number2){document.write(number2)}




// - У першому підїзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому підїзді знаходиться дана квартира.
// let flat =+prompt('enter number');
// if (flat<1){document.write('бомбосховище');}
// else if (flat>=1&&flat<=20){document.write('entrance1')}
// else if (flat>=21&&flat<=48){document.write('entrance2')}
// else if (flat>=49&&flat<=90){document.write(' entrance3')}
// else if (flat>90){document.write('перебор')}





// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
// let number =+prompt('enter number');
// if (number===10){document.write('ВІРНО')}
// else if (number!==10){document.write('НЕВІРНО')}







// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо обєкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
// let x=+prompt('enter number')
// if (x)
// else if (x=)






// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
// let degree =+prompt('enter degree');
// if (degree>=10&&degree<=22){document.write('ми йдемо ВЧИТИСЯ')}
// else if (degree<=9&&degree>=-100){document.write('сидимо вдома і вчимося ОНЛАЙН')}
// else if (degree<=100&&degree>=23){document.write('сидимо вдома і вчимося ОНЛАЙН')}



// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
// let lohotron=+prompt('введіть цифру');
//     switch (lohotron){
//     case 1:console.log('car');
//     case 1:document.write('car');
//     break;
//     case 2:console.log('moto');
//     case 2:document.write('moto');
//     break;
//     case 3:console.log('phone');
//     case 3:document.write('phone');
//     break;
//     case 4:console.log('loshara');
//     case 4:document.write('loshara');
//     break;
//     case 5:console.log('life');
//     case 5:document.write('life');
//     break;
//     default:console.log('число не вірне');
// }