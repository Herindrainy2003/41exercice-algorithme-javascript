// let arrara = (number) =>{
//    let tab = ['anane  ' , 'adak  ']
//     if(number === 1){
//        return tab[0]
//     }else if(number === 2){
//         return tab[1]
//     }else if(number > 2){
//         if(number % 2 === 0){
//            return tab[1].repeat(number/2)
//         }else{
//            return tab[1].repeat(Math.floor(number / 2))+tab[0]
//         }
//     }
    
// }
let arrara = (n) =>( n > 2)  ? "adak " + arrara(n-2) : n === 2 ? "adak" : "anane"


console.log(arrara(1))
console.log(arrara(3))
console.log(arrara(8))