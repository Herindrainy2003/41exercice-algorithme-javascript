// function string_clean(mot){
//     let mot_tab = mot.split('')
//     let tab = []

// mot_tab.forEach(element => {
//   if(!Number(element) && element !== '0'){
//    tab.push(element)
//   }
// });
// console.log(tab.join(''))

// }

function string_clean(s){
  // return s.replace(/[0-9]/g, '');
  return s.replace(/\d/g, '');//parcourir en tableau est remplacer le nombre en vide
  }
  console.log(string_clean('ceci est4 1ne m07'))





