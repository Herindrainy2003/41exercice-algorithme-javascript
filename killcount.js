function killcount(tab , intelligence_jason){
    let tab_sorted = []
tab.map(([nom , skill]) => (skill < intelligence_jason) ? tab_sorted.push(nom) : null)
return  tab_sorted
}

console.log(killcount([['Tiffany',4],['Jack',6],['Megan',7],['Tyler',3]],6))
