// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User(name, surname , email, phone){
//         this.name=name;
//         this.surname=surname;
//         this.email=email;
//         this.phone=phone;
// }
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// const arrayUsers=[
//     new User('Vasya','Vasin','vasin@gmail.com',80671234560),
//     new User('Yura','Yurin','yurin@gmail.com',80671234569),
//     new User('Olya','Olina','olina@gmail.com',80671234568),
//     new User('Yulia','Yulina','yulina@gmail.com',80671234567),
//     new User('Petya','Petin','petin@gmail.com',80671234566),
//     new User('Edaras','Edarasov','edarasov@gmail.com',80671234565),
//     new User('Kozak','Kozakov','kozakov@gmail.com',80671234564),
//     new User('Pavlik','Pavlenko','pavlenko@gmail.com',80671234563),
//     new User('Sosulka','Sosulkina','sosulka@gmail.com',80671234562),
//     new User('Ostap','Ostapenko','ostapenko@gmail.com',80671234561),
// ]
// let map=arrayUsers.map((User,index)=>{User.id=index+4;return User;})////для себе///
// console.log(map)
// console.log(arrayUsers)
// console.log(arrayUsers[8])
// console.log(arrayUsers[7].name)
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filterUser = arrayUsers.filter((item) => {
//     if (item.id % 2 === 0){return item}});
// console.log(filterUser);
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(filterUser.sort((a, b) => a.id - b.id));
// console.log(filterUser.sort((a, b) => b.id - a.id));
// ///чому в консолі всі 3 (30, 33, 34) відпрацьовує по останніх умовах (як в 34 з більшого до меньшого)?///

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {constructor(id, name, surname , email, phone, order) {
//     this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone=phone;
//     this.order=order;
// }}
// // - створити пустий масив, наповнити його 10 об'єктами Client
// let emptyArray=[
//     new Client(1,'Jora','Joricov','jorik@gmail.com',80679876543,['fish','gun','beer','meat','rom','drugs','book','milk','pizza']),
//     new Client(2,'Vasya','Vasin','vasin@gmail.com',80671234560,['fish','gun','meat','rom','beer','meat']),
//     new Client(3,'Yura','Yurin','jyurin@gmail.com',80679876544,['fish','gun','drugs','rom']),
//     new Client(4,'Olya','Olina','olina@gmail.com',80679876545,['fish','gun']),
//     new Client(5,'Yulia','Yulina','yulina@gmail.com',80679876546,['fish','meat','rom','milk','pizza']),
//     new Client(6,'Edaras','Edarasov','edarasov@gmail.com',80679876547,['fish','gun','milk']),
//     new Client(7,'Pavlik','Pavlenko','pavlenko@gmail.com',80679876548,['fish','meat']),
//     new Client(8,'Sosulka','Sosulkina','sosulka@gmail.com',80679876549,['fish','gun','meat','rom']),
//     new Client(9,'Petya','Petin','petin@gmail.com',80679876540,['fish','meat','rom']),
//     new Client(10,'Kozak','Kozakov','kozakov@gmail.com',80679876541,['fish','gun','meat','milk','pizza']),
// ]
// console.log(emptyArray)
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(emptyArray.sort((a, b) => a.order.length - b.order.length));





