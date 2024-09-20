// let str ="ithub"
// alert( str.toUpperCase());

// let str ="lorem"
// let newStr = str.length
// console.log(newStr)

// let year = prompt('в каком году я родился?')
// if(year==2006){
//     alert("ВЫ ЧЕРТОВСКИ ПРАВЫ")
// }else{
//     alert('вы не правы')
// }

// let year = prompt('в каком году я родился?')
// if(year<2006){
//     alert("очень рано")
// }else if(year>2006){
//     alert('поздно')
// }else{
//     alert('вы правы')
// }

//let accessAllowed = (age > 18) ? true : false

let age = prompt('возвраст?', 18 )
let message = ('age < 3')? "здравствуй малыш" :
(age < 18)? "привет" :
(age < 100)? "здраствуйте" :
"какой необычный возвраст"
alert(message)
