// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let contentById = document.getElementById("content");
console.log(contentById);

// -- отримує текст з блоку з id "rules"
let rulesById = document.getElementById("rules");
console.log(rulesById);

// -- замініть текст параграфа з id 'content' на будь-який інший
contentById.innerText='Хотіли снігу - маєте.'
//результат одинаковий як innerText так і innerHTML, цікаво чому виводить тільки останній текст, а не два.////
contentById.innerHTML='<strong>Напишіть відповідь, бо не засну.</strong>'



// -- замініть текст параграфа з id 'rules' на будь-який інший
 rulesById.innerHTML='Основне правило - ніяких правил (нижче пояса не бити).'

// -- змініть кожному елементу колір фону на червоний//оранжевий гарніше виглядає///
let childrenBackground=document.body.children;
for (const el of childrenBackground){
    el.style.backgroundColor='#ff2e2e';
}

// -- змініть кожному елементу колір тексту на синій
let childrenColor=document.body.children;
for (const el of childrenColor){
    el.style.color='blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let rulesId = document.getElementById('rules');
console.log(rulesId.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let classRules=document.getElementsByClassName('fc_rules');
for (const el of classRules){
    el.style.color='red';
}






