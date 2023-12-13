let  fibonacci = (n) =>{
    let a = 0
        let b = 1
        let temp;
    for(let i =0 ; n >i ; i++){ 
         temp = a
        a = b
         b += temp     
        console.log(b) 
   }

}


fibonacci(9)