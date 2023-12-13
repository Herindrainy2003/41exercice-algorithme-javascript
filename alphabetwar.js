let right = {m : '4', q : '3' , d : '2', z : '1'}
let left = {w : '4' ,p :'3' , b : '2', s :'1'}
console.log(right.m)
function alphabetwar(word){
    let tab_right = []
    let tab_left = []
   return  word.split('').map((lettres , indice) =>( right.includes(lettres) ))
    // word.split('').map((n) => (left[n])===n ? tab_left.push(n) : null )
    // console.log(tab_right)
    // console.log(tab_left)
}

console.log(alphabetwar("zdqmwpbs"))