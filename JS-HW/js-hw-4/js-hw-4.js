/////роблю через "prompt" бо мені так легше перевірити на роботоздатність (підставляю різні цифри і перевіряю), і цікавіше.///


///////  створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б*/
// let sideA=+prompt('enter side A' )
// let sideB=+prompt('enter side B')
// function areaRectangle (sideA,sideB,action) {if (action==='*') return sideA*sideB;}
// console.log(areaRectangle(sideA,sideB,'*'))
// document.write('Площа прямокутника: ' + areaRectangle(sideA,sideB,'*'))


///////// - створити функцію яка обчислює та повертає площу кола з радіусом r*/
////формула S=PI*(r**2)///////
// let circleR=+prompt('enter Radius circle')
// let pi=3.1415;
// function areaCircle(pi,circleR,action){if (action==='*') return pi*(circleR**2);}
// console.log(areaCircle(pi,circleR,'*'))
// document.write('площа круга становить: '+areaCircle(pi,(circleR**2),'*'))
/////чому не ставить крапку у відповіді в document.write, пише як 31415, а не 314.15?////



/// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r*///S= 2πRH////
/////уточнення: у розвязку (подивився, бо не знав яку площу шукати, так як було 3 варіанта) формула знаходження площі бокової поверхні циліндра////
// let cylinderR=+prompt('enter Radius cylinder');
// let cylinderH=+prompt('enter Height cylinder');
// let pi=3.1415;
// function areaCylinder(pi,cylinderR,cylinderH,action){if (action==='*') return 2*pi*cylinderR*cylinderH;}
// console.log(areaCylinder(pi,cylinderR,cylinderH,'*'))
// document.write('площа циліндра (бокової поверхні) становить: '+areaCylinder(pi,cylinderR,cylinderH,'*'))


/// - створити функцію яка приймає масив та виводить кожен його елемент/
// let array=[2,5,8,9,'abcd','text','blablabla'];
// function dataArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         document.write(array[i])
//         console.log(array)
//     }
// }
// dataArray(array)


//// - створити функцію яка створює параграф з текстом. Текст задати через аргумент/
//  function paragrafText (arg1,arg2)
//  {document.write(`<p>${arg1}</p>`);
//      ////що в цьому випадку дають ````а не ''''.ставлю нахилені вправо ''''' і нічого не працює????//////
//  document.write(`<p>${arg2}</p>`);
// document.write(`<hr>`)
//  console.log(`<p>${arg2}</p>`);
//  console.log(`<p>${arg1}</p>`);
//  }
// paragrafText('HELLO','PEOPLE')
// paragrafText('People','hello')
// paragrafText('ROM','WHISKEY')
// paragrafText('MONEY'+' '+'CAR')
// paragrafText('text1111111'+' '+'text222222')
// paragrafText('text333333'+' '+'text4444444')
// paragrafText('text55555'+' '+'text66666')



//// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий/
// function list(argument){
// document.write(`<ol>`);
// document.write(`<li>${argument}</li>`);
// document.write(`<li>${argument}</li>`);
// document.write(`<li>${argument}</li>`);
// console.log(`<li>${argument}</li>`);
// console.log(`<li>${argument}</li>`);
// ////////в console.log так і має виводити - <li>stringggggggaaaaaa</li>. тобто по боках <li></li>?/////////
// document.write(`</ol>`)}
// list('stringggggggaaaaaa')


/// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*/
// function threeLIinUL(text,number)
// {
//     document.write(`<ul>`) //////працює і без <ul>///////
//     for (let i = 0; i < number; i++)
//     {
//         document.write(`<li>${text}</li>`);
//         console.log(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// threeLIinUL('text in li', 3);


/// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список*/
// let arrayNumberTextBoolean = [222222,3333333,'text','string',3===6,99999<222,5555>32];
// function primitivElements (array)
// {
//     document.write(`<ol>`)
//     for (let i = 0; i < array.length; i++)
//     {
//         document.write(`<li>${array[i]}</li>`);
//     }
//     document.write(`</ol>`)
// }
// primitivElements(arrayNumberTextBoolean);


//// - створити функцію яка приймає масив обєктів з наступними полями id,name,age , та виводить їх в документ. Для кожного обєкту окремий блок.*/
//////////додав 4 поле "status"//////////
// let array = [{id:1,status:'otprysc',name:'Vasya',age:9},{id:2,status:'mother',name:'Olya',age:25},{id:3,status:'father',name:'Jorj',age:20}];
// function objectArray(array)
// {
//     for (const arrayElement of array)
//     {
//         document.write(`<div>${arrayElement.id})${arrayElement.status}-${arrayElement.name}=${arrayElement.age}</div>`);
//         console.log(`<div>${arrayElement.id})${arrayElement.status}-${arrayElement.name}=${arrayElement.age}</div>`)
//     }
// }
// objectArray(array);










