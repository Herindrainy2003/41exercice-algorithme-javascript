// function highAndLow(number){
//    let tab = number.split(' ').sort((a,b)=> a - b)
//    console.log(tab[0] , tab[tab.length - 1] ) 
  
// }
function highAndLow(numbers){
    return Math.max(...numbers.split(' '))+" "+Math.min(...numbers.split(' '));
    }

console.log(highAndLow('1 -4 6 8'))
highAndLow("1 2 -3 4 5")
highAndLow("1 9 3 4 -5")