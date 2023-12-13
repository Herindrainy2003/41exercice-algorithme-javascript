// function findsort(phrase){
//  let tab_phrase = phrase.split(' ')
//  let tab_len = []
//  tab_phrase.forEach(element => {
//     tab_len.push(element.length)
    
//  });

//  tab_sort = tab_len.sort((a , b)=> a - b)
//  return tab_sort[0]

// }
findsort =(phrase)=> phrase.split(' ').reduce((a , w) => a.length <= w.length ? a : w)

console.log(findsort('voila la phrase'))
console.log(findsort("bitcoin take over the world maybe who knows perhaps"))
