let cryptage = {A : 'G' , a : 'g' , G : 'g' , g : 'G' , L : 'U' , K : 'U' , l : 'u' , k : 'i' , P : 'O' , p : 'o'  , R : 'Y' , r : 'y', Y : 'Y' ,  D : 'E' , d : 'e'} 
 
function encode(word){
   return word.split('').map((n) => cryptage[n] ? cryptage[n] : n).join('')
}
console.log(encode('ABCD'))


