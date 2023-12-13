// function tri_bulle(tab){
//     for(let i = 0 ; tab.length > i ; i++){
//         for(let j = 0 ; (tab.length-1) > j ; j++){
//             if(tab[j] > tab[j+1]){
//                 let temp = tab[j+1]
//                  tab[j+1] =tab[j]
//                  tab[j] = temp

//             }
//         }
//     }
//     return tab
// }


let tab = [5,67,3,90,12]
console.log(tab.sort((a,b ) => (a - b)))

// console.log(tri_bulle(tab))

