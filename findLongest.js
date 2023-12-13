function findLongest(number){
   let sort_number = number.sort((a, b)=>b-a)
   return sort_number[0]
}

console.log(findLongest([199, 10, 100]))
