// Всі функції повинні бути описані стрілочним типом!!!!

// - створити функцію яка обчислює та повертає площу прямокутника висотою=h та ширинаю=w ///S=h*w///
// let rectangleS=(h,w)=>{return h*w};
// console.log(rectangleS(5,10))

// - створити функцію яка обчислює та повертає площу кола ///S = πr**2, де π = 3,1416, r=радіус////
// let PI=3.1416
// let circleS=(r)=>{return PI*(r*r)};
// console.log(circleS(10))


// - створити функцію яка обчислює та повертає площу циліндру ////S(біч.) = 2πRH, де π = 3,1416, R=радіус, H=висота /////
// let PI=3.1416
// let cylinderS=(R,H)=>{return 2*PI*R*H};
// console.log(cylinderS(5,10))
// document.write('бічна площа циліндра= ',cylinderS(5,10))


//////////////////////////////////////////////////////////////////////////
// - створити функцію яка приймає масив та виводить кожен його елемент
// let array=(...arr)=>{
//     console.log(arr);
//     document.write(arr)
// }
// array(1,2,3,'string','text',5===999,4<6)
////////////////////////---2-й варіант----///////////////////////////////////////
// let array=[1,2,3,'string','text',5===999,4<6];
// const dataArray = (array) => {
//     for (let i = 0; i < array.length; i++) {
//        document.write(array[i]);
//        console.log(array[i])
//     }
// }
// dataArray(array);
/////////////////////////////////////////////////////////////////////////



//// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// paragraphText=(text)=>{
//     document.write(`<p>${text}</p>`);
//     console.log('hello')
// }
// for (let i = 1; i <= 10; i++)
// paragraphText('привіт. як справи?')


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// olList=(argument)=>{
// document.write(`<ol>`);
// document.write(`<li>${argument}</li>`);
// document.write(`<li>${argument}</li>`);
// document.write(`<li>${argument}</li>`);
// console.log(`<li>${argument}</li>`);
// console.log(`<li>${argument}</li>`);
// console.log(`<li>${argument}</li>`);
// document.write(`</ol>`)}
// olList('string')



// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// threeLIinUL=(text,number)=>
// {
//     document.write(`<ol>`)
//     for (let i = 0; i < number; i++)
//     {
//         document.write(`<li>${text}</li>`);
//         console.log(`<li>${text}</li>`)
//     }
//     document.write(`</ol>`)
// }
// threeLIinUL('text in li', 33);



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arrayNumberTextBoolean = [222222,3333333,'text','дуже схоже на 4 домашку','прямо копія','string',3===6,99999<222,5555>32];
// primitiveElements =(array)=>
// {
//     document.write(`<ol>`)
//     for (let i = 0; i < array.length; i++)
//     {
//         document.write(`<li><strong>${array[i]}</strong></li>`);/////спрацювало <strong>//////
//     }
//     document.write(`</ol>`)
// }
// primitiveElements(arrayNumberTextBoolean);



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let array = [{id:1,name:'Vasya',age:9},{id:2,name:'Olya',age:25},{id:3,name:'Jorj',age:20}];
// objectArray=(array)=>
// {
//     for (const arrayElement of array)
//     {
//         document.write(`<div>${arrayElement.id})${arrayElement.name}=${arrayElement.age}</div>`);
//         console.log(`<div>${arrayElement.id})${arrayElement.name}=${arrayElement.age}</div>`)
//     }
// }
// objectArray(array);