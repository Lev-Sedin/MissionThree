// for (let i = 0;i<=5;i++){
//  console.log(i)
// }
// let a = 0

// while(a <= 5){
//     console.log(a)
//     a++
// }

// let b = 0

// do{
//     console.log(b)
//     b++
// } while(b <=5)
// let c = 0
// while(c < 3){
//     console.log(`Число: ${c}`)
//     c++
// }

// Ferst: for (let i = 0; i < 2 ; i++){
//     for (let c = 0; c<3;c++){
//         if(c == 1) {
//         break Ferst  
//     }
//     console.log(c)
//     }
    
// }
// firstfor: for (let num = 0; num < 2; num++) {
// 	//Цикл №2
// 	for (let size = 0; size < 3; size++) {
// 		if (size == 1) {
// 		break firstfor;
// 		}
// 		console.log(size);
// }
// }
// function showName(){
//     console.log("Anna!");
// }
// setTimeout(showName,0);
// console.log("Ivan");
// const userInfo = {
//     name: "Lev",
//     age: 21,
//     "58": "Значение свойства"
// }
// console.log(userInfo[58])
// let userInfo = {
//     name: "Lev",
//     age: 21,
//     showInfo(){
//         console.log(`${this.name}`);
//     }
// }

// let user = userInfo;
// userInfo = null;
// user.showInfo()
// let userInfo = {
//     name: "Lev",
//     age: 21,
// }
// for (const key in userInfo){
//     const value = userInfo[key];
//     console.log(key);
//     console.log(value);
// }
// let userInfo = {
//     name: "Lev",
//     age: 21,
//     address:{
//         city: "SPb",
//     }
// }
// for (const key in userInfo.address){
//     console.log(userInfo.address[key]);
// }
// const userInfo = {
//     name: "Lev",
//     age: 21,
//    "like js": true,
// }

// console.log(userInfo["like js"])
// let userInfo = {
//     name: "lev",
//     age: 21,
// }
// console.log(userInfo);
// userInfo.name = "Good";
// console.log(userInfo)
// delete userInfo.name;
// console.log(userInfo)
// var landMarks = [];
// landMarks.push("Мой дом")
// landMarks.push("Дорожка")
// landMarks.push("Фонарь")
// landMarks.push("Гидрант ")
// landMarks.push("Пожарная стнация ")
// landMarks.push("Приют")
// landMarks.push("Школа")
// landMarks.push("Дом")



// console.log(landMarks)

// landMarks.pop()
// landMarks.pop()
// landMarks.pop()
// landMarks.pop()
// landMarks.pop()
// landMarks.pop()
// landMarks.pop()
// landMarks.pop()

// console.log(landMarks)

// let momeny = ["good","bad","lazy","boring"];
// let coma =Math.floor(Math.random()* 4);



// console.log(momeny[coma])

// let variant = [
//     "Звучит неплохо",
//     "Определенно",
//     "Не думаю",
//     "Может потом?",
//     "Нет",
// ]

// let overVariant = variant[Math.floor(Math.random()*5)]

// console.log(overVariant)

// let body = ["глаз", "рот", "ухо",];
// let adjective = ["неприятная", "вонючая", "глупая",];
// let words = ["слон", "уж", "лев", "кот", "мышь",];

// let randomBody = body[Math.floor(Math.random()* body.length)]
// let randomAdjective = adjective[Math.floor(Math.random()*adjective.length)]
// let randomWords = words[Math.floor(Math.random()*words.length)]

// let end = ["У тебя",randomBody,"словно",randomAdjective,randomWords ,"!!!"].join("-");
// console.log(end)

// let number = [3,2,1]
// let nexNumber = number.join(" больше,чем ")
// console.log(number)
// console.log(nexNumber)


// let score = {
//     Lev: 0,
//     Misha: 0,
// }
// score.Lev +=3;
// score.Misha +=3;
// score.Lev -=1;

// console.log(score)


// let crazy = {
// name: "Нелепый обЪект",
// "some array": [7,9,{purpoxe:"путаница", number: 123}, 3.3],
// "random animal": "shaRks",
// }
// let crazyObject = crazy["some array"][2].number
// console.log(crazyObject)
// console.log(crazy)

// let num = 1.005 + Number.EPSILON
// let one = Math.round(num*100)/100;

// console.log(one)


// let value = parseFloat("135.58px")
// console.log(value)


// let value = 58 + "pop";
// if(isNaN(value)){
//     console.log("Pop Nan")
// }


// let num = Math.max(10,58,39,-150,0)

// console.log(num)

// let value = parseInt("58.858px")
// console.log(value)

// let name = "Pop"

// if (name === "Lev"){
//     console.log("Привет мне")
// } else if (name === "Igor"){
//     console.log("Привет Игорь")
// } else if (name === "Sveta"){
//     console.log("Привет " + name)
// } else {
//     console.log("Привет незнакомец")
// }


// for(let i = 3; i<10000;i = i*3){
//     console.log(i)
// }
// let i = 3;

// while(i<10000){
//     console.log(i)
//     i = i *3
// }


// let animal = ["Cat", "Dog", "Lion", "Zebra", "Duck",]
// for (i=0;i < animal.length; i++){
//     animal[i]= animal[i]+"-прекрасное животное"
// }
// console.log(animal)


// let words = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

// let randomString=""

// while(randomString.length < 6){
//     randomString += words[Math.floor(Math.random()* words.length)]
// }
// console.log(randomString)


// let input = "javascript is awesome";
// let output = "";

// for (let i = 0;i<input.length;i++){
//     if(input[i]==="a"){
//         output +="4";
//     }else if(input[i]==="e"){
//         output +="3";
//     }else if(input[i]==="i"){
//         output +="1";
//     }else if(input[i]==="o"){
//         output +="0";
//     }else {
//         output += input[i]
//     }
// }


// console.log(output);



// let text = "Фрилансер";
// console.log(text[5])
// console.log(text.toUpperCase())
// console.log(text.slice(3,6))
// console.log(text.includes("лан",4))


// let arr = ["L","V","m",];
// let newArr= arr
// newArr.push("C")
// console.log(arr.length)

let users = ["Ваня","Иштан"]

users.push("Оля")

users.splice(1,1,"Петя")

let arr = users.splice(0,1)
users.splice(0,0,"Маша","Паша")
console.log(arr)
console.log(users)

let usersNew = ["Ваня","Иштан","Оля"]
let arrNew = usersNew.splice(1,1)
console.log(arrNew)


let strr = "Ваня,Иштан,Оля";

let strrr = strr.split(",")
console.log(strrr)
