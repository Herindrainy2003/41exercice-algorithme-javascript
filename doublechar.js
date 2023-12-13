// let doublechar = (word) =>{
//    let mot = word.split('')
//    mot.forEach(element => {
//     let res = element + element
  
//     console.log(res)
//    });
   
   
// }
doubleChar=(str)=>str.replace(/./g, '$&$&')
console.log(doubleChar('hello word'))