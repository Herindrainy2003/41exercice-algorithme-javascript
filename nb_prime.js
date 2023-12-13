function is_prime(nb){
    let tab = []
    for(let i = 2 ; nb > i ; i++){
      
        if(nb % i === 0){
            tab.push(i)
       }
    }
console.log(((tab.length > 0 )?  false : true))
       
}

is_prime()
