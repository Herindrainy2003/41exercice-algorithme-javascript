// function DNAstrand(adn){
//     adn_tab = [...adn]
//    return  adn_tab.map((n) => (n === 'A') ? 'T' : (n === 'T') ? 'A' : (n=== 'C') ? 'G' :(n === 'G') ? 'C' : null).join(' ')

// }

let lesAdn = {'A' : 'T' ,'T' : 'A' , 'C' : 'G' ,'G' : 'C'}

DNAstrand = (adn) => adn.split('').map((v) => lesAdn[v]).join('')


console.log(DNAstrand('ATCG'))