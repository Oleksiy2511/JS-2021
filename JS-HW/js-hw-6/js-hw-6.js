// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let lengthA='hello world';
// let lengthB='lorem ipsum';
// let lengthC='javascript is cool';
// console.log(lengthA.length);
// console.log(lengthB.length);
// console.log(lengthC.length);
// document.write(lengthC.length)///вибило помилку, але спрацювало як в 'console.log'//////


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let strA='hello world. ';
// let strB='lorem ipsum. ';
// let strC='javascript is cool. ';
// let toUpperCaseA=strA.toUpperCase();
// let toUpperCaseB=strB.toUpperCase();
// let toUpperCaseC=strC.toUpperCase();
// console.log(toUpperCaseA)
// console.log(toUpperCaseB)
// console.log(toUpperCaseC)
// document.write(toUpperCaseA,toUpperCaseB,toUpperCaseC)
// console.log(toUpperCaseA,toUpperCaseB,toUpperCaseC)


// - Перевести до нижнього регістру настипні стрінгові значення
////'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL';
// let strA='HELLO WORLD. ';
// let strB='LOREM IPSUM. ';
// let strC='JAVASCRIPT IS COOL. ';
// let toLowerCaseA=strA.toLowerCase();
// let toLowerCaseB=strB.toLowerCase();
// let toLowerCaseC=strC.toLowerCase();
// console.log(toLowerCaseA)
// console.log(toLowerCaseB)
// console.log(toLowerCaseC)
// document.write(toLowerCaseA,toLowerCaseB,toLowerCaseC)
// console.log(toLowerCaseA,toLowerCaseB,toLowerCaseC)


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// let trim=str.trim();
// console.log(trim)
// console.log(str.length)
// console.log(trim.length)


// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать где сидит фазан';
// let arr = stringToArray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать','где','сидит','фазан']
////////////////////////////////////////////////////////////////////////////
//     let str = 'Каждый охотник желает знать где сидит фазан';
// let split=str.split(' ')
// console.log(split)


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
// let str = 'Каждый охотник желает знать';
// let delete_characters = (str, index) => {
//     return str.substr(0, index);
// };
// let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7));
////////зробив за допомогою resolve////////////////

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// let insert_dash=(str)=>{let splitJoinUpper=str.split(' ').join('---').toUpperCase();
//     /////////чому пише що "splitJoinUpper" в 74 ряді зайве?////////////////
// return splitJoinUpper}
// let string='HTML JavaScript PHP';
// console.log(insert_dash(string))
// document.writeln(insert_dash(str))


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let str = "цікаво чи працює на кирилиці";
// let firstRegisterUpp=(str)=> {if (!str)return str;
//     return str[0].toUpperCase()+str.slice(1)
// }
// document.write(firstRegisterUpp(str)+'. '+'такі да')
// console.log(firstRegisterUpp(str)+'. '+'такі да')


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.//
// let capitalize = (str) => {
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
// }
// document.write(capitalize('не зміг зробити сам, тому подивився в resolve'))
// console.log(capitalize('і тут побачив "map", передивлюсь lesson 6'))
