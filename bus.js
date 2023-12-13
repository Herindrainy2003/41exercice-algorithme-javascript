
let number = (tab) =>{
    let tab_indice_0 = []
    let tab_indice_1 = []
    let res = 0
    for(let i = 0 ; tab.length > i ; i++){
        tab_indice_0.push(tab[i][0])
        tab_indice_1.push(tab[i][1])
      
  }
 
  sum_indice_0 = tab_indice_0.reduce((acc , n) => acc + n)
  sum_indice_1 = tab_indice_1.reduce((acc , n) => acc + n)
  res = sum_indice_0 - sum_indice_1
  console.log(`la reste de tous les passagiers est ${res}`)
 

}


number([[10,0],[3,5],[5,8]])
number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])
number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])