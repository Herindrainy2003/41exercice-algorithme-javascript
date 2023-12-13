

function return_compte(nb){
    let tab = []
    for(let i = 0 ; nb+1 > i ; i ++){
      tab.push(i)
     }
     return tab
}


function counterEffect(listnumber){
    let tab_finnaly = []
    let list_to_tab = [...listnumber]
    list_to_tab.forEach((element)=>{
        tab_finnaly.push(return_compte((Number(element))))
        
    })
    console.log('*********************')
  return tab_finnaly 
 
}

console.log(counterEffect('1234'))
console.log(counterEffect('0034'))
console.log(counterEffect('1034'))

