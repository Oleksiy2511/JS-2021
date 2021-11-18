

// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let numbers=[1,2,3,4,5];
// let text = ['text1', 'text2', 'text3', 'text4', 'text5'];
// let tnb = [6, 7, 8, 9, 11, 22, 'text6', 'text7', 'text7', 'text7', 'text7', 5 > 4, 6 < 7, 8 === 8,8<=5,0!==9];
// console.log(numbers[2]);
// console.log(text[3]);
// console.log(tnb[0], tnb[7], tnb[12], tnb[14], tnb[15]);
// document.write(`${tnb[0]}, ${tnb[7]}, ${tnb[12]},${tnb[14]}, ${tnb[15]}`);
// console.log(numbers);
// console.log(text);
// console.log(tnb);
// document.write(` ${tnb},  ${numbers},  ${text}`)




// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let mas = [];
// mas[0]=10
// mas[1] = 'skduufh';
// mas[2] = 'dsgfrsdf';
// mas[3] = 'dfvlldfv';
// mas[4] = 'fsvfvjkk';
// mas[5] = 999 < 888;
// console.log(mas);
// document.write(mas);




// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>`)
//         document.write('bla-bla-bla-bla-bla')
//         document.write(`</div>`);
// }



// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 1; i < 11; i++) {
//     document.write(`<div>`)
//         document.write('number'+' '+i)
//         document.write(`</div>`);
// }



// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i=1
// while (i<21){
//     document.write('<h1><strong>HELLO PEOPLE</strong></h1>')
//     i++;}


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i=1
// while (i<21){
//     document.write(`<h1>HELLO PEOPLE ${i}</h1>`)
//     i++;}




// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let numb = [1, 2, 3, 4, 5, 6, 7, 1.1, 2.2, 3.3, 2.4];
// for (let i = 0; i < numb.length; i++) {
//     console.log(numb[i])
//     document.write(`${numb[i]} <br>`)}





// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let text = ['text0', 'text1', 'text2', 'text3', 'text4', 'text5', 'text6', 'text7', 'text8', 'text9'];
// for (let i = 0; i < text.length; i++) {
//     console.log(text[i]);}




//ntb=number+text+boolean



// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let ntb = [1, 2, 3, 'text11', 'text22', 'text33', 2 > 2, 8 === 1, 11 < 5, 8 > 6];
// for (let i = 0; i < ntb.length; i++) {
//     console.log(ntb[i]);}



// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let ntb2 = [1, 5, 8, 'text12', 'text23', 'text54', 1 > 5, 9 ===5, 15 < 4, 9 > 4];
// for (let i = 0; i < ntb2.length; i++) {
//     const ntbresult = ntb2[i]
//     if (typeof ntbresult==='boolean'){
//         document.write(ntbresult);
//         console.log(ntbresult)
//     }}





// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let ntb2 = [1, 5, 8, 'text12', 'text23', 'text54', 1 > 5, 9 ===5, 15 < 4, 9 > 4];
// for (let i = 0; i < ntb2.length; i++) {
//     const ntbresult = ntb2[i]
//     if (typeof ntbresult==='number'){
//         document.write(ntbresult);
//         console.log(ntbresult)
//     }}



// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let ntb2 = [1, 5, 8, 'text12', 'text23', 'text54', 1 > 5, 9 ===5, 15 < 4, 9 > 4];
// for (let i = 0; i < ntb2.length; i++) {
//     const ntbresult = ntb2[i]
//     if (typeof ntbresult==='string'){
//         document.write(ntbresult);
//         console.log(ntbresult)
//     }}





// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let massiv = [1, 5, 8, 'text12', 'text23', 'text54', 1 > 5, 9 === 5, 15 < 4, 9 > 4];
// for (let i = 0; i < massiv.length; i++) {
//     const masresult = massiv[i]
//    if (typeof masresult==='string')
//    if (typeof masresult==='boolean')
//    if (typeof masresult==='number')
//     {
//         document.write(masresult);
//         console.log(masresult)
//     }}



// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for ( let i = 1; i < 11; i++) {
//    console.log(i);
//     document.write(i);
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     // document.write(i);
//     ////--з `${i}` чи просто (і) результат той самий. яка різниця, і на що це впливає?--
//     document.write(`${i}`);
// }



// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i < 101; i+=2) {
//     console.log(i);
//     document.write(`${i}`);
//     //--з `${i}` чи просто (і) результат той самий. яка різниця, і на що це впливає?--
//     document.write(i);
// }




///////////////////////////////////////////////////////////////////////////////////////////////////////
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for ( let i = 1; i < 101; i++) {
//     if (i % 2 !==1 ){
//         console.log(i)
//         document.write(i)
//     }
// }



// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for ( let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i)
//         document.write(i)
//     }
// }


//жесть. тяжко мені ця домашка зайшла. ще повністю не зрозумів./////















































