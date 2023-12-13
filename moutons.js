// function compte_moutons(les_moutons){
//    return (les_moutons.map(mouton => (mouton === 'moutons' ? true : false)))
// }

// console.log(compte_moutons(['boeufs' ,'cochon' , 'moutons' ,'moutons' , 'fourmis']))

function compte_moutons(tab){
let tab_true = []
   tab.forEach((element) => {
   let bol = element.toString()
   if(bol === 'true'){
      tab_true.push(bol)
   }
});
console.log(tab_true.length)
}

compte_moutons([true, true, true, false,
   true, true, true, true ,
   true, false, true, false,
   true, false, false, true ,
   true, true, true, true ,
   false, false, true, true])